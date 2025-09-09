<script>
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import * as Card from "$lib/components/ui/card/index.js";

	/** @type {import('./$types').PageData} */
	export let data;

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
	/** @param {string | null | undefined} imageId */
	function getImageUrl(imageId) {
		if (!imageId) return '/placeholder-image.jpg';
		return `${PUBLIC_DIRECTUS_URL}/assets/${imageId}?width=600&height=400&fit=cover&quality=80`;
	}

	// Get author name
	/** @param {any} author */
	function getAuthorName(author) {
		if (!author) return 'Anonymous';
		return `${author.first_name || ''} ${author.last_name || ''}`.trim() || 'Anonymous';
	}
</script>

<svelte:head>
	<title>Blog - Latest Posts</title>
	<meta name="description" content="Read our latest blog posts and insights" />
</svelte:head>

<div class="container mx-auto px-4 py-8 bg-white dark:bg-deep-navy">
	<div class="text-center mb-12">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-light-mint mb-4">Blog</h1>
		<p class="text-xl text-gray-600 dark:text-cyan-accent max-w-2xl mx-auto">
			Discover insights, tutorials, and stories from our team
		</p>
	</div>

	{#if data.posts && data.posts.length > 0}
		<div class="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<Card.Root class="group h-full">
					<Card.Header class="p-0">
						<div class="aspect-video overflow-hidden bg-gray-200">
							<img
								src={getImageUrl(post.image)}
								alt={post.title}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								loading="lazy"
							/>
						</div>
					</Card.Header>
					<Card.Content class="space-y-4 p-6">
						{#if post.category}
							<span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-medium-teal text-white">
								Category
							</span>
						{/if}
						<h2 class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-medium-teal transition-colors">
							{post.title}
						</h2>
						{#if post.summary}
							<p class="text-gray-600 dark:text-gray-300">
								{post.summary}
							</p>
						{/if}
						<div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
							<span>{formatDate(post.date_published || post.date_created)}</span>
							{#if post.author}
								<span>•</span>
								<span>By {getAuthorName(post.author)}</span>
							{/if}
						</div>
					</Card.Content>
					<Card.Footer class="p-6 pt-0">
						<a href="/blog/{post.slug}" class="inline-flex items-center text-medium-teal font-medium group-hover:text-dark-teal">
							Read more
							<svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
							</svg>
						</a>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	{:else}
		<!-- Empty State -->
		<div class="text-center py-16">
			<div class="max-w-md mx-auto">
				<svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
				</svg>
				<h3 class="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
				<p class="text-gray-500">Check back later for new content!</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.container {
		max-width: 1200px;
	}
</style>