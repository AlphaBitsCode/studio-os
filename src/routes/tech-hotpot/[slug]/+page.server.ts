import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
		// Fetch the blog post by slug
		const response = await fetch(`/api/blog-posts?slug=${params.slug}`);
		
		if (!response.ok) {
			if (response.status === 404) {
				throw error(404, 'Blog post not found');
			}
			throw error(500, 'Failed to load blog post');
		}
		
		const data = await response.json();
		
		if (!data.post) {
			throw error(404, 'Blog post not found');
		}
		
		return {
			post: data.post
		};
		
	} catch (err) {
		console.error('Error loading blog post:', err);
		
		// Re-throw SvelteKit errors
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}
		
		throw error(500, 'Failed to load blog post');
	}
};