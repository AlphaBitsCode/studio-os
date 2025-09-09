import { createDirectus, rest, staticToken } from '@directus/sdk';
import { env } from '$env/dynamic/private';

if (!env.DIRECTUS_URL) throw new Error('DIRECTUS_URL is not set');
if (!env.DIRECTUS_SERVER_TOKEN) throw new Error('DIRECTUS_SERVER_TOKEN is not set');

// Define your Directus schema types here
export interface DirectusSchema {
	directus_users: {
		id: string;
		first_name?: string;
		last_name?: string;
		email: string;
		password?: string;
		status: string;
		role?: string;
		date_created?: string;
		date_updated?: string;
	};
	user_sessions: {
		id: string;
		user_id: string;
		token: string;
		expires_at: string;
		created_at?: string;
	};
}

// Create Directus client with authentication
export const directus = createDirectus<DirectusSchema>(env.DIRECTUS_URL)
	.with(staticToken(env.DIRECTUS_SERVER_TOKEN))
	.with(rest());

export default directus;
