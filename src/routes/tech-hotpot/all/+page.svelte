<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	interface BlogPost {
		id: number;
		title: string;
		slug: string;
		excerpt: string;
		category: string;
		tags: string[];
		author: string;
		readTime: number;
		publishedAt: string;
		thumbnail: string;
		featured: boolean;
	}

	interface CategoryInfo {
		name: string;
		description: string;
		icon: string;
		color: string;
		postCount: number;
	}

	export let data: PageData;

	let mounted = false;
	let searchTerm = '';
	let selectedCategory = '';
	let selectedAuthor = '';
	let sortBy = 'publishedAt';
	let sortOrder: 'asc' | 'desc' = 'desc';
	let categoryDefinitions: CategoryInfo[] = [];

	$: posts = data.posts as BlogPost[];
	$: categories = categoryDefinitions.map(cat => cat.name);
	$: authors = [...new Set(posts.map((post: BlogPost) => post.author))];

	// Fetch categories from API
	async function fetchCategories() {
		try {
			const response = await fetch('/api/blog-categories');
			
			if (!response.ok) {
				throw new Error('Failed to fetch categories');
			}
			
			categoryDefinitions = await response.json();
		} catch (err) {
			console.error('Error fetching categories:', err);
			// Fallback to empty categories
			categoryDefinitions = [];
		}
	}

	// Filter and sort posts
	$: filteredPosts = posts
		.filter((post: BlogPost) => {
			const matchesSearch = searchTerm === '' || 
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
			
			const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
			const matchesAuthor = selectedAuthor === '' || post.author === selectedAuthor;
			
			return matchesSearch && matchesCategory && matchesAuthor;
		})
		.sort((a: BlogPost, b: BlogPost) => {
			let aValue: any, bValue: any;
			
			switch (sortBy) {
				case 'title':
					aValue = a.title.toLowerCase();
					bValue = b.title.toLowerCase();
					break;
				case 'category':
					aValue = a.category.toLowerCase();
					bValue = b.category.toLowerCase();
					break;
				case 'author':
					aValue = a.author.toLowerCase();
					bValue = b.author.toLowerCase();
					break;
				case 'readTime':
					aValue = a.readTime;
					bValue = b.readTime;
					break;
				case 'publishedAt':
				default:
					aValue = new Date(a.publishedAt).getTime();
					bValue = new Date(b.publishedAt).getTime();
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

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function clearFilters() {
		searchTerm = '';
		selectedCategory = '';
		selectedAuthor = '';
	}

	onMount(async () => {
		mounted = true;
		// Fetch categories first
		await fetchCategories();
		// Check for category parameter in URL
		const categoryParam = $page.url.searchParams.get('category');
		if (categoryParam) {
			selectedCategory = categoryParam;
		}
	});
</script>

<svelte:head>
	<title>All Blog Posts - Tech Hotpot | AlphaBits</title>
	<meta name="description" content="Browse all blog posts from AlphaBits Tech Hotpot. Filter and sort by category, author, and publication date." />
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

<!-- Navigation Breadcrumb -->
<nav class="relative z-10 py-4 bg-white/70 backdrop-blur-sm border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center space-x-2 text-sm text-gray-600">
			<a href="/" class="hover:text-blue-600 transition-colors">Home</a>
			<span>/</span>
			<a href="/tech-hotpot" class="hover:text-blue-600 transition-colors">Tech Hotpot</a>
			<span>/</span>
			<span class="text-gray-800 font-medium">All Posts</span>
		</div>
	</div>
</nav>

<!-- Header -->
<header class="relative z-10 py-8">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<div class="flex items-center justify-center space-x-4 mb-4">
			<!-- Tech Hotpot Logo -->
			<div class="relative">
				<svg class="w-16 h-16 text-orange-500 animate-pulse" viewBox="0 0 64 64" fill="currentColor">
					<!-- Pot base -->
					<path d="M12 32 L52 32 L50 52 C50 54 48 56 46 56 L18 56 C16 56 14 54 14 52 Z" />
					<!-- Pot handles -->
					<path d="M8 28 C8 26 10 24 12 24 L12 32 L8 32 Z" fill="none" stroke="currentColor" stroke-width="2"/>
					<path d="M56 28 C56 26 54 24 52 24 L52 32 L56 32 Z" fill="none" stroke="currentColor" stroke-width="2"/>
					<!-- Steam/Circuit lines -->
					<path d="M20 24 Q22 20 20 16 Q18 12 20 8" fill="none" stroke="currentColor" stroke-width="2" class="animate-bounce"/>
					<path d="M32 24 Q34 20 32 16 Q30 12 32 8" fill="none" stroke="currentColor" stroke-width="2" class="animate-bounce" style="animation-delay: 0.5s"/>
					<path d="M44 24 Q46 20 44 16 Q42 12 44 8" fill="none" stroke="currentColor" stroke-width="2" class="animate-bounce" style="animation-delay: 1s"/>
				</svg>
			</div>			
		</div>
	</div>
</header>

<!-- Sticky Category Navigation -->
<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-center py-3">
			<div class="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
				{#each categoryDefinitions as category, index}
					<button 
						class="group flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105 {selectedCategory === category.name ? 'opacity-100' : 'opacity-70 hover:opacity-100'}"
						on:click={() => selectedCategory = selectedCategory === category.name ? '' : category.name}
						in:fly={{ y: -20, delay: index * 50, duration: 400 }}
					>
						<!-- Compact Category Icon -->
						<div class="w-8 h-8 sm:w-10 sm:h-10 mb-1">
							{#if category.icon === 'software'}
								<svg class="w-full h-full text-blue-500 group-hover:text-blue-600 transition-colors {selectedCategory === category.name ? 'text-blue-600' : ''}" viewBox="0 0 64 64" fill="currentColor">
									<rect x="8" y="12" width="48" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
									<path d="M16 20 L20 24 L16 28" fill="none" stroke="currentColor" stroke-width="2"/>
									<line x1="24" y1="28" x2="32" y2="28" stroke="currentColor" stroke-width="2"/>
								</svg>
							{:else if category.icon === 'iot'}
								<svg class="w-full h-full text-green-500 group-hover:text-green-600 transition-colors {selectedCategory === category.name ? 'text-green-600' : ''}" viewBox="0 0 64 64" fill="currentColor">
									<circle cx="32" cy="20" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
									<circle cx="16" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
									<circle cx="48" cy="40" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
									<circle cx="32" cy="52" r="4" fill="none" stroke="currentColor" stroke-width="2"/>
									<path d="M32 26 L32 32 M26 20 L20 36 M38 20 L44 36 M32 32 L16 40 M32 32 L48 40 M32 32 L32 48" stroke="currentColor" stroke-width="2"/>
								</svg>
							{:else if category.icon === 'data'}
								<svg class="w-full h-full text-purple-500 group-hover:text-purple-600 transition-colors {selectedCategory === category.name ? 'text-purple-600' : ''}" viewBox="0 0 64 64" fill="currentColor">
									<rect x="8" y="32" width="8" height="24" rx="2"/>
									<rect x="20" y="24" width="8" height="32" rx="2"/>
									<rect x="32" y="16" width="8" height="40" rx="2"/>
									<rect x="44" y="28" width="8" height="28" rx="2"/>
								</svg>
							{:else if category.icon === 'ai'}
								<svg class="w-full h-full text-red-500 group-hover:text-red-600 transition-colors {selectedCategory === category.name ? 'text-red-600' : ''}" viewBox="0 0 64 64" fill="currentColor">
									<circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="2"/>
									<circle cx="24" cy="24" r="3"/>
									<circle cx="40" cy="24" r="3"/>
									<circle cx="20" cy="36" r="2"/>
									<circle cx="44" cy="36" r="2"/>
									<circle cx="32" cy="44" r="2"/>
									<path d="M24 24 L20 36 M40 24 L44 36 M24 24 L32 44 M40 24 L32 44 M20 36 L32 44 M44 36 L32 44" stroke="currentColor" stroke-width="1"/>
								</svg>
							{:else if category.icon === 'dx'}
								<svg class="w-full h-full text-orange-500 group-hover:text-orange-600 transition-colors {selectedCategory === category.name ? 'text-orange-600' : ''}" viewBox="0 0 64 64" fill="currentColor">
									<circle cx="20" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
									<path d="M14 26 L26 38 M26 26 L14 38" stroke="currentColor" stroke-width="2"/>
									<rect x="40" y="20" width="16" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
									<circle cx="44" cy="28" r="1"/>
									<circle cx="52" cy="28" r="1"/>
									<path d="M44 36 Q48 32 52 36" fill="none" stroke="currentColor" stroke-width="2"/>
								</svg>
							{/if}
						</div>
						
						<!-- Compact Category Name -->
						<span class="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-center leading-tight {selectedCategory === category.name ? 'text-gray-900 font-semibold' : ''}">
							{category.name.replace(' & ', '\n&\n').replace(' ', '\n')}
						</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="relative z-10 py-8">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<!-- Filters and Search -->
		<div class="bg-white/70 rounded-xl p-6 mb-8" in:fade={{ delay: 200, duration: 600 }}>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
				<!-- Search -->
				<div class="md:col-span-2">
					<label for="search" class="block text-sm font-medium text-gray-700 mb-2">Search</label>
					<input
						id="search"
						type="text"
						bind:value={searchTerm}
						placeholder="Search by title, content, or tags..."
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>
				
				<!-- Category Filter -->
				<div>
					<label for="category" class="block text-sm font-medium text-gray-700 mb-2">Category</label>
					<select
						id="category"
						bind:value={selectedCategory}
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="">All Categories</option>
						{#each categories as category}
							<option value={category}>{category}</option>
						{/each}
					</select>
				</div>
				
				<!-- Author Filter -->
				<div>
					<label for="author" class="block text-sm font-medium text-gray-700 mb-2">Author</label>
					<select
						id="author"
						bind:value={selectedAuthor}
						class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="">All Authors</option>
						{#each authors as author}
							<option value={author}>{author}</option>
						{/each}
					</select>
				</div>
			</div>
			
			<!-- Filter Summary and Clear -->
			<div class="flex items-center justify-between">
				<p class="text-sm text-gray-600">
					Showing {filteredPosts.length} of {posts.length} posts
				</p>
				{#if searchTerm || selectedCategory || selectedAuthor}
					<button
						on:click={clearFilters}
						class="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
					>
						Clear Filters
					</button>
				{/if}
			</div>
		</div>

		<!-- Table -->
		<div class="bg-white/70 border border-gray-200 rounded-xl overflow-hidden" in:fly={{ y: 50, delay: 400, duration: 600 }}>
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead class="bg-gray-50/80">
						<tr>
							<th class="px-6 py-4 text-left">
								<button
									on:click={() => handleSort('title')}
									class="flex items-center space-x-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
								>
									<span>Title</span>
									<svg class="w-4 h-4 {sortBy === 'title' ? 'text-blue-600' : 'text-gray-400'} {sortBy === 'title' && sortOrder === 'desc' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
									</svg>
								</button>
							</th>
							<th class="px-6 py-4 text-left">
								<button
									on:click={() => handleSort('category')}
									class="flex items-center space-x-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
								>
									<span>Category</span>
									<svg class="w-4 h-4 {sortBy === 'category' ? 'text-blue-600' : 'text-gray-400'} {sortBy === 'category' && sortOrder === 'desc' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
									</svg>
								</button>
							</th>
							<th class="px-6 py-4 text-left">
								<button
									on:click={() => handleSort('author')}
									class="flex items-center space-x-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
								>
									<span>Author</span>
									<svg class="w-4 h-4 {sortBy === 'author' ? 'text-blue-600' : 'text-gray-400'} {sortBy === 'author' && sortOrder === 'desc' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
									</svg>
								</button>
							</th>
							<th class="px-6 py-4 text-left">
								<button
									on:click={() => handleSort('readTime')}
									class="flex items-center space-x-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
								>
									<span>Read Time</span>
									<svg class="w-4 h-4 {sortBy === 'readTime' ? 'text-blue-600' : 'text-gray-400'} {sortBy === 'readTime' && sortOrder === 'desc' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
									</svg>
								</button>
							</th>
							<th class="px-6 py-4 text-left">
								<button
									on:click={() => handleSort('publishedAt')}
									class="flex items-center space-x-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
								>
									<span>Published</span>
									<svg class="w-4 h-4 {sortBy === 'publishedAt' ? 'text-blue-600' : 'text-gray-400'} {sortBy === 'publishedAt' && sortOrder === 'desc' ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
									</svg>
								</button>
							</th>
							<th class="px-6 py-4 text-left">
								<span class="text-sm font-semibold text-gray-700">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
						{#each filteredPosts as post, index (post.id)}
							<tr 
								class="hover:bg-gray-50/50 transition-colors"
								in:fly={{ x: -20, delay: index * 50, duration: 400 }}
							>
								<!-- Title -->
								<td class="px-6 py-4">
									<div class="max-w-xs">
										<h3 class="font-semibold text-gray-900 line-clamp-2 mb-1">
											<a 
												href="/tech-hotpot/{post.slug}"
												class="hover:text-blue-600 transition-colors"
											>
												{post.title}
											</a>
										</h3>
										<p class="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
										{#if post.tags && post.tags.length > 0}
											<div class="flex flex-wrap gap-1 mt-2">
												{#each post.tags.slice(0, 2) as tag}
													<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
														#{tag}
													</span>
												{/each}
												{#if post.tags.length > 2}
													<span class="text-xs text-gray-500">+{post.tags.length - 2}</span>
												{/if}
											</div>
										{/if}
									</div>
								</td>
								
								<!-- Category -->
								<td class="px-6 py-4">
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										{post.category}
									</span>
								</td>
								
								<!-- Author -->
								<td class="px-6 py-4">
									<div class="flex items-center space-x-2">
										{#if post.author === 'Alpha Bits Engineering'}
											<div class="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-400">
												<img 
													src="/logos/logo_black.png" 
													alt="Alpha Bits Engineering" 
													class="w-5 h-5 object-contain"
												/>
											</div>
										{:else if post.author === 'Kent Nguyen'}
											<div class="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-400">
												<img 
													src="/profile/avatar1.jpg" 
													alt="Kent Nguyen" 
													class="w-full h-full object-cover"
												/>
											</div>
										{:else}
											<div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
												<span class="text-white text-xs font-semibold">
													{post.author.split(' ').map((n: string) => n[0]).join('')}
												</span>
											</div>
										{/if}
										<span class="text-sm text-gray-900">{post.author}</span>
									</div>
								</td>
								
								<!-- Read Time -->
								<td class="px-6 py-4">
									<span class="text-sm text-gray-600">{post.readTime} min</span>
								</td>
								
								<!-- Published Date -->
								<td class="px-6 py-4">
									<span class="text-sm text-gray-600">{formatDate(post.publishedAt)}</span>
								</td>
								
								<!-- Actions -->
								<td class="px-6 py-4">
									<a 
										href="/tech-hotpot/{post.slug}"
										class="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group"
									>
										<span>Read</span>
										<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
										</svg>
									</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			
			{#if filteredPosts.length === 0}
				<div class="text-center py-12">
					<svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
					</svg>
					<h3 class="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
					<p class="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
					<button
						on:click={clearFilters}
						class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
					>
						Clear All Filters
					</button>
				</div>
			{/if}
		</div>
		
		<!-- Back to Tech Hotpot -->
		<div class="mt-8 text-center" in:fade={{ delay: 600, duration: 600 }}>
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
	</div>
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
	
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>