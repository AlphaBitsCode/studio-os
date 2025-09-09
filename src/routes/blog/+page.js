import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	try {
		const directus = getDirectusInstance(fetch);
		
		// Fetch published blog posts with author and category information
		const posts = await directus.request(
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
					'author.first_name',
					'author.last_name',
					'author.avatar',
					'category.title',
					'category.color',
					'category.slug'
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