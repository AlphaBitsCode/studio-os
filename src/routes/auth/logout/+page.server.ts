import { redirect } from '@sveltejs/kit';
import * as auth from '$lib/server/auth';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ locals, cookies }) => {
		if (locals.session) {
			// Invalidate the session in the database
			await auth.invalidateSession(locals.session.id);
		}

		// Delete the session cookie
		auth.deleteSessionTokenCookie({ cookies } as any);

		// Redirect to home page
		throw redirect(302, '/');
	}
};
