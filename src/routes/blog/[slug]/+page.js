import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	try {
		const directus = getDirectusInstance(fetch);
		
		// Fetch the specific blog post by slug
		const posts = await directus.request(
			readItems('posts', {
				filter: {
					slug: { _eq: params.slug },
					status: { _eq: 'published' },
					type: { _eq: 'blog' }
				},
				fields: [
					'*',
					'author.first_name',
					'author.last_name',
					'author.avatar',
					'category.title',
					'category.color',
					'category.slug',
					'seo.title',
					'seo.meta_description',
					'seo.meta_keywords',
					'seo.og_image'
				],
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
				relatedPosts = await directus.request(
					readItems('posts', {
						filter: {
							category: { _eq: post.category.id || post.category },
							id: { _neq: post.id },
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