import { getBlogPostBySlug } from '$lib/server/blog';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

// Function to process markdown content to HTML
async function processMarkdownToHtml(markdown: string): Promise<string> {
	try {
		const result = await remark()
			.use(remarkGfm) // GitHub Flavored Markdown support
			.use(remarkHtml, { sanitize: false }) // Allow HTML in markdown
			.process(markdown);
		
		return String(result);
	} catch (error) {
		console.error('Error processing markdown:', error);
		// Fallback to original content with basic line breaks
		return markdown.replace(/\n/g, '<br>');
	}
}

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

		// Process markdown content to HTML if content exists
		let processedContent = post.content || '';
		if (post.content) {
			processedContent = await processMarkdownToHtml(post.content);
		}

		return {
			post: {
				...post,
				content: processedContent,
				rawContent: post.content // Keep original for editing purposes
			},
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