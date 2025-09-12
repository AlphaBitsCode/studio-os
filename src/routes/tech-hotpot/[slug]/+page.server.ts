import { getBlogPostBySlug } from '$lib/server/blog';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const { slug } = params;
		
		if (!slug) {
			throw error(400, 'Blog post slug is required');
		}
		
		// Fetch the blog post by slug
		const post = await getBlogPostBySlug(slug);
		
		if (!post) {
			throw error(404, 'Blog post not found');
		}

		return {
			post,
			loading: false,
			error: ''
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