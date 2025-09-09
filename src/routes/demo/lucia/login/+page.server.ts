import { hash, verify } from '@node-rs/argon2';
import { encodeBase32LowerCase } from '@oslojs/encoding';
import { fail, redirect } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';
import { directus } from '$lib/server/db';
import { readUsers, createUser, authentication } from '@directus/sdk';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (event.locals.user) {
		return redirect(302, '/demo/lucia');
	}
	return {};
};

export const actions: Actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!validateUsername(username)) {
			return fail(400, {
				message: 'Invalid username (min 3, max 31 characters, alphanumeric only)'
			});
		}
		if (!validatePassword(password)) {
			return fail(400, { message: 'Invalid password (min 6, max 255 characters)' });
		}

		try {
			// Authenticate with Directus
			const authResult = await directus.request(
				authentication('login', {
					email: username,
					password: password
				})
			);

			if (!authResult || !authResult.access_token) {
				return fail(400, { message: 'Incorrect username or password' });
			}

			// Get user info after successful authentication
			const users = await directus.request(
				readUsers({
					filter: { email: { _eq: username } },
					fields: ['id', 'first_name', 'last_name', 'email', 'status'],
					limit: 1
				})
			);

			if (!users || users.length === 0) {
				return fail(400, { message: 'User not found' });
			}

			const user = users[0];
			
			// Create session after successful Directus authentication
			const sessionToken = auth.generateSessionToken();
			const session = await auth.createSession(sessionToken, user.id);
			auth.setSessionTokenCookie(event, sessionToken, session.expires_at);

			return redirect(302, '/demo/lucia');
		} catch (error) {
			console.error('Login error:', error);
			return fail(400, { message: 'Incorrect username or password' });
		}
	},
	register: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!validateUsername(username)) {
			return fail(400, { message: 'Invalid username' });
		}
		if (!validatePassword(password)) {
			return fail(400, { message: 'Invalid password' });
		}

		try {
			// Create user in Directus
			const newUser = await directus.request(
				createUser({
					email: username, // Using username as email
					password: password,
					status: 'active',
					first_name: username // Default first name to username
				})
			);

			const sessionToken = auth.generateSessionToken();
			const session = await auth.createSession(sessionToken, newUser.id);
			auth.setSessionTokenCookie(event, sessionToken, session.expires_at);

			return redirect(302, '/demo/lucia');
		} catch (error) {
			console.error('Registration error:', error);
			return fail(500, { message: 'An error has occurred during registration' });
		}
	}
};

function generateUserId() {
	// ID with 120 bits of entropy, or about the same as UUID v4.
	const bytes = crypto.getRandomValues(new Uint8Array(15));
	const id = encodeBase32LowerCase(bytes);
	return id;
}

function validateUsername(username: unknown): username is string {
	return (
		typeof username === 'string' &&
		username.length >= 3 &&
		username.length <= 31 &&
		/^[a-z0-9_.-]+$/.test(username) // Allow dots for email format
	);
}

function validatePassword(password: unknown): password is string {
	return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
