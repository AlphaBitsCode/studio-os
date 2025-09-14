// Utility functions for blog/tech-hotpot functionality

export interface BlogPost {
	id: number;
	title: string;
	excerpt?: string;
	summary?: string;
	content?: string;
	slug: string;
	category?: {
		id: number;
		title: string;
		slug: string;
		color: string;
	};
	tags?: string[];
	author?: any;
	readTime?: number;
	publishedAt?: string;
	date_published?: string;
	date_created?: string;
	thumbnail?: string;
	image?: string;
	featured?: boolean;
	seo?: {
		title?: string;
		meta_description?: string;
		canonical_url?: string;
		no_index?: boolean;
		no_follow?: boolean;
	};
}

export interface Category {
	id: number;
	title: string;
	slug: string;
	color: string;
}

// Date formatting utilities
export function formatDate(dateString: string | null | undefined): string {
	if (!dateString) return '';
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

export function formatDateLong(dateString: string | null | undefined): string {
	if (!dateString) return '';
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Read time calculation
export function calculateReadTime(content: string | null | undefined): number {
	if (!content) return 1;
	const wordsPerMinute = 200;
	const wordCount = content.split(/\s+/).length;
	return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Image URL utilities
export function getImageUrl(
	imageId: string | null | undefined,
	width: number = 600,
	height: number = 400
): string {
	if (!imageId) return '/placeholder-image.svg';
	const directusUrl = 'https://kore.alphabits.team';
	return `${directusUrl}/assets/${imageId}?width=${width}&height=${height}&fit=cover&quality=80`;
}

export function getAvatarUrl(avatarId: string | null | undefined, size: number = 40): string {
	if (!avatarId) return '/placeholder-avatar.svg';
	const directusUrl = 'https://kore.alphabits.team';
	return `${directusUrl}/assets/${avatarId}?width=${size}&height=${size}&fit=cover&quality=80`;
}

// Author utilities
export function getAuthorName(author: any): string {
	if (!author) return 'AlphaBits';
	if (typeof author === 'string') return author;
	return author.name || 'AlphaBits';
}

export function getAuthorInitials(author: any): string {
	if (!author) return 'AB';
	const name = typeof author === 'string' ? author : author.name;
	if (!name) return 'AB';
	const words = name.split(' ');
	return words.length > 1
		? `${words[0][0]}${words[1][0]}`.toUpperCase()
		: name.substring(0, 2).toUpperCase();
}

// Category icon utilities
const categoryIconMap: Record<string, string> = {
	Software: 'software',
	'Software Dev': 'software',
	'IoT News': 'iot',
	'Data & Analytics': 'analytics',
	'AI Workflow': 'ai',
	'Digital Transformation': 'dx',
	'Workflow Automation': 'workflow',
	'AI in Education': 'education',
	'AI in Agriculture': 'agriculture',
	'AI in F&B': 'fb',
	'AI in Manufacturing': 'manufacturing'
};

const categoryIconPathMap: Record<string, string> = {
	software: '/icons/icon_software.png',
	iot: '/icons/icon_iot.png',
	data: '/icons/icon_data.png',
	ai: '/icons/icon_ai.png',
	dx: '/icons/icon_dx.png',
	analytics: '/icons/icon_analytics.png',
	workflow: '/icons/icon_workflow.png',
	education: '/icons/icon_ai.png',
	agriculture: '/icons/icon_ai.png',
	fb: '/icons/icon_ai.png',
	manufacturing: '/icons/icon_ai.png'
};

export function getCategoryIcon(categoryTitle: string): string {
	return categoryIconMap[categoryTitle] || 'software';
}

export function getCategoryIconPath(categoryTitle: string): string {
	const iconType = getCategoryIcon(categoryTitle);
	return categoryIconPathMap[iconType] || '/icons/icon_software.png';
}

// SEO utilities
export function generateStructuredData(post: BlogPost): any {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.seo?.title || post.title,
		description: post.seo?.meta_description || post.summary || post.title,
		image: getImageUrl(post.image),
		author: {
			'@type': 'Person',
			name: getAuthorName(post.author)
		},
		publisher: {
			'@type': 'Organization',
			name: 'AlphaBits',
			url: 'https://alphabits.team',
			logo: {
				'@type': 'ImageObject',
				url: 'https://alphabits.team/logos/logo_square.png'
			}
		},
		datePublished: post.date_published || post.date_created,
		dateModified: post.date_created,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': post.seo?.canonical_url || `https://alphabits.team/tech-hotpot/${post.slug}`
		},
		url: post.seo?.canonical_url || `https://alphabits.team/tech-hotpot/${post.slug}`,
		articleSection: post.category?.title || 'Technology',
		wordCount: calculateReadTime(post.content) * 200,
		timeRequired: `PT${calculateReadTime(post.content)}M`,
		inLanguage: 'en-US'
	};
}

// Share utilities
export function getShareUrl(slug: string): string {
	return `https://alphabits.team/tech-hotpot/${slug}`;
}

export function getLinkedInShareUrl(slug: string): string {
	const url = encodeURIComponent(getShareUrl(slug));
	return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}

export function copyToClipboard(text: string): Promise<void> {
	return navigator.clipboard.writeText(text);
}
