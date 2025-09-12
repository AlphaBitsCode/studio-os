<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from './$types';
	
	export let data: PageData;
	
	let mounted = false;
	let contentElement: HTMLElement;
	
	$: post = data.post;
	
	onMount(() => {
		mounted = true;
		// Add syntax highlighting or other post-mount processing here
	});
	
	// Helper function to format date
	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
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
	
	let readingProgress = 0;
	
	onMount(() => {
		const updateProgress = () => {
			readingProgress = getReadingProgress();
		};
		
		window.addEventListener('scroll', updateProgress);
		return () => window.removeEventListener('scroll', updateProgress);
	});
</script>

<svelte:head>
	<title>{post.title} - Tech Hotpot | AlphaBits</title>
	<meta name="description" content={post.seo.metaDescription} />
	<meta name="keywords" content={post.seo.keywords.join(', ')} />
	<meta name="author" content={post.author} />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.seo.metaDescription} />
	<meta property="og:image" content={post.thumbnail} />
	<meta property="og:url" content="https://alphabits.team/tech-hotpot/{post.slug}" />
	<meta property="article:author" content={post.author} />
	<meta property="article:published_time" content={post.publishedAt} />
	<meta property="article:section" content={post.category} />
	{#each post.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.seo.metaDescription} />
	<meta name="twitter:image" content={post.thumbnail} />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://alphabits.team/tech-hotpot/{post.slug}" />
	
	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": "{post.title}",
			"description": "{post.seo.metaDescription}",
			"image": "{post.thumbnail}",
			"author": {
				"@type": "Person",
				"name": "{post.author}"
			},
			"publisher": {
				"@type": "Organization",
				"name": "AlphaBits",
				"logo": {
					"@type": "ImageObject",
					"url": "https://alphabits.team/logos/logo_square.png"
				}
			},
			"datePublished": "{post.publishedAt}",
			"dateModified": "{post.publishedAt}",
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://alphabits.team/tech-hotpot/{post.slug}"
			},
			"articleSection": "{post.category}",
			"keywords": "{post.seo.keywords.join(', ')}"
		}
	</script>
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
		{#each Array(15) as _, i}
			<div 
				class="absolute w-2 h-2 bg-blue-400 rounded-full opacity-10 animate-float"
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

<!-- Navigation Breadcrumb -->
<nav class="relative z-10 py-4 bg-white/70 backdrop-blur-sm border-b border-gray-200">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center space-x-2 text-sm text-gray-600">
			<a href="/" class="hover:text-blue-600 transition-colors">Home</a>
			<span>/</span>
			<a href="/tech-hotpot" class="hover:text-blue-600 transition-colors">Tech Hotpot</a>
			<span>/</span>
			<span class="text-gray-800 font-medium">{post.title}</span>
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="relative z-10 py-8">
	<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Article Header -->
		<header class="mb-8" in:fade={{ delay: 200, duration: 600 }}>
			<!-- Category Badge -->
			<div class="flex items-center space-x-4 mb-4">
				<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
					{post.category}
				</span>
				<span class="text-sm text-gray-500">
					{post.readTime} min read
				</span>
			</div>
			
			<!-- Title -->
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
				{post.title}
			</h1>
			
			<!-- Excerpt -->
			<p class="text-xl text-gray-600 mb-8 leading-relaxed">
				{post.excerpt}
			</p>
			
			<!-- Author and Date -->
			<div class="flex items-center justify-between py-6 border-t border-b border-gray-200">
				<div class="flex items-center space-x-4">
					{#if post.author === 'Alpha Bits Engineering'}
						<div class="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-400">
							<img 
								src="/logos/logo_black.png" 
								alt="Alpha Bits Engineering" 
								class="w-8 h-8 object-contain"
							/>
						</div>
					{:else}
						<div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
							<span class="text-white font-semibold text-lg">
								{post.author.split(' ').map((n: string) => n[0]).join('')}
							</span>
						</div>
					{/if}
					<div>
						<p class="font-semibold text-gray-900">{post.author}</p>
						<p class="text-sm text-gray-500">Published on {formatDate(post.publishedAt)}</p>
					</div>
				</div>
				
				<!-- Share Buttons -->
				<div class="flex items-center space-x-3">
					<span class="text-sm text-gray-500">Share:</span>
					<a 
						href="https://twitter.com/intent/tweet?text={encodeURIComponent(post.title)}&url={encodeURIComponent(`https://alphabits.team/tech-hotpot/${post.slug}`)}"
						target="_blank"
						rel="noopener noreferrer"
						class="p-2 text-gray-400 hover:text-blue-500 transition-colors"
						aria-label="Share on Twitter"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
					</a>
					<a 
						href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(`https://alphabits.team/tech-hotpot/${post.slug}`)}"
						target="_blank"
						rel="noopener noreferrer"
						class="p-2 text-gray-400 hover:text-blue-600 transition-colors"
						aria-label="Share on LinkedIn"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</a>
				</div>
			</div>
		</header>
		
		<!-- Featured Image -->
		<div class="mb-8" in:fly={{ y: 50, delay: 400, duration: 600 }}>
			<img 
				src={post.thumbnail} 
				alt={post.title}
				class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
				loading="eager"
			/>
		</div>
		
		<!-- Article Content -->
		<div 
			bind:this={contentElement}
			class="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-blue-500 prose-ul:list-disc prose-ol:list-decimal"
			in:fly={{ y: 50, delay: 600, duration: 600 }}
		>
			{@html post.content}
		</div>
		
		<!-- Tags -->
		{#if post.tags && post.tags.length > 0}
			<div class="mt-12 pt-8 border-t border-gray-200" in:fade={{ delay: 800, duration: 600 }}>
				<h3 class="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
				<div class="flex flex-wrap gap-2">
					{#each post.tags as tag, index}
						<span 
							class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer"
							in:fly={{ x: -20, delay: 800 + (index * 100), duration: 400 }}
						>
							#{tag}
						</span>
					{/each}
				</div>
			</div>
		{/if}
		
		<!-- Back to Blog -->
		<div class="mt-12 pt-8 border-t border-gray-200 text-center" in:fade={{ delay: 1000, duration: 600 }}>
			<a 
				href="/tech-hotpot"
				class="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
			>
				<svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
				</svg>
				<span>Back to Tech Hotpot</span>
			</a>
		</div>
	</article>
</main>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		33% { transform: translateY(-10px) rotate(120deg); }
		66% { transform: translateY(5px) rotate(240deg); }
	}
	
	.animate-float {
		animation: float 6s ease-in-out infinite;
	}
	
	/* Custom prose styles for better code highlighting */
	:global(.prose pre) {
		border-radius: 0.5rem;
	}
	
	:global(.prose code) {
		font-size: 0.875rem;
	}
	
	:global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
		scroll-margin-top: 5rem;
	}
</style>