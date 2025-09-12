import { env } from '$env/dynamic/private';

export interface BlogPost {
	id: string;
	title: string;
	slug: string;
	summary?: string;
	content?: string;
	date_published?: string;
	date_created?: string;
	image?: string;
	author?: string;
	category?: {
		id: string;
		title: string;
		slug: string;
		color?: string;
	};
	status: 'published' | 'draft' | 'archived';
	type: 'blog' | 'project';
}

export interface BlogCategory {
	id: string;
	title: string;
	slug: string;
	color?: string;
	headline?: string;
	sort?: number;
}

/**
 * Fetch all published blog posts
 */
export async function getAllBlogPosts(limit?: number): Promise<BlogPost[]> {
	try {
		// Use fetch with the Directus URL directly
		const url = new URL('/items/posts', env.DIRECTUS_URL || 'http://localhost:8055');
		url.searchParams.set('filter[status][_eq]', 'published');
		url.searchParams.set('filter[type][_eq]', 'blog');
		url.searchParams.set('sort', '-date_published');
		if (limit) url.searchParams.set('limit', limit.toString());
		url.searchParams.set('fields', [
			'id',
			'title',
			'slug',
			'summary',
			'date_published',
			'date_created',
			'image',
			'author',
			'status',
			'type',
			'category.id',
			'category.title',
			'category.slug',
			'category.color'
		].join(','));

		const response = await fetch(url.toString(), {
			headers: {
				'Authorization': `Bearer ${env.DIRECTUS_SERVER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.data as BlogPost[];
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return [];
	}
}

/**
 * Fetch blog posts by category
 */
export async function getBlogPostsByCategory(categorySlug?: string, limit?: number): Promise<BlogPost[]> {
	try {
		const url = new URL('/items/posts', env.DIRECTUS_URL || 'http://localhost:8055');
		url.searchParams.set('filter[status][_eq]', 'published');
		url.searchParams.set('filter[type][_eq]', 'blog');
		if (categorySlug) {
			url.searchParams.set('filter[category][slug][_eq]', categorySlug);
		}
		url.searchParams.set('sort', '-date_published');
		if (limit) url.searchParams.set('limit', limit.toString());
		url.searchParams.set('fields', [
			'id',
			'title',
			'slug',
			'summary',
			'date_published',
			'date_created',
			'image',
			'author',
			'status',
			'type',
			'category.id',
			'category.title',
			'category.slug',
			'category.color'
		].join(','));

		const response = await fetch(url.toString(), {
			headers: {
				'Authorization': `Bearer ${env.DIRECTUS_SERVER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.data as BlogPost[];
	} catch (error) {
		console.error('Error fetching blog posts by category:', error);
		return [];
	}
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
	try {
		const url = new URL('/items/posts', env.DIRECTUS_URL || 'http://localhost:8055');
		url.searchParams.set('filter[status][_eq]', 'published');
		url.searchParams.set('filter[type][_eq]', 'blog');
		url.searchParams.set('filter[slug][_eq]', slug);
		url.searchParams.set('limit', '1');
		url.searchParams.set('fields', [
			'id',
			'title',
			'slug',
			'summary',
			'content',
			'date_published',
			'date_created',
			'image',
			'author',
			'status',
			'type',
			'category.id',
			'category.title',
			'category.slug',
			'category.color'
		].join(','));

		const response = await fetch(url.toString(), {
			headers: {
				'Authorization': `Bearer ${env.DIRECTUS_SERVER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.data && data.data.length > 0 ? (data.data[0] as BlogPost) : null;
	} catch (error) {
		console.error('Error fetching blog post by slug:', error);
		return null;
	}
}

/**
 * Fetch all blog categories
 */
export async function getBlogCategories(): Promise<BlogCategory[]> {
	try {
		const url = new URL('/items/categories', env.DIRECTUS_URL || 'http://localhost:8055');
		url.searchParams.set('sort', 'sort,title');
		url.searchParams.set('fields', [
			'id',
			'title',
			'slug',
			'color',
			'headline',
			'sort'
		].join(','));

		const response = await fetch(url.toString(), {
			headers: {
				'Authorization': `Bearer ${env.DIRECTUS_SERVER_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data.data as BlogCategory[];
	} catch (error) {
		console.error('Error fetching blog categories:', error);
		return [];
	}
}

/**
 * Fetch blog posts grouped by category
 * Returns an object with category names as keys and arrays of posts as values
 * Now includes all categories, even those without posts
 */
export async function getBlogPostsGroupedByCategory(postsPerCategory: number = 2): Promise<Record<string, BlogPost[]>> {
	try {
		const categories = await getBlogCategories();
		const result: Record<string, BlogPost[]> = {};

		// Fetch posts for each category, including empty categories
		for (const category of categories) {
			const posts = await getBlogPostsByCategory(category.slug, postsPerCategory);
			// Always include the category, even if it has no posts
			result[category.title] = posts;
		}

		return result;
	} catch (error) {
		console.error('Error fetching blog posts grouped by category:', error);
		return {};
	}
}

/**
 * Get category icon mapping for tech-hotpot display
 */
export function getCategoryIcon(categoryTitle: string): string {
	const iconMap: Record<string, string> = {
		'Software': 'software',
		'Software Dev': 'software',
		'IoT News': 'iot',
		'Data & Analytics': 'data',
		'AI Workflow': 'ai',
		'Digital Transformation': 'dx',
		'AI in Education': 'education',
		'AI in Agriculture': 'agriculture',
		'AI in F&B': 'fb',
		'AI in Manufacturing': 'manufacturing',
		'Workflow Automation': 'ai'
	};
	return iconMap[categoryTitle] || 'software';
}

/**
 * Format date for display
 */
export function formatDate(dateString: string | null | undefined): string {
	if (!dateString) return '';
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

/**
 * Get image URL from Directus
 */
export function getImageUrl(imageId: string | null | undefined, width: number = 600, height: number = 400): string {
	if (!imageId) return '/placeholder-image.jpg';
	// Use the Directus URL to construct proper asset URLs
	const directusUrl = env.DIRECTUS_URL || 'http://localhost:8055';
	return `${directusUrl}/assets/${imageId}?width=${width}&height=${height}&fit=cover&quality=80`;
}

/**
 * Calculate read time based on content length
 */
export function calculateReadTime(content: string | null | undefined): number {
	if (!content) return 1;
	// Average reading speed is about 200 words per minute
	const wordsPerMinute = 200;
	const wordCount = content.split(/\s+/).length;
	return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}