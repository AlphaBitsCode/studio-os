import { getBlogCategories, getBlogPostsGroupedByCategory } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		// Fetch categories and blog posts grouped by category
		const [categories, blogPostsByCategory] = await Promise.all([
			getBlogCategories(),
			getBlogPostsGroupedByCategory(2) // 2 posts per category for the main page
		]);

		return {
			categories,
			blogPostsByCategory,
			loading: false,
			error: ''
		};
	} catch (error) {
		console.error('Error loading tech-hotpot data:', error);
		return {
			categories: [],
			blogPostsByCategory: {},
			loading: false,
			error: 'Failed to load blog posts. Please try again later.'
		};
	}
};