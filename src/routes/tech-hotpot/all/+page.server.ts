import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		// Fetch all blog posts without category filtering
		const response = await fetch('/api/blog-posts');
		
		if (!response.ok) {
			throw error(500, 'Failed to load blog posts');
		}
		
		const data = await response.json();
		
		return {
			posts: data.posts || [],
			total: data.total || 0
		};
		
	} catch (err) {
		console.error('Error loading all blog posts:', err);
		
		// Re-throw SvelteKit errors
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}
		
		throw error(500, 'Failed to load blog posts');
	}
};