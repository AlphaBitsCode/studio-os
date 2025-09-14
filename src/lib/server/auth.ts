import type { RequestEvent } from '@sveltejs/kit';
import { sha256 } from '@oslojs/crypto/sha2';
import { encodeBase64url, encodeHexLowerCase } from '@oslojs/encoding';
import { directus } from '$lib/server/db';
import { readUsers, readItems, createItem, updateItem, deleteItems } from '@directus/sdk';
import type { DirectusUser, DirectusSession } from '$lib/server/db/schema';

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const sessionCookieName = 'auth-session';

export function generateSessionToken() {
	const bytes = crypto.getRandomValues(new Uint8Array(18));
	const token = encodeBase64url(bytes);
	return token;
}

export async function createSession(token: string, userId: string) {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session = {
		id: sessionId,
		user_id: userId,
		token,
		expires_at: new Date(Date.now() + DAY_IN_MS * 30).toISOString()
	};

	try {
		// Create session in a custom collection (you'll need to create this in Directus)
		await directus.request(createItem('user_sessions', session));
		return { ...session, expires_at: new Date(session.expires_at), created_at: new Date() };
	} catch (error) {
		console.error('Failed to create session:', error);
		throw error;
	}
}

export async function validateSessionToken(token: string) {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

	try {
		// Get session from custom collection
		const sessions = await directus.request(
			readItems('user_sessions', {
				filter: { id: { _eq: sessionId } },
				limit: 1
			})
		);

		if (!sessions || sessions.length === 0) {
			return { session: null, user: null };
		}

		const sessionData = sessions[0];
		const session = {
			id: sessionData.id,
			user_id: sessionData.user_id,
			token: sessionData.token,
			expires_at: new Date(sessionData.expires_at),
			created_at: new Date(sessionData.created_at || sessionData.expires_at)
		};

		// Get user data
		const users = await directus.request(
			readUsers({
				filter: { id: { _eq: session.user_id } },
				fields: ['id', 'first_name', 'last_name', 'email', 'status'],
				limit: 1
			})
		);

		if (!users || users.length === 0) {
			// Clean up orphaned session
			await directus.request(deleteItems('user_sessions', [sessionId]));
			return { session: null, user: null };
		}

		const userData = users[0];

		// Check if session is expired
		const sessionExpired = Date.now() >= session.expires_at.getTime();
		if (sessionExpired) {
			await directus.request(deleteItems('user_sessions', [sessionId]));
			return { session: null, user: null };
		}

		// Renew session if needed
		const renewSession = Date.now() >= session.expires_at.getTime() - DAY_IN_MS * 15;
		if (renewSession) {
			const newExpiresAt = new Date(Date.now() + DAY_IN_MS * 30);
			await directus.request(
				updateItem('user_sessions', sessionId, {
					expires_at: newExpiresAt.toISOString()
				})
			);
			session.expires_at = newExpiresAt;
		}

		return {
			session,
			user: {
				id: userData.id,
				username: userData.email, // Use email as username for compatibility
				email: userData.email,
				first_name: userData.first_name,
				last_name: userData.last_name
			}
		};
	} catch (error) {
		console.error('Failed to validate session:', error);
		return { session: null, user: null };
	}
}

export type SessionValidationResult = Awaited<ReturnType<typeof validateSessionToken>>;

export async function invalidateSession(sessionId: string) {
	try {
		await directus.request(deleteItems('user_sessions', [sessionId]));
	} catch (error) {
		console.error('Failed to invalidate session:', error);
	}
}

export function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt: Date) {
	event.cookies.set(sessionCookieName, token, {
		expires: expiresAt,
		path: '/'
	});
}

export function deleteSessionTokenCookie(event: RequestEvent) {
	event.cookies.delete(sessionCookieName, {
		path: '/'
	});
}
