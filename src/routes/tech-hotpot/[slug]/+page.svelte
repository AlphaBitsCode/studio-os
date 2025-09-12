<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
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
	
	function calculateReadTime(content: string | null | undefined): number {
		if (!content) return 1;
		const wordsPerMinute = 200;
		const wordCount = content.split(/\s+/).length;
		return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
	}
	
	function getImageUrl(imageId: string | null | undefined): string {
		if (!imageId) return '/placeholder-image.jpg';
		// Use the public Directus URL for client-side image loading
		const directusUrl = 'https://kore.alphabits.team';
		return `${directusUrl}/assets/${imageId}?width=800&height=450&fit=cover&quality=80`;
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
			'software': '/icons/icon_software.png',
			'iot': '/icons/icon_iot.png',
			'data': '/icons/icon_data.png',
			'ai': '/icons/icon_ai.png',
			'dx': '/icons/icon_dx.png',
			'education': '/icons/icon_ai.png',
			'agriculture': '/icons/icon_ai.png',
			'fb': '/icons/icon_ai.png',
			'manufacturing': '/icons/icon_ai.png'
		};
		return iconMap[iconType] || '/icons/icon_software.png';
	}
</script>

<svelte:head>
	<title>{post.title} - Tech Hotpot | AlphaBits</title>
	<meta name="description" content={post.summary || post.title} />
	<meta name="author" content="Alpha Bits" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.summary || post.title} />
	<meta property="og:image" content={getImageUrl(post.image)} />
	<meta property="og:url" content="https://alphabits.team/tech-hotpot/{post.slug}" />
	<meta property="article:author" content="Alpha Bits" />
	<meta property="article:published_time" content={post.date_published || post.date_created} />
	{#if post.category}
		<meta property="article:section" content={post.category.title} />
	{/if}
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.summary || post.title} />
	<meta name="twitter:image" content={getImageUrl(post.image)} />
</svelte:head>

<!-- Reading Progress Bar -->
<div class="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
	<div 
		class="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
		style="width: {readingProgress}%"
	></div>
</div>

