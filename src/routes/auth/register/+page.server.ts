import { fail, redirect } from '@sveltejs/kit';
import { directus } from '$lib/server/db';
import { createUser, readUsers } from '@directus/sdk';
import * as auth from '$lib/server/auth';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// Redirect if already logged in
	if (locals.user) {
		throw redirect(302, '/');
	}
	return {};
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();
		const confirmPassword = formData.get('confirmPassword')?.toString();
		const firstName = formData.get('firstName')?.toString();
		const lastName = formData.get('lastName')?.toString();

		// Validation
		if (!email || !password || !confirmPassword || !firstName || !lastName) {
			return fail(400, {
				error: 'All fields are required',
				email,
				firstName,
				lastName
			});
		}

		if (!email.includes('@')) {
			return fail(400, {
				error: 'Please enter a valid email address',
				email,
				firstName,
				lastName
			});
		}

		if (password.length < 6) {
			return fail(400, {
				error: 'Password must be at least 6 characters long',
				email,
				firstName,
				lastName
			});
		}

		if (password !== confirmPassword) {
			return fail(400, {
				error: 'Passwords do not match',
				email,
				firstName,
				lastName
			});
		}

		try {
			// Check if user already exists
			const existingUsers = await directus.request(
				readUsers({
					filter: { email: { _eq: email } },
					fields: ['id'],
					limit: 1
				})
			);

			if (existingUsers && existingUsers.length > 0) {
				return fail(400, {
					error: 'An account with this email already exists',
					email,
					firstName,
					lastName
				});
			}

			// Create new user
			const newUser = await directus.request(
				createUser({
					email,
					password, // Note: In production, this should be hashed
					first_name: firstName,
					last_name: lastName,
					status: 'active',
					role: null // Will use default role
				})
			);

			if (!newUser) {
				return fail(500, {
					error: 'Failed to create account. Please try again.',
					email,
					firstName,
					lastName
				});
			}

			// Create session for the new user
			const sessionToken = auth.generateSessionToken();
			const session = await auth.createSession(sessionToken, newUser.id);

			// Set session cookie
			auth.setSessionTokenCookie({ cookies } as any, sessionToken, session.expires_at);

			// Redirect to home page
			throw redirect(302, '/');
		} catch (error) {
			console.error('Registration error:', error);
			return fail(500, {
				error: 'Registration failed. Please try again.',
				email,
				firstName,
				lastName
			});
		}
	}
};