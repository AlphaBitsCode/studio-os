import { getAllBlogPosts, getBlogPostsByCategory, getBlogCategories } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	try {
		const categorySlug = url.searchParams.get('category');

		// Fetch categories for navigation
		const categories = await getBlogCategories();

		// Fetch posts based on category filter
		let posts;
		let selectedCategory = null;

		if (categorySlug) {
			// Find the selected category
			selectedCategory = categories.find((cat) => cat.slug === categorySlug) || null;
			posts = await getBlogPostsByCategory(categorySlug);
		} else {
			// Get all posts if no category filter
			posts = await getAllBlogPosts();
		}

		return {
			posts,
			categories,
			selectedCategory,
			categorySlug,
			loading: false,
			error: ''
		};
	} catch (error) {
		console.error('Error loading tech-hotpot/all data:', error);
		return {
			posts: [],
			categories: [],
			selectedCategory: null,
			categorySlug: null,
			loading: false,
			error: 'Failed to load blog posts. Please try again later.'
		};
	}
};
