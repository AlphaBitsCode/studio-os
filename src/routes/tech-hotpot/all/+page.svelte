<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import { setLoading } from '$lib/stores/loading';
	import { fade, fly } from 'svelte/transition';
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import CategoryNavigation from '$lib/components/CategoryNavigation.svelte';
	import { formatDate, calculateReadTime, getCategoryIconPath } from '$lib/utils/blog-helpers';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let mounted = false;
	let searchTerm = '';
	let sortBy = 'date_published';
	let sortOrder: 'asc' | 'desc' = 'desc';
	let viewMode: 'grid' | 'list' = 'grid';
	let showSearch = false;

	// Use server-side data
	let posts = $derived(data.posts);
	let categories = $derived(data.categories);
	let selectedCategory = $derived(data.selectedCategory);
	let categorySlug = $derived(data.categorySlug);
	let loading = $derived(data.loading);
	let error = $derived(data.error);

	// Update global loading state
	$effect(() => {
		setLoading(loading);
	});

	// Filter and sort posts
	let filteredPosts = $derived(
		posts
			.filter((post) => {
				const matchesSearch =
					searchTerm === '' ||
					post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					(post.summary && post.summary.toLowerCase().includes(searchTerm.toLowerCase()));

				return matchesSearch;
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
			})
	);

	function toggleSearch() {
		showSearch = !showSearch;
		if (!showSearch) {
			searchTerm = '';
		}
	}

	function clearFilters() {
		searchTerm = '';
		showSearch = false;
		// Navigate to all posts without category filter
		window.location.href = '/tech-hotpot/all';
	}

	onMount(() => {
		mounted = true;
	});

	onDestroy(() => {
		setLoading(false);
	});
</script>

<svelte:head>
	<title
		>{selectedCategory ? `${selectedCategory.title} Posts` : 'All Blog Posts'} - Tech Hotpot | AlphaBits</title
	>
	<meta
		name="description"
		content="{selectedCategory
			? `Browse ${selectedCategory.title.toLowerCase()} posts`
			: 'Browse all blog posts'} from AlphaBits Tech Hotpot. Expert insights on technology, AI, IoT, digital transformation, and software development. Filter and sort by category, author, and publication date."
	/>
	<meta
		name="keywords"
		content="{selectedCategory
			? `${selectedCategory.title.toLowerCase()}, `
			: ''}technology blog, tech posts, AlphaBits, programming tutorials, AI insights, IoT guides, digital transformation"
	/>
	<meta name="author" content="AlphaBits Team" />

	<!-- Canonical URL -->
	<link
		rel="canonical"
		href="https://alphabits.team/tech-hotpot/all{selectedCategory
			? `?category=${selectedCategory.slug}`
			: ''}"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="{selectedCategory
			? `${selectedCategory.title} Posts`
			: 'All Blog Posts'} - Tech Hotpot | AlphaBits"
	/>
	<meta
		property="og:description"
		content="{selectedCategory
			? `Browse ${selectedCategory.title.toLowerCase()} posts`
			: 'Browse all blog posts'} from AlphaBits Tech Hotpot. Expert insights on technology and innovation."
	/>
	<meta property="og:image" content="https://alphabits.team/logos/logo_square.png" />
	<meta
		property="og:url"
		content="https://alphabits.team/tech-hotpot/all{selectedCategory
			? `?category=${selectedCategory.slug}`
			: ''}"
	/>
	<meta property="og:site_name" content="AlphaBits" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="{selectedCategory
			? `${selectedCategory.title} Posts`
			: 'All Blog Posts'} - Tech Hotpot"
	/>
	<meta
		name="twitter:description"
		content="{selectedCategory
			? `Browse ${selectedCategory.title.toLowerCase()} posts`
			: 'Browse all blog posts'} from AlphaBits Tech Hotpot."
	/>
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
				class="animate-float absolute h-2 w-2 rounded-full bg-blue-400 opacity-20"
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

