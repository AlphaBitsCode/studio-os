import directus from '$lib/server/db';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

// @ts-ignore - Directus typing issue with posts collection
const typedDirectus = /** @type {any} */ (directus);

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	try {
		
		// Fetch the specific blog post by slug
		const posts = await typedDirectus.request(
			readItems('posts', {
				filter: {
					slug: { _eq: params.slug },
					status: { _eq: 'published' },
					type: { _eq: 'blog' }
				},
				fields: ['*'],
				limit: 1
			})
		);

		if (!posts || posts.length === 0) {
			throw error(404, 'Blog post not found');
		}

		const post = posts[0];

		// Fetch related posts (same category, excluding current post)
		/** @type {any[]} */
		let relatedPosts = [];
		if (post.category) {
			try {
				relatedPosts = await typedDirectus.request(
				readItems('posts', {
					filter: {
						category: { _eq: /** @type {any} */ (post).category },
						id: { _neq: /** @type {any} */ (post).id },
						status: { _eq: 'published' },
						type: { _eq: 'blog' }
					},
					sort: ['-date_published'],
					fields: [
						'id',
						'title',
						'slug',
						'summary',
						'date_published',
						'image'
					],
					limit: 3
				})
			);
			} catch (err) {
				console.warn('Error fetching related posts:', /** @type {Error} */ (err));
			}
		}

		return {
			post,
			relatedPosts
		};
	} catch (err) {
		if (/** @type {any} */ (err).status === 404) {
			throw err;
		}
		console.error('Error fetching blog post:', err);
		throw error(500, 'Failed to load blog post');
	}
}