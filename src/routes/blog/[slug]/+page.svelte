<script>
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

	import * as Card from "$lib/components/ui/card/index.js";

	/** @type {import('./$types').PageData} */
	export let data;

	$: post = data.post;
	$: relatedPosts = data.relatedPosts || [];

	// Format date for display
	/** @param {string | null | undefined} dateString */
	function formatDate(dateString) {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	// Get image URL from Directus
	/**
	 * @param {string | null | undefined} imageId
	 * @param {number} width
	 * @param {number} height
	 */
	function getImageUrl(imageId, width = 1200, height = 600) {
		if (!imageId) return '/placeholder-image.jpg';
		return `${PUBLIC_DIRECTUS_URL}/assets/${imageId}?width=${width}&height=${height}&fit=cover&quality=80`;
	}

	// Get author name
	/** @param {any} author */
	function getAuthorName(author) {
		if (!author) return 'Anonymous';
		return `${author.first_name || ''} ${author.last_name || ''}`.trim() || 'Anonymous';
	}

	// Get reading time estimate (rough calculation)
	/** @param {string | null | undefined} content */
	function getReadingTime(content) {
		if (!content) return '1 min read';
		const wordsPerMinute = 200;
		const textContent = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
		const wordCount = textContent.split(/\s+/).length;
		const minutes = Math.ceil(wordCount / wordsPerMinute);
		return `${minutes} min read`;
	}
</script>

<svelte:head>
	<title>{post.seo?.title || post.title}</title>
	<meta name="description" content={post.seo?.meta_description || post.summary || ''} />
	{#if post.seo?.meta_keywords}
		<meta name="keywords" content={post.seo.meta_keywords} />
	{/if}
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.seo?.title || post.title} />
	<meta property="og:description" content={post.seo?.meta_description || post.summary || ''} />
	{#if post.seo?.og_image || post.image}
		<meta property="og:image" content={getImageUrl(post.seo?.og_image || post.image)} />
	{/if}
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={post.seo?.title || post.title} />
	<meta property="twitter:description" content={post.seo?.meta_description || post.summary || ''} />
	{#if post.seo?.og_image || post.image}
		<meta property="twitter:image" content={getImageUrl(post.seo?.og_image || post.image)} />
	{/if}
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-deep-navy">
	<nav class="mb-8">
		<ol class="flex items-center space-x-2 text-sm text-gray-500 dark:text-cyan-accent">
			<li><a href="/" class="hover:text-medium-teal">Home</a></li>
			<li><span class="mx-2">/</span></li>
			<li><a href="/blog" class="hover:text-medium-teal">Blog</a></li>
			<li><span class="mx-2">/</span></li>
			<li class="text-gray-900 dark:text-light-mint truncate">{post.title}</li>
		</ol>
	</nav>

	<header class="mb-8">
		{#if post.category}
			<div class="mb-4">
				<span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-medium-teal text-white">
					Category
				</span>
			</div>
		{/if}

		<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-light-mint mb-6 leading-tight">
			{post.title}
		</h1>

		{#if post.summary}
			<p class="text-xl text-gray-600 dark:text-cyan-accent mb-6 leading-relaxed">
				{post.summary}
			</p>
		{/if}

		<div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
			<span>{formatDate(post.date_published || post.date_created)}</span>
			{#if post.author}
				<span>•</span>
				<span>By {getAuthorName(post.author)}</span>
			{/if}
			<span>•</span>
			<span>{getReadingTime(post.content)}</span>
		</div>

		{#if post.image}
			<div class="aspect-video rounded-lg overflow-hidden bg-gray-200 mb-8">
				<img src={getImageUrl(post.image)} alt={post.title} class="w-full h-full object-cover" />
			</div>
		{/if}
	</header>

	<div class="prose prose-lg max-w-none mb-12 text-gray-900 dark:text-white">
		{#if post.content}
			{@html post.content}
		{:else}
			<p class="text-gray-500 dark:text-gray-400 italic">No content available for this post.</p>
		{/if}
	</div>

	{#if post.author}
		<div class="border-t border-gray-200 dark:border-dark-teal pt-8 mb-12">
			<div class="flex items-center space-x-4">
				<div class="w-16 h-16 rounded-full bg-gray-300 dark:bg-medium-teal flex items-center justify-center">
					<span class="text-gray-600 dark:text-white font-medium text-lg">
						{getAuthorName(post.author)[0]}
					</span>
				</div>
				<div>
					<h3 class="font-medium text-gray-900 dark:text-light-mint">{getAuthorName(post.author)}</h3>
					<p class="text-gray-500 dark:text-cyan-accent">Blog Author</p>
				</div>
			</div>
		</div>
	{/if}

	{#if relatedPosts.length > 0}
		<section class="border-t border-gray-200 dark:border-dark-teal pt-12">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-light-mint mb-8">Related Posts</h2>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each relatedPosts as relatedPost}
					<Card.Root class="group h-full">
						<Card.Header class="p-0">
							{#if relatedPost.image}
								<div class="aspect-video rounded-t-lg overflow-hidden bg-gray-200">
									<img
										src={getImageUrl(relatedPost.image, 400, 250)}
										alt={relatedPost.title}
										class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										loading="lazy"
									/>
								</div>
							{/if}
						</Card.Header>
						<Card.Content class="p-6">
							<h3 class="font-semibold text-gray-900 dark:text-white group-hover:text-medium-teal transition-colors mb-2">
								{relatedPost.title}
							</h3>
							{#if relatedPost.summary}
								<p class="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
									{relatedPost.summary}
								</p>
							{/if}
							<p class="text-xs text-gray-500 dark:text-gray-400">
								{formatDate(relatedPost.date_published)}
							</p>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
		</section>
	{/if}

	<div class="mt-12 pt-8 border-t border-gray-200 dark:border-dark-teal">
		<a href="/blog" class="inline-flex items-center text-medium-teal hover:text-dark-teal font-medium">
			<svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
			</svg>
			Back to Blog
		</a>
	</div>
</article>

<style>
	/* Custom prose styles for blog content */
	:global(.prose) {
		color: #374151;
		line-height: 1.75;
	}

	:global(.prose h1) {
		font-size: 2.25rem;
		font-weight: 800;
		margin-top: 0;
		margin-bottom: 2rem;
		color: #111827;
	}

	:global(.prose h2) {
		font-size: 1.875rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
		color: #111827;
	}

	:global(.prose h3) {
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		color: #111827;
	}

	:global(.prose p) {
		margin-bottom: 1.25rem;
	}

	:global(.prose a) {
		color: #2563eb;
		text-decoration: underline;
	}

	:global(.prose a:hover) {
		color: #1d4ed8;
	}

	:global(.prose ul, .prose ol) {
		margin-bottom: 1.25rem;
		padding-left: 1.5rem;
	}

	:global(.prose li) {
		margin-bottom: 0.5rem;
	}

	:global(.prose blockquote) {
		border-left: 4px solid #e5e7eb;
		padding-left: 1rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #6b7280;
	}

	:global(.prose code) {
		background-color: #f3f4f6;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875em;
	}

	:global(.prose pre) {
		background-color: #1f2937;
		color: #f9fafb;
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin: 1.5rem 0;
	}

	:global(.prose img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin: 1.5rem 0;
	}

	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>