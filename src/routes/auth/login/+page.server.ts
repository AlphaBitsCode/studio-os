import { fail, redirect } from '@sveltejs/kit';
import { directus } from '$lib/server/db';
import { readUsers } from '@directus/sdk';
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

		// Validation
		if (!email || !password) {
			return fail(400, {
				error: 'Email and password are required',
				email
			});
		}

		if (!email.includes('@')) {
			return fail(400, {
				error: 'Please enter a valid email address',
				email
			});
		}

		try {
			// Find user by email
			const users = await directus.request(
				readUsers({
					filter: { email: { _eq: email } },
					fields: ['id', 'email', 'password', 'status', 'first_name', 'last_name'],
					limit: 1
				})
			);

			if (!users || users.length === 0) {
				return fail(400, {
					error: 'Invalid email or password',
					email
				});
			}

			const user = users[0];

			// Check if user is active
			if (user.status !== 'active') {
				return fail(400, {
					error: 'Account is not active',
					email
				});
			}

			// Note: In a real application, you would verify the password hash
			// For now, we'll use a simple comparison (not secure for production)
			if (!user.password || user.password !== password) {
				return fail(400, {
					error: 'Invalid email or password',
					email
				});
			}

			// Create session
			const sessionToken = auth.generateSessionToken();
			const session = await auth.createSession(sessionToken, user.id);

			// Set session cookie
			auth.setSessionTokenCookie({ cookies } as any, sessionToken, session.expires_at);

			// Redirect to home page
			throw redirect(302, '/');
		} catch (error) {
			console.error('Login error:', error);
			return fail(500, {
				error: 'Login failed. Please try again.',
				email
			});
		}
	}
};