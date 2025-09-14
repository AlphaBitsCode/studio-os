<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import ArticleContent from '$lib/components/ArticleContent.svelte';
	// Helper functions moved to client-side
	function formatDate(dateString: string | null | undefined): string {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getCategoryIcon(categoryTitle: string): string {
		const iconMap: Record<string, string> = {
			Software: 'software',
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

	function calculateReadTime(content: string | null | undefined): number {
		if (!content) return 1;
		const wordsPerMinute = 200;
		const wordCount = content.split(/\s+/).length;
		return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
	}

	function getImageUrl(imageId: string | null | undefined): string {
		if (!imageId) return '/placeholder-image.svg';
		// Use the public Directus URL for client-side image loading
		const directusUrl = 'https://kore.alphabits.team';
		return `${directusUrl}/assets/${imageId}?width=800&height=450&fit=cover&quality=80`;
	}

	function getAvatarUrl(avatarId: string | null | undefined, size: number = 40): string {
		if (!avatarId) return '/placeholder-avatar.svg';
		// Use the hardcoded Directus URL for client-side compatibility
		const directusUrl = 'https://kore.alphabits.team';
		return `${directusUrl}/assets/${avatarId}?width=${size}&height=${size}&fit=cover&quality=80`;
	}

	function getAuthorName(author: any): string {
		if (!author) return 'AlphaBits';
		if (typeof author === 'string') return author;
		return author.name || 'AlphaBits';
	}

	function getAuthorInitials(author: any): string {
		if (!author) return 'AB';
		const name = typeof author === 'string' ? author : author.name;
		if (!name) return 'AB';
		const words = name.split(' ');
		return words.length > 1
			? `${words[0][0]}${words[1][0]}`.toUpperCase()
			: name.substring(0, 2).toUpperCase();
	}
	import type { PageData } from './$types';

	export let data: PageData;

	let mounted = false;
	let contentElement: HTMLElement;
	let readingProgress = 0;

	$: post = data.post;

	onMount(() => {
		mounted = true;
		// Initialize expandable code blocks after content is rendered
		setTimeout(() => {
			setupExpandableCodeBlocks();
		}, 100);

		// Setup reading progress tracking
		const updateProgress = () => {
			readingProgress = getReadingProgress();
		};

		window.addEventListener('scroll', updateProgress);
		return () => window.removeEventListener('scroll', updateProgress);
	});

	// Also setup code blocks when content changes
	$: if (post && contentElement) {
		setTimeout(() => {
			setupExpandableCodeBlocks();
		}, 100);
	}

	// Setup expandable code blocks functionality
	function setupExpandableCodeBlocks() {
		if (!contentElement) return;

		const codeBlocks = contentElement.querySelectorAll('pre');
		codeBlocks.forEach((pre: HTMLElement) => {
			// Check if code block is tall enough to need expansion
			const actualHeight = pre.scrollHeight;
			if (actualHeight > 300) {
				pre.classList.add('expandable');

				// Add click handler for expansion
				pre.addEventListener('click', () => {
					pre.classList.toggle('expanded');
				});
			}
		});
	}

	// Helper function to estimate reading progress
	function getReadingProgress() {
		if (!contentElement) return 0;

		const scrollTop = window.scrollY;
		const docHeight = contentElement.offsetHeight;
		const winHeight = window.innerHeight;
		const scrollPercent = scrollTop / (docHeight - winHeight);

		return Math.min(100, Math.max(0, scrollPercent * 100));
	}

	// Helper function to get category icon path
	function getCategoryIconPath(categoryTitle: string): string {
		const iconType = getCategoryIcon(categoryTitle);
		const iconMap: { [key: string]: string } = {
			software: '/icons/icon_software.png',
			iot: '/icons/icon_iot.png',
			data: '/icons/icon_data.png',
			ai: '/icons/icon_ai.png',
			dx: '/icons/icon_dx.png',
			education: '/icons/icon_ai.png',
			agriculture: '/icons/icon_ai.png',
			fb: '/icons/icon_ai.png',
			manufacturing: '/icons/icon_ai.png'
		};
		return iconMap[iconType] || '/icons/icon_software.png';
	}
</script>

<svelte:head>
	<title>{post.seo?.title || post.title} - Tech Hotpot | AlphaBits</title>
	<meta name="description" content={post.seo?.meta_description || post.summary || post.title} />
	<meta name="author" content={getAuthorName(post.author)} />

	<!-- Canonical URL -->
	{#if post.seo?.canonical_url}
		<link rel="canonical" href={post.seo.canonical_url} />
	{:else}
		<link rel="canonical" href="https://alphabits.team/tech-hotpot/{post.slug}" />
	{/if}

	<!-- Robots meta tags -->
	{#if post.seo?.no_index || post.seo?.no_follow}
		<meta
			name="robots"
			content="{post.seo.no_index ? 'noindex' : 'index'},{post.seo.no_follow
				? 'nofollow'
				: 'follow'}"
		/>
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.seo?.title || post.title} />
	<meta
		property="og:description"
		content={post.seo?.meta_description || post.summary || post.title}
	/>
	<meta property="og:image" content={getImageUrl(post.image)} />
	<meta
		property="og:url"
		content={post.seo?.canonical_url || `https://alphabits.team/tech-hotpot/${post.slug}`}
	/>
	<meta property="article:author" content={getAuthorName(post.author)} />
	<meta property="article:published_time" content={post.date_published || post.date_created} />
	{#if post.date_published !== post.date_created}
		<meta property="article:modified_time" content={post.date_created} />
	{/if}
	{#if post.category}
		<meta property="article:section" content={post.category.title} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.seo?.title || post.title} />
	<meta
		name="twitter:description"
		content={post.seo?.meta_description || post.summary || post.title}
	/>
	<meta name="twitter:image" content={getImageUrl(post.image)} />

	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="{post.category?.title || ''}, tech blog, AlphaBits, technology, {post.title
			.toLowerCase()
			.split(' ')
			.join(', ')}"
	/>
	<meta name="article:tag" content={post.category?.title || 'Technology'} />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": "{post.seo?.title || post.title}",
			"description": "{post.seo?.meta_description || post.summary || post.title}",
			"image": "{getImageUrl(post.image)}",
			"author": {
				"@type": "Person",
				"name": "{getAuthorName(post.author)}"
			},
			"publisher": {
				"@type": "Organization",
				"name": "AlphaBits",
				"url": "https://alphabits.team",
				"logo": {
					"@type": "ImageObject",
					"url": "https://alphabits.team/logos/logo_square.png"
				}
			},
			"datePublished": "{post.date_published || post.date_created}",
			"dateModified": "{post.date_created}",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "{post.seo?.canonical_url || `https://alphabits.team/tech-hotpot/${post.slug}`}"
			},
			"url": "{post.seo?.canonical_url || `https://alphabits.team/tech-hotpot/${post.slug}`}",
			"articleSection": "{post.category?.title || 'Technology'}",
			"wordCount": "{calculateReadTime(post.content) * 200}",
			"timeRequired": "PT{calculateReadTime(post.content)}M",
			"inLanguage": "en-US"
		}
	</script>
</svelte:head>

<!-- Navigation -->
<nav
	class="fixed top-14 right-0 left-0 z-80 border-t border-b border-gray-200 bg-white/80 py-4 backdrop-blur-md"
>
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center space-x-2 text-sm text-gray-600">
			{#if post.category}
				<a
					href="/tech-hotpot/all?category={encodeURIComponent(post.category.slug)}"
					class="truncate transition-colors hover:text-blue-600"
				>
					{post.category.title}
				</a>
				<span>›</span>
			{/if}
			<span class="line-clamp-1 truncate font-medium text-gray-800">{post.title}</span>
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="relative z-10 pt-20 pb-8">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Article Header -->
		<header class="mb-12" in:fade={{ delay: 200, duration: 600 }}>
			<!-- Category Badge -->
			{#if post.category}
				<div class="mb-6 flex items-center">
					<div class="mr-3 h-6 w-6">
						<img
							src={getCategoryIconPath(post.category.title)}
							alt={post.category.title}
							class="h-full w-full opacity-70"
						/>
					</div>
					<span
						class="inline-block rounded-full px-4 py-2 text-sm font-medium"
						style="background-color: {post.category.color}20; color: {post.category.color};"
					>
						{post.category.title}
					</span>
				</div>
			{/if}

			<!-- Title -->
			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-5xl lg:text-6xl">
				{post.title}
			</h1>

			<!-- Summary -->
			{#if post.summary}
				<p class="mb-8 text-xl leading-relaxed text-gray-600">
					{post.summary}
				</p>
			{/if}

			<!-- Meta Information -->
			<div class="mb-8 flex flex-wrap items-center gap-6 text-gray-500">
				<!-- Author -->
				<div class="flex items-center space-x-3">
					{#if typeof post.author === 'object' && post.author?.image}
						<img
							src={getAvatarUrl(post.author.image, 40)}
							alt={getAuthorName(post.author)}
							class="h-10 w-10 rounded-full object-cover"
							loading="lazy"
						/>
					{:else}
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
						>
							<span class="text-sm font-semibold text-white">{getAuthorInitials(post.author)}</span>
						</div>
					{/if}
					<div>
						<p class="font-medium text-gray-900">{getAuthorName(post.author)}</p>
						<p class="text-sm text-gray-500">Engineering Team</p>
					</div>
				</div>

				<!-- Publication Date -->
				<div class="flex items-center space-x-2">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						></path>
					</svg>
					<span>{formatDate(post.date_published || post.date_created)}</span>
				</div>

				<!-- Reading Time -->
				<div class="flex items-center space-x-2">
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span>{calculateReadTime(post.content)} min read</span>
				</div>
			</div>

			<!-- Featured Image -->
			{#if post.image}
				<div
					class="mb-8 aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200"
				>
					<img
						src={getImageUrl(post.image)}
						alt={post.title}
						class="h-full w-full object-cover"
						loading="lazy"
					/>
				</div>
			{/if}
		</header>

		<!-- Article Content -->
		<ArticleContent content={post.content} bind:contentElement delay={400} duration={600} />

		<!-- Article Footer -->
		<footer class="mt-16 border-t border-gray-200 pt-8" in:fade={{ delay: 600, duration: 600 }}>
			<!-- Share Buttons -->
			<div class="mb-8">
				<h3 class="mb-4 text-lg font-semibold text-gray-900">Share this article</h3>
				<div class="flex items-center space-x-4">
					<!-- LinkedIn -->
					<a
						href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(
							'https://alphabits.team/tech-hotpot/' + post.slug
						)}"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 rounded-lg bg-blue-700 px-4 py-2 text-white transition-colors hover:bg-blue-800"
					>
						<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/>
						</svg>
						<span>LinkedIn</span>
					</a>

					<!-- Copy Link -->
					<button
						on:click={() => {
							navigator.clipboard.writeText('https://alphabits.team/tech-hotpot/' + post.slug);
							// You could add a toast notification here
						}}
						class="flex items-center space-x-2 rounded-lg bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
					>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							></path>
						</svg>
						<span>Copy Link</span>
					</button>
				</div>
			</div>

			<!-- Navigation Links -->
			<div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
				<a
					href="/tech-hotpot/all"
					class="group inline-flex items-center space-x-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
				>
					<svg
						class="h-5 w-5 transition-transform group-hover:-translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
					<span>All Posts</span>
				</a>

				<a
					href="/tech-hotpot"
					class="group inline-flex items-center space-x-2 font-medium text-blue-600 transition-colors hover:text-blue-700"
				>
					<span>Back to Tech Hotpot</span>
					<svg
						class="h-5 w-5 transition-transform group-hover:translate-x-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>
		</footer>
	</div>
</main>

<style>
	@reference "tailwindcss";

	.line-clamp-1 {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg);
		}
		33% {
			transform: translateY(-10px) rotate(120deg);
		}
		66% {
			transform: translateY(5px) rotate(240deg);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	/* Prose styling for article content */
	:global(.prose) {
		@apply leading-relaxed text-gray-800;
	}

	:global(.prose h1) {
		@apply relative mt-8 mb-6 px-4 py-2 text-2xl font-bold text-gray-900;
		border-left: 2px solid #1e40af;
		border-top: 2px solid #1e40af;
		transform: translateX(-4px);
		transition: all 0.3s ease;
	}

	:global(.prose h1:hover) {
		transform: translateX(0);
	}

	:global(.prose h2) {
		@apply relative mt-8 mb-4 px-2 py-2 text-xl font-bold;
		color: #1e3a8a;
		background: rgba(30, 58, 138, 0.03);
		transition: all 0.3s ease;
	}

	:global(.prose h2:hover) {
		background: rgba(30, 58, 138, 0.06);
	}

	:global(.prose h3) {
		@apply relative mt-6 mb-3 px-2 py-2 text-lg font-bold;
		color: #1e40af;
		transition: all 0.3s ease;
	}

	:global(.prose h3:hover) {
		background: rgba(30, 64, 175, 0.05);
		transform: translateX(1px);
	}

	:global(.prose h4) {
		@apply mt-6 mb-3 text-lg font-semibold text-gray-900;
	}

	:global(.prose p) {
		@apply mb-4 ml-4 leading-relaxed;
	}

	:global(.prose ul) {
		@apply mb-4 pl-10;
	}

	:global(.prose ol) {
		@apply mb-4 pl-10;
	}

	:global(.prose li) {
		@apply mb-2 pl-2;
		list-style-type: circle;
	}

	:global(.prose a) {
		@apply text-blue-600 underline hover:text-blue-800;
	}

	:global(.prose blockquote) {
		@apply my-6 border-l-4 border-blue-500 pl-4 text-gray-700 italic;
	}

	:global(.prose pre) {
		@apply my-6 overflow-x-auto rounded-lg bg-gray-900 p-4 text-gray-100;
	}

	:global(.prose code) {
		@apply rounded bg-gray-100 px-2 py-1 text-sm text-gray-800;
	}

	:global(.prose pre code) {
		@apply bg-transparent p-0 text-gray-100;
	}

	:global(.prose img) {
		@apply my-6 rounded-lg shadow-lg;
	}

	:global(.prose table) {
		@apply my-6 w-full border-collapse border border-gray-300;
	}

	:global(.prose th) {
		@apply border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold;
	}

	:global(.prose td) {
		@apply border border-gray-300 px-4 py-2;
	}

	/* Expandable code blocks */
	:global(.prose pre.expandable) {
		@apply relative max-h-72 cursor-pointer;
		overflow: hidden;
	}

	:global(.prose pre.expandable:not(.expanded)::after) {
		content: 'Click to expand...';
		@apply absolute right-0 bottom-0 left-0 bg-gradient-to-t from-gray-900 to-transparent py-2 text-center text-sm text-gray-400;
	}

	:global(.prose pre.expandable.expanded) {
		@apply max-h-none;
	}
</style>
