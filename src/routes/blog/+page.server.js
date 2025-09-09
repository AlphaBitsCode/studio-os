import directus from '$lib/server/db';
import { readItems } from '@directus/sdk';

// @ts-ignore - Directus typing issue with posts collection
const typedDirectus = /** @type {any} */ (directus);

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		
		// Fetch published blog posts with author and category information
		const posts = await typedDirectus.request(
			readItems('posts', {
				filter: {
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
					'date_created',
					'image',
					'author',
					'category'
				]
			})
		);

		return {
			posts
		};
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return {
			posts: []
		};
	}
}