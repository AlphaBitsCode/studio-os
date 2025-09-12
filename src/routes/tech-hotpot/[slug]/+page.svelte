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
		// Initialize expandable code blocks after content is rendered
		setTimeout(() => {
			setupExpandableCodeBlocks();
		}, 100);
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
					{:else if post.author === 'Kent Nguyen'}
						<div class="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400">
							<img 
								src="/profile/avatar1.jpg" 
								alt="Kent Nguyen" 
								class="w-full h-full object-cover"
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
			class="article-content max-w-none"
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
	
	/* Enhanced Article Content Styling */
	:global(.article-content) {
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 1.7;
		color: #374151;
	}
	
	/* Headings with custom font and spacing */
	:global(.article-content h1) {
		font-family: 'Inter', sans-serif;
		font-size: 2.25rem;
		font-weight: 700;
		color: #111827;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		line-height: 1.2;
		scroll-margin-top: 5rem;
	}
	
	:global(.article-content h2) {
		font-family: 'Inter', sans-serif;
		font-size: 1.875rem;
		font-weight: 600;
		color: #1f2937;
		margin-top: 2.5rem;
		margin-bottom: 1.25rem;
		line-height: 1.3;
		scroll-margin-top: 5rem;
		border-bottom: 2px solid #e5e7eb;
		padding-bottom: 0.5rem;
	}
	
	:global(.article-content h3) {
		font-family: 'Inter', sans-serif;
		font-size: 1.5rem;
		font-weight: 600;
		color: #374151;
		margin-top: 2rem;
		margin-bottom: 1rem;
		line-height: 1.4;
		scroll-margin-top: 5rem;
	}
	
	:global(.article-content h4) {
		font-family: 'Inter', sans-serif;
		font-size: 1.25rem;
		font-weight: 600;
		color: #4b5563;
		margin-top: 1.75rem;
		margin-bottom: 0.75rem;
		scroll-margin-top: 5rem;
	}
	
	:global(.article-content h5, .article-content h6) {
		font-family: 'Inter', sans-serif;
		font-size: 1.125rem;
		font-weight: 600;
		color: #6b7280;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		scroll-margin-top: 5rem;
	}
	
	/* Paragraphs with proper spacing */
	:global(.article-content p) {
		margin-bottom: 1.5rem;
		text-align: justify;
		text-indent: 0;
	}
	
	/* Links styling */
	:global(.article-content a) {
		color: #2563eb;
		text-decoration: underline;
		text-decoration-color: #93c5fd;
		transition: all 0.2s ease;
	}
	
	:global(.article-content a:hover) {
		color: #1d4ed8;
		text-decoration-color: #2563eb;
	}
	
	/* Strong and emphasis */
	:global(.article-content strong) {
		font-weight: 600;
		color: #111827;
	}
	
	:global(.article-content em) {
		font-style: italic;
		color: #4b5563;
	}
	
	/* Beautiful blockquotes */
	:global(.article-content blockquote) {
		border-left: 4px solid #3b82f6;
		background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
		margin: 2rem 0;
		padding: 1.5rem 2rem;
		border-radius: 0 0.5rem 0.5rem 0;
		position: relative;
		font-style: italic;
		color: #1e40af;
		box-shadow: 0 2px 8px rgba(59, 130, 246, 0.1);
	}
	
	:global(.article-content blockquote::before) {
		content: '"';
		font-size: 3rem;
		color: #3b82f6;
		position: absolute;
		top: -0.5rem;
		left: 0.5rem;
		font-family: Georgia, serif;
		opacity: 0.3;
	}
	
	/* Enhanced Lists */
	:global(.article-content ul) {
		margin: 1.5rem 0;
		padding-left: 0;
		list-style: none;
	}
	
	:global(.article-content ul li) {
		position: relative;
		padding-left: 2rem;
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}
	
	:global(.article-content ul li::before) {
		content: '•';
		color: #3b82f6;
		font-size: 1.2rem;
		position: absolute;
		left: 0.5rem;
		top: 0;
		font-weight: bold;
	}
	
	:global(.article-content ol) {
		margin: 1.5rem 0;
		padding-left: 0;
		counter-reset: list-counter;
		list-style: none;
	}
	
	:global(.article-content ol li) {
		position: relative;
		padding-left: 2.5rem;
		margin-bottom: 0.75rem;
		line-height: 1.6;
		counter-increment: list-counter;
	}
	
	:global(.article-content ol li::before) {
		content: counter(list-counter);
		position: absolute;
		left: 0;
		top: 0;
		background: #3b82f6;
		color: white;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 600;
	}
	
	/* Nested lists */
	:global(.article-content ul ul, .article-content ol ol, .article-content ul ol, .article-content ol ul) {
		margin: 0.5rem 0;
		padding-left: 1.5rem;
	}
	
	/* Inline code */
	:global(.article-content code:not(pre code)) {
		background: #f3f4f6;
		color: #7c3aed;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-family: 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
		border: 1px solid #e5e7eb;
	}
	
	/* Enhanced Code blocks with syntax highlighting */
	:global(.article-content pre) {
		background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
		color: #f1f5f9;
		padding: 1.5rem;
		border-radius: 0.75rem;
		margin: 2rem 0;
		overflow-x: auto;
		position: relative;
		border: 1px solid #334155;
		box-shadow: 0 8px 25px rgba(15, 23, 42, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1);
		transition: all 0.3s ease;
	}
	
	:global(.article-content pre.expandable) {
		max-height: 300px;
		overflow-y: hidden;
	}
	
	:global(.article-content pre.expandable.expanded) {
		max-height: none;
		overflow-y: auto;
	}
	
	:global(.article-content pre.expandable::after) {
		content: 'Click to expand';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3rem;
		background: linear-gradient(transparent, #0f172a);
		display: flex;
		align-items: end;
		justify-content: center;
		padding-bottom: 0.5rem;
		color: #94a3b8;
		font-size: 0.75rem;
		cursor: pointer;
		transition: opacity 0.2s ease;
	}
	
	:global(.article-content pre.expandable.expanded::after) {
		display: none;
	}
	
	:global(.article-content pre code) {
		background: none;
		color: inherit;
		padding: 0;
		border-radius: 0;
		font-size: 0.875rem;
		line-height: 1.6;
		font-family: 'Fira Code', 'Monaco', 'Cascadia Code', monospace;
		border: none;
		display: block;
	}
	
	/* Prism.js syntax highlighting theme */
	:global(.article-content .token.comment),
	:global(.article-content .token.prolog),
	:global(.article-content .token.doctype),
	:global(.article-content .token.cdata) {
		color: #64748b;
		font-style: italic;
	}
	
	:global(.article-content .token.punctuation) {
		color: #cbd5e1;
	}
	
	:global(.article-content .token.property),
	:global(.article-content .token.tag),
	:global(.article-content .token.boolean),
	:global(.article-content .token.number),
	:global(.article-content .token.constant),
	:global(.article-content .token.symbol),
	:global(.article-content .token.deleted) {
		color: #f87171;
	}
	
	:global(.article-content .token.selector),
	:global(.article-content .token.attr-name),
	:global(.article-content .token.string),
	:global(.article-content .token.char),
	:global(.article-content .token.builtin),
	:global(.article-content .token.inserted) {
		color: #34d399;
	}
	
	:global(.article-content .token.operator),
	:global(.article-content .token.entity),
	:global(.article-content .token.url),
	:global(.article-content .language-css .token.string),
	:global(.article-content .style .token.string) {
		color: #60a5fa;
	}
	
	:global(.article-content .token.atrule),
	:global(.article-content .token.attr-value),
	:global(.article-content .token.keyword) {
		color: #a78bfa;
	}
	
	:global(.article-content .token.function),
	:global(.article-content .token.class-name) {
		color: #fbbf24;
	}
	
	:global(.article-content .token.regex),
	:global(.article-content .token.important),
	:global(.article-content .token.variable) {
		color: #fb7185;
	}
	
	/* Tables */
	:global(.article-content table) {
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}
	
	:global(.article-content th) {
		background: #f8fafc;
		padding: 1rem;
		text-align: left;
		font-weight: 600;
		color: #374151;
		border-bottom: 2px solid #e5e7eb;
	}
	
	:global(.article-content td) {
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #f3f4f6;
	}
	
	:global(.article-content tr:hover) {
		background: #f9fafb;
	}
	
	/* Horizontal rules */
	:global(.article-content hr) {
		border: none;
		height: 2px;
		background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
		margin: 3rem 0;
	}
	
	/* Images */
	:global(.article-content img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin: 1.5rem 0;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}
</style>