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
		avatar?: string;
	};
	user_sessions: {
		id: string;
		user_id: string;
		token: string;
		expires_at: string;
		created_at?: string;
	};
	posts: {
		id: string;
		title: string;
		slug: string;
		summary?: string;
		content?: string;
		status: 'published' | 'draft' | 'archived';
		type: 'blog' | 'project';
		date_created?: string;
		date_updated?: string;
		date_published?: string;
		image?: string;
		author?: string;
		category?: string;
		seo?: string;
		sort?: number;
		user_created?: string;
		user_updated?: string;
		client?: string;
		cost?: string;
		built_with?: string[];
		video_url?: string;
		gallery?: string[];
	};
	categories: {
		id: string;
		title: string;
		slug: string;
		color?: string;
		headline?: string;
		seo?: string;
		sort?: number;
	};
	seo: {
		id: string;
		title?: string;
		meta_description?: string;
		meta_keywords?: string;
		og_image?: string;
	};
	global: {
		id: string;
		title?: string;
		description?: string;
		tagline?: string;
		url?: string;
		email?: string;
		phone?: string;
		address_country?: string;
		address_locality?: string;
		address_region?: string;
		street_address?: string;
		postal_code?: string;
		og_image?: string;
		logo_on_dark_bg?: string;
		logo_on_light_bg?: string;
		social_links?: any;
		theme?: any;
		build_hook_url?: string;
	};
	pages: {
		id: string;
		title: string;
		slug: string;
		content?: string;
		description?: string;
		status?: 'published' | 'draft' | 'archived';
		date_created?: string;
		date_updated?: string;
		user_created?: string;
		user_updated?: string;
		seo?: string;
	};
}

// Create Directus client with authentication
export const directus = createDirectus<DirectusSchema>(env.DIRECTUS_URL)
	.with(staticToken(env.DIRECTUS_SERVER_TOKEN))
	.with(rest());

export default directus;