<!-- Enhanced Sticky Category Navigation + Filters -->
<section class="sticky top-14 z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
	<!-- Category Navigation -->
	<div class="border-b border-gray-100">
		<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<div class="flex items-center justify-between py-3 sm:justify-center">
				<CategoryNavigation {categories} {selectedCategory} />
			</div>
		</div>
	</div>

	<!-- Modern Icon Toolbar -->
	<div class="py-3">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between">
				<!-- Left Side: Search & Filters -->
				<div class="flex items-center space-x-4">
					<!-- Search Toggle & Input -->
					<div class="flex items-center space-x-2">
						<button
							on:click={toggleSearch}
							class="rounded-lg p-2 transition-colors {showSearch
								? 'bg-blue-100 text-blue-600'
								: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
							title="Search posts"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>

						{#if showSearch}
							<div class="flex items-center space-x-2" in:fly={{ x: -20, duration: 200 }}>
								<input
									type="text"
									bind:value={searchTerm}
									placeholder="Search..."
									class="w-48 rounded-lg border-0 bg-gray-50 px-3 py-1.5 text-sm transition-colors focus:bg-white focus:ring-2 focus:ring-blue-500"
									autofocus
								/>
								{#if searchTerm}
									<button
										on:click={() => (searchTerm = '')}
										class="p-1 text-gray-400 transition-colors hover:text-gray-600"
									>
										<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								{/if}
							</div>
						{/if}
					</div>

					<!-- Divider -->
					<div class="h-6 w-px bg-gray-300"></div>

					<!-- Sort By Toggle -->
					<div class="flex items-center space-x-2">
						<button
							on:click={() => (sortBy = sortBy === 'date_published' ? 'title' : 'date_published')}
							class="rounded-lg p-2 transition-colors {sortBy === 'date_published'
								? 'bg-blue-100 text-blue-600'
								: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
							title={sortBy === 'date_published' ? 'Sort by date' : 'Sort by title'}
						>
							{#if sortBy === 'date_published'}
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							{:else}
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							{/if}
						</button>

						<!-- Sort Order Toggle -->
						<button
							on:click={() => (sortOrder = sortOrder === 'desc' ? 'asc' : 'desc')}
							class="rounded-lg p-2 transition-colors {sortOrder === 'desc'
								? 'bg-blue-100 text-blue-600'
								: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
							title={sortOrder === 'desc' ? 'Newest first' : 'Oldest first'}
						>
							{#if sortOrder === 'desc'}
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v18"
									/>
								</svg>
							{:else}
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v18"
									/>
								</svg>
							{/if}
						</button>
					</div>

					<!-- Divider -->
					<div class="h-6 w-px bg-gray-300"></div>

					<!-- View Mode Toggle -->
					<div class="flex items-center space-x-1">
						<button
							on:click={() => (viewMode = 'grid')}
							class="rounded-lg p-2 transition-colors {viewMode === 'grid'
								? 'bg-blue-100 text-blue-600'
								: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
							title="Grid view"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
						</button>
						<button
							on:click={() => (viewMode = 'list')}
							class="rounded-lg p-2 transition-colors {viewMode === 'list'
								? 'bg-blue-100 text-blue-600'
								: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
							title="List view"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 10h16M4 14h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>

				<!-- Right Side: Post Count & Clear -->
				<div class="flex items-center space-x-4">
					<!-- Post Count -->
					<div class="flex items-center space-x-2 text-gray-600">
						<span class="text-lg font-semibold">{filteredPosts.length}</span>
						<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
					</div>

					<!-- Clear Filters -->
					{#if searchTerm || categorySlug}
						<button
							on:click={clearFilters}
							class="rounded-lg p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600"
							title="Clear all filters"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Main Content -->
<main class="relative z-10 py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		{#if loading}
			<div class="flex items-center justify-center py-16">
				<div class="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500"></div>
				<span class="ml-3 text-gray-600">Loading blog posts...</span>
			</div>
		{:else if error}
			<div class="py-16 text-center">
				<div class="mb-4 text-red-500">
					<svg class="mx-auto mb-4 h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
						></path>
					</svg>
				</div>
				<p class="text-gray-600">{error}</p>
				<a
					href="/tech-hotpot/all"
					class="mt-4 inline-block rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
				>
					Refresh Page
				</a>
			</div>
		{:else if filteredPosts.length === 0}
			<div class="py-16 text-center">
				<div class="mx-auto max-w-md">
					<svg
						class="mx-auto mb-4 h-12 w-12 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
						></path>
					</svg>
					<h3 class="mb-2 text-lg font-medium text-gray-900">No posts found</h3>
					<p class="mb-4 text-gray-500">
						{#if searchTerm}
							No posts match your search criteria.
						{:else if selectedCategory}
							No posts found in this category.
						{:else}
							No blog posts available yet.
						{/if}
					</p>
					<button on:click={clearFilters} class="font-medium text-blue-600 hover:text-blue-800">
						Clear filters
					</button>
				</div>
			</div>
		{:else}
			<!-- Blog Posts Display -->
			{#if viewMode === 'grid'}
				<!-- Masonry Grid Layout -->
				<div
					class="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6"
				>
					{#each filteredPosts as post, index}
						<BlogPostCard
							{post}
							viewMode="grid"
							delay={index * 30}
							className="break-inside-avoid mb-6"
						/>
					{/each}
				</div>
			{:else}
				<!-- List View Layout -->
				<div class="space-y-4">
					{#each filteredPosts as post, index}
						<BlogPostCard {post} viewMode="list" delay={index * 30} />
					{/each}
				</div>
			{/if}
		{/if}
	</div>
</main>

<style>
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

	.break-inside-avoid {
		break-inside: avoid;
		page-break-inside: avoid;
	}

	/* Masonry layout improvements */
	.columns-1 > * {
		margin-bottom: 1.5rem;
	}

	.columns-2 > * {
		margin-bottom: 1.5rem;
	}

	.columns-3 > * {
		margin-bottom: 1.5rem;
	}

	.columns-4 > * {
		margin-bottom: 1.5rem;
	}

	.columns-5 > * {
		margin-bottom: 1.5rem;
	}

	.columns-6 > * {
		margin-bottom: 1.5rem;
	}

	/* Responsive masonry adjustments */
	@media (max-width: 640px) {
		.columns-1 {
			column-gap: 1rem;
		}
	}

	@media (min-width: 641px) and (max-width: 768px) {
		.columns-2 {
			column-gap: 1.25rem;
		}
	}

	@media (min-width: 769px) and (max-width: 1024px) {
		.columns-3 {
			column-gap: 1.5rem;
		}
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		.columns-4 {
			column-gap: 1.5rem;
		}
	}

	@media (min-width: 1281px) and (max-width: 1536px) {
		.columns-5 {
			column-gap: 1.5rem;
		}
	}

	@media (min-width: 1537px) {
		.columns-6 {
			column-gap: 1.5rem;
		}
	}
</style>