<!-- Animated Background -->
<div class="fixed inset-0 -z-10 overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
	<!-- Floating particles -->
	<div class="absolute inset-0">
		{#each Array(10) as _, i}
			<div 
				class="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
				style="
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation-delay: {Math.random() * 5}s;
					animation-duration: {3 + Math.random() * 4}s;
				"
			></div>
		{/each}
	</div>
</div>

<!-- Navigation -->
<nav class="relative z-10 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center space-x-2 text-sm text-gray-600">
			<a href="/tech-hotpot" class="hover:text-blue-600 transition-colors">Tech Hotpot</a>
			<span>›</span>
			{#if post.category}
				<a href="/tech-hotpot/all?category={encodeURIComponent(post.category.slug)}" class="hover:text-blue-600 transition-colors">
					{post.category.title}
				</a>
				<span>›</span>
			{/if}
			<span class="text-gray-800 font-medium line-clamp-1">{post.title}</span>
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="relative z-10 py-8">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Article Header -->
		<header class="mb-12" in:fade={{ delay: 200, duration: 600 }}>
			<!-- Category Badge -->
			{#if post.category}
				<div class="flex items-center mb-6">
					<div class="w-6 h-6 mr-3">
						<img src="{getCategoryIconPath(post.category.title)}" alt="{post.category.title}" class="w-full h-full opacity-70" />
					</div>
					<span 
						class="inline-block px-4 py-2 text-sm font-medium rounded-full"
						style="background-color: {post.category.color}20; color: {post.category.color};"
					>
						{post.category.title}
					</span>
				</div>
			{/if}
			
			<!-- Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
				{post.title}
			</h1>
			
			<!-- Summary -->
			{#if post.summary}
				<p class="text-xl text-gray-600 mb-8 leading-relaxed">
					{post.summary}
				</p>
			{/if}
			
			<!-- Meta Information -->
			<div class="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
				<!-- Author -->
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
						<span class="text-white text-sm font-semibold">AB</span>
					</div>
					<div>
						<p class="font-medium text-gray-900">Alpha Bits</p>
						<p class="text-sm text-gray-500">Engineering Team</p>
					</div>
				</div>
				
				<!-- Publication Date -->
				<div class="flex items-center space-x-2">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
					</svg>
					<span>{formatDate(post.date_published || post.date_created)}</span>
				</div>
				
				<!-- Reading Time -->
				<div class="flex items-center space-x-2">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span>{calculateReadTime(post.content)} min read</span>
				</div>
			</div>
			
			<!-- Featured Image -->
			{#if post.image}
				<div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-8">
					<img 
						src="{getImageUrl(post.image)}" 
						alt="{post.title}" 
						class="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
			{/if}
		</header>
		
		<!-- Article Content -->
		<article 
			class="prose prose-lg prose-gray max-w-none"
			bind:this={contentElement}
			in:fly={{ y: 50, delay: 400, duration: 600 }}
		>
			{#if post.content}
				{@html post.content}
			{:else}
				<p class="text-gray-600 italic">Content not available.</p>
			{/if}
		</article>
		
		<!-- Article Footer -->
		<footer class="mt-16 pt-8 border-t border-gray-200" in:fade={{ delay: 600, duration: 600 }}>
			<!-- Share Buttons -->
			<div class="mb-8">
				<h3 class="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
				<div class="flex items-center space-x-4">
					<!-- Twitter -->
					<a 
						href="https://twitter.com/intent/tweet?text={encodeURIComponent(post.title)}&url={encodeURIComponent('https://alphabits.team/tech-hotpot/' + post.slug)}"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
						<span>Twitter</span>
					</a>
					
					<!-- LinkedIn -->
					<a 
						href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent('https://alphabits.team/tech-hotpot/' + post.slug)}"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
						<span>LinkedIn</span>
					</a>
					
					<!-- Copy Link -->
					<button 
						on:click={() => {
							navigator.clipboard.writeText('https://alphabits.team/tech-hotpot/' + post.slug);
							// You could add a toast notification here
						}}
						class="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
					>
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
						</svg>
						<span>Copy Link</span>
					</button>
				</div>
			</div>
			
			<!-- Navigation Links -->
			<div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
				<a 
					href="/tech-hotpot/all"
					class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
				>
					<svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
					</svg>
					<span>All Posts</span>
				</a>
				
				<a 
					href="/tech-hotpot"
					class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
				>
					<span>Back to Tech Hotpot</span>
					<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
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
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		33% { transform: translateY(-10px) rotate(120deg); }
		66% { transform: translateY(5px) rotate(240deg); }
	}
	
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
	
	/* Prose styling for article content */
	:global(.prose) {
		@apply text-gray-800 leading-relaxed;
	}
	
	:global(.prose h1) {
		@apply text-3xl font-bold text-gray-900 mt-8 mb-4;
	}
	
	:global(.prose h2) {
		@apply text-2xl font-bold text-gray-900 mt-8 mb-4;
	}
	
	:global(.prose h3) {
		@apply text-xl font-bold text-gray-900 mt-6 mb-3;
	}
	
	:global(.prose h4) {
		@apply text-lg font-semibold text-gray-900 mt-6 mb-3;
	}
	
	:global(.prose p) {
		@apply mb-4 leading-relaxed;
	}
	
	:global(.prose ul) {
		@apply mb-4 pl-6;
	}
	
	:global(.prose ol) {
		@apply mb-4 pl-6;
	}
	
	:global(.prose li) {
		@apply mb-2;
	}
	
	:global(.prose a) {
		@apply text-blue-600 hover:text-blue-800 underline;
	}
	
	:global(.prose blockquote) {
		@apply border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6;
	}
	
	:global(.prose pre) {
		@apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6;
	}
	
	:global(.prose code) {
		@apply bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm;
	}
	
	:global(.prose pre code) {
		@apply bg-transparent text-gray-100 p-0;
	}
	
	:global(.prose img) {
		@apply rounded-lg my-6 shadow-lg;
	}
	
	:global(.prose table) {
		@apply w-full border-collapse border border-gray-300 my-6;
	}
	
	:global(.prose th) {
		@apply border border-gray-300 px-4 py-2 bg-gray-100 font-semibold text-left;
	}
	
	:global(.prose td) {
		@apply border border-gray-300 px-4 py-2;
	}
	
	/* Expandable code blocks */
	:global(.prose pre.expandable) {
		@apply max-h-72 cursor-pointer relative;
		overflow: hidden;
	}
	
	:global(.prose pre.expandable:not(.expanded)::after) {
		content: 'Click to expand...';
		@apply absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent text-center py-2 text-gray-400 text-sm;
	}
	
	:global(.prose pre.expandable.expanded) {
		@apply max-h-none;
	}
</style>