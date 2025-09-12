<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	// Helper functions moved to client-side
	function formatDate(dateString: string | null | undefined): string {
		if (!dateString) return '';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
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
		if (!imageId) return '/placeholder-image.svg';
		// Use the public Directus URL for client-side image loading
		const directusUrl = 'https://kore.alphabits.team';
		return `${directusUrl}/assets/${imageId}?width=600&height=400&fit=cover&quality=80`;
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
		return words.length > 1 ? `${words[0][0]}${words[1][0]}`.toUpperCase() : name.substring(0, 2).toUpperCase();
	}
	import type { PageData } from './$types';

	export let data: PageData;

	let mounted = false;
	let searchTerm = '';
	let selectedAuthor = '';
	let sortBy = 'date_published';
	let sortOrder: 'asc' | 'desc' = 'desc';

	// Use server-side data
	$: ({ posts, categories, selectedCategory, categorySlug, loading, error } = data);
	$: authors = [...new Set(posts.map(post => 'Alpha Bits'))];

	// Filter and sort posts
	$: filteredPosts = posts
		.filter(post => {
			const matchesSearch = searchTerm === '' || 
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				(post.summary && post.summary.toLowerCase().includes(searchTerm.toLowerCase()));
			
			const matchesAuthor = selectedAuthor === '' || selectedAuthor === 'Alpha Bits';
			
			return matchesSearch && matchesAuthor;
		})
		.sort((a, b) => {
			let aValue: any, bValue: any;
			
			switch (sortBy) {
				case 'title':
					aValue = a.title.toLowerCase();
					bValue = b.title.toLowerCase();
					break;
				case 'category':
					aValue = a.category?.title?.toLowerCase() || '';
					bValue = b.category?.title?.toLowerCase() || '';
					break;
				case 'date_published':
				default:
					aValue = new Date(a.date_published || a.date_created || '').getTime();
					bValue = new Date(b.date_published || b.date_created || '').getTime();
					break;
			}
			
			if (sortOrder === 'asc') {
				return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
			} else {
				return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
			}
		});

	function handleSort(column: string) {
		if (sortBy === column) {
			sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
		} else {
			sortBy = column;
			sortOrder = 'desc';
		}
	}

	function clearFilters() {
		searchTerm = '';
		selectedAuthor = '';
		// Navigate to all posts without category filter
		window.location.href = '/tech-hotpot/all';
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

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>{selectedCategory ? `${selectedCategory.title} Posts` : 'All Blog Posts'} - Tech Hotpot | AlphaBits</title>
	<meta name="description" content="{selectedCategory ? `Browse ${selectedCategory.title.toLowerCase()} posts` : 'Browse all blog posts'} from AlphaBits Tech Hotpot. Expert insights on technology, AI, IoT, digital transformation, and software development. Filter and sort by category, author, and publication date." />
	<meta name="keywords" content="{selectedCategory ? `${selectedCategory.title.toLowerCase()}, ` : ''}technology blog, tech posts, AlphaBits, programming tutorials, AI insights, IoT guides, digital transformation" />
	<meta name="author" content="AlphaBits Team" />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://alphabits.team/tech-hotpot/all{selectedCategory ? `?category=${selectedCategory.slug}` : ''}" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{selectedCategory ? `${selectedCategory.title} Posts` : 'All Blog Posts'} - Tech Hotpot | AlphaBits" />
	<meta property="og:description" content="{selectedCategory ? `Browse ${selectedCategory.title.toLowerCase()} posts` : 'Browse all blog posts'} from AlphaBits Tech Hotpot. Expert insights on technology and innovation." />
	<meta property="og:image" content="https://alphabits.team/logos/logo_square.png" />
	<meta property="og:url" content="https://alphabits.team/tech-hotpot/all{selectedCategory ? `?category=${selectedCategory.slug}` : ''}" />
	<meta property="og:site_name" content="AlphaBits" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{selectedCategory ? `${selectedCategory.title} Posts` : 'All Blog Posts'} - Tech Hotpot" />
	<meta name="twitter:description" content="{selectedCategory ? `Browse ${selectedCategory.title.toLowerCase()} posts` : 'Browse all blog posts'} from AlphaBits Tech Hotpot." />
	<meta name="twitter:image" content="https://alphabits.team/logos/logo_square.png" />
	
	<!-- Additional SEO -->
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
</svelte:head>

<!-- Animated Background -->
<div class="fixed inset-0 -z-10 overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
	<!-- Floating particles -->
	<div class="absolute inset-0">
		{#each Array(15) as _, i}
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

<!-- Header -->
<header class="relative z-10 py-8">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-8">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
				{#if selectedCategory}
					{selectedCategory.title} Posts
				{:else}
					All Blog Posts
				{/if}
			</h1>
			<p class="text-xl text-gray-600 max-w-2xl mx-auto">
				{#if selectedCategory}
					Explore our latest insights in {selectedCategory.title.toLowerCase()}
				{:else}
					Explore our complete collection of tech insights and innovations
				{/if}
			</p>
		</div>

		<!-- Breadcrumb -->
		<nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8 justify-center">
			<a href="/tech-hotpot" class="hover:text-gray-700 transition-colors">Tech Hotpot</a>
			<span>›</span>
			<span class="text-gray-900 font-medium">
				{#if selectedCategory}
					{selectedCategory.title}
				{:else}
					All Posts
				{/if}
			</span>
		</nav>
	</div>
</header>

<!-- Category Filter Navigation -->
<section class="relative z-10 py-4 bg-white/80 backdrop-blur-sm border-y border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a 
				href="/tech-hotpot/all"
				class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {!categorySlug ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
			>
				All Categories
			</a>
			{#each categories as category}
				<a 
					href="/tech-hotpot/all?category={encodeURIComponent(category.slug)}"
					class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {categorySlug === category.slug ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
				>
					{category.title}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Main Content -->
<main class="relative z-10 py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		
		<!-- Search and Filter Controls -->
		<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
				<!-- Search -->
				<div class="md:col-span-2">
					<label for="search" class="block text-sm font-medium text-gray-700 mb-2">Search Posts</label>
					<input
						id="search"
						type="text"
						bind:value={searchTerm}
						placeholder="Search by title or content..."
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>
				
				<!-- Sort By -->
				<div>
					<label for="sort" class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
					<select
						id="sort"
						bind:value={sortBy}
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="date_published">Publication Date</option>
						<option value="title">Title</option>
						<option value="category">Category</option>
					</select>
				</div>
				
				<!-- Sort Order -->
				<div>
					<label for="order" class="block text-sm font-medium text-gray-700 mb-2">Order</label>
					<select
						id="order"
						bind:value={sortOrder}
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="desc">Newest First</option>
						<option value="asc">Oldest First</option>
					</select>
				</div>
			</div>
			
			<!-- Clear Filters -->
			{#if searchTerm || selectedAuthor || categorySlug}
				<div class="mt-4 pt-4 border-t border-gray-200">
					<button
						on:click={clearFilters}
						class="text-blue-600 hover:text-blue-800 text-sm font-medium"
					>
						Clear all filters
					</button>
				</div>
			{/if}
		</div>

		<!-- Results Summary -->
		<div class="mb-6">
			<p class="text-gray-600">
				Showing {filteredPosts.length} of {posts.length} posts
				{#if selectedCategory}
					in {selectedCategory.title}
				{/if}
			</p>
		</div>

		{#if loading}
			<div class="flex justify-center items-center py-16">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
				<span class="ml-3 text-gray-600">Loading blog posts...</span>
			</div>
		{:else if error}
			<div class="text-center py-16">
				<div class="text-red-500 mb-4">
					<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
					</svg>
				</div>
				<p class="text-gray-600">{error}</p>
				<a 
					href="/tech-hotpot/all"
					class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors inline-block"
				>
					Refresh Page
				</a>
			</div>
		{:else if filteredPosts.length === 0}
			<div class="text-center py-16">
				<div class="max-w-md mx-auto">
					<svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
					</svg>
					<h3 class="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
					<p class="text-gray-500 mb-4">
						{#if searchTerm}
							No posts match your search criteria.
						{:else if selectedCategory}
							No posts found in this category.
						{:else}
							No blog posts available yet.
						{/if}
					</p>
					<button
						on:click={clearFilters}
						class="text-blue-600 hover:text-blue-800 font-medium"
					>
						Clear filters
					</button>
				</div>
			</div>
		{:else}
			<!-- Blog Posts Grid -->
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredPosts as post, index}
					<article 
						class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer group"
						in:fly={{ y: 20, delay: index * 50, duration: 400 }}
					>
						<a href="/tech-hotpot/{post.slug}" class="block">
							<!-- Post Thumbnail -->
							<div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
								<img 
									src="{getImageUrl(post.image)}" 
									alt="{post.title}" 
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									loading="lazy"
								/>
							</div>
							
							<!-- Post Content -->
							<div class="p-6">
								<!-- Category Badge -->
								{#if post.category}
									<div class="flex items-center mb-3">
										<div class="w-4 h-4 mr-2">
											<img src="{getCategoryIconPath(post.category.title)}" alt="{post.category.title}" class="w-full h-full opacity-70" />
										</div>
										<span 
											class="inline-block px-3 py-1 text-xs font-medium rounded-full"
											style="background-color: {post.category.color}20; color: {post.category.color};"
										>
											{post.category.title}
										</span>
									</div>
								{/if}
								
								<!-- Post Title -->
								<h2 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
									{post.title}
								</h2>
								
								<!-- Post Excerpt -->
								{#if post.summary}
									<p class="text-gray-600 mb-4 line-clamp-3">
										{post.summary}
									</p>
								{/if}
								
								<!-- Post Meta -->
								<div class="flex items-center justify-between text-sm text-gray-500">
									<div class="flex items-center space-x-4">
										<span>{formatDate(post.date_published || post.date_created)}</span>
										<span>•</span>
										<span>{calculateReadTime(post.content)} min read</span>
									</div>
									<div class="flex items-center space-x-1">
								{#if typeof post.author === 'object' && post.author?.image}
									<img 
										src="{getAvatarUrl(post.author.image, 20)}" 
										alt="{getAuthorName(post.author)}" 
										class="w-5 h-5 rounded-full object-cover"
										loading="lazy"
									/>
								{:else}
									<div class="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
										<span class="text-white text-xs font-semibold">{getAuthorInitials(post.author)}</span>
									</div>
								{/if}
								<span>{getAuthorName(post.author)}</span>
							</div>
								</div>
							</div>
						</a>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</main>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
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
</style>