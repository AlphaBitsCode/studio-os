<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import { setLoading } from '$lib/stores/loading';
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
		return words.length > 1
			? `${words[0][0]}${words[1][0]}`.toUpperCase()
			: name.substring(0, 2).toUpperCase();
	}
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let mounted = false;
	let searchTerm = '';
	let selectedAuthor = '';
	let sortBy = 'date_published';
	let sortOrder: 'asc' | 'desc' = 'desc';
	let viewMode: 'grid' | 'list' = 'grid';
	let showSearch = false; // Toggle for search input visibility
	let sortByDate = true; // Toggle for date vs title sorting
	let sortNewest = true; // Toggle for newest vs oldest

	// Use server-side data
	let posts = $derived(data.posts);
	let categories = $derived(data.categories);
	let selectedCategory = $derived(data.selectedCategory);
	let categorySlug = $derived(data.categorySlug);
	let loading = $derived(data.loading);
	let error = $derived(data.error);
	let authors = $derived([...new Set(posts.map((post) => 'Alpha Bits'))]);

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
			})
	);

	// Update sortBy and sortOrder based on toggles
	$effect(() => {
		sortBy = sortByDate ? 'date_published' : 'title';
		sortOrder = sortNewest ? 'desc' : 'asc';
	});

	function toggleSearch() {
		showSearch = !showSearch;
		if (!showSearch) {
			searchTerm = '';
		}
	}

	function toggleSortBy() {
		sortByDate = !sortByDate;
	}

	function toggleSortOrder() {
		sortNewest = !sortNewest;
	}

	function clearFilters() {
		searchTerm = '';
		selectedAuthor = '';
		showSearch = false;
		// Navigate to all posts without category filter
		window.location.href = '/tech-hotpot/all';
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

	onMount(() => {
		mounted = true;
	});

	onDestroy(() => {
		// Clean up loading state when component is unmounted
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
				<div
					class="flex w-full items-center justify-between space-x-1 sm:w-auto sm:justify-center sm:space-x-4 md:space-x-6 lg:space-x-8"
				>
					<!-- All Categories Button -->
					<a
						href="/tech-hotpot/all"
						class="group flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105 {!categorySlug
							? 'opacity-100'
							: 'opacity-70 hover:opacity-100'}"
					>
						<div class="mb-1 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
							<svg
								class="h-full w-full {!categorySlug
									? 'text-blue-600'
									: 'text-gray-500 group-hover:text-gray-700'} transition-colors"
								viewBox="0 0 64 64"
								fill="currentColor"
							>
								<rect
									x="8"
									y="8"
									width="48"
									height="48"
									rx="8"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								/>
								<rect x="16" y="16" width="12" height="12" rx="2" />
								<rect x="36" y="16" width="12" height="12" rx="2" />
								<rect x="16" y="36" width="12" height="12" rx="2" />
								<rect x="36" y="36" width="12" height="12" rx="2" />
							</svg>
						</div>
						<span
							class="text-xs font-medium sm:text-sm {!categorySlug
								? 'text-blue-600'
								: 'text-gray-700 group-hover:text-gray-900'} max-w-16 text-center leading-tight transition-colors sm:max-w-none"
						>
							<span class="hidden sm:inline">All</span>
							<span class="sm:hidden">All</span>
						</span>
					</a>

					{#each categories as category, index}
						<a
							href="/tech-hotpot/all?category={encodeURIComponent(category.slug)}"
							class="group flex cursor-pointer flex-col items-center transition-all duration-200 hover:scale-105 {categorySlug ===
							category.slug
								? 'opacity-100'
								: 'opacity-70 hover:opacity-100'}"
							in:fly={{ y: -20, delay: index * 50, duration: 400 }}
						>
							<!-- Category Icon -->
							<div class="mb-1 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10">
								{#if getCategoryIcon(category.title) === 'software'}
									<svg
										class="h-full w-full {categorySlug === category.slug
											? 'text-blue-600'
											: 'text-blue-500 group-hover:text-blue-600'} transition-colors"
										viewBox="0 0 64 64"
										fill="currentColor"
									>
										<rect
											x="8"
											y="12"
											width="48"
											height="32"
											rx="4"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<path
											d="M16 20 L20 24 L16 28"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<line x1="24" y1="28" x2="32" y2="28" stroke="currentColor" stroke-width="2" />
									</svg>
								{:else if getCategoryIcon(category.title) === 'iot'}
									<svg
										class="h-full w-full {categorySlug === category.slug
											? 'text-green-600'
											: 'text-green-500 group-hover:text-green-600'} transition-colors"
										viewBox="0 0 64 64"
										fill="currentColor"
									>
										<circle
											cx="32"
											cy="20"
											r="6"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle
											cx="16"
											cy="40"
											r="4"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle
											cx="48"
											cy="40"
											r="4"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle
											cx="32"
											cy="52"
											r="4"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<path
											d="M32 26 L32 32 M26 20 L20 36 M38 20 L44 36 M32 32 L16 40 M32 32 L48 40 M32 32 L32 48"
											stroke="currentColor"
											stroke-width="2"
										/>
									</svg>
								{:else if getCategoryIcon(category.title) === 'data' || getCategoryIcon(category.title) === 'analytics'}
									<svg
										class="h-full w-full {categorySlug === category.slug
											? 'text-purple-600'
											: 'text-purple-500 group-hover:text-purple-600'} transition-colors"
										viewBox="0 0 64 64"
										fill="currentColor"
									>
										<rect x="8" y="32" width="8" height="24" rx="2" />
										<rect x="20" y="24" width="8" height="32" rx="2" />
										<rect x="32" y="16" width="8" height="40" rx="2" />
										<rect x="44" y="28" width="8" height="28" rx="2" />
									</svg>
								{:else if getCategoryIcon(category.title) === 'ai'}
									<svg
										class="h-full w-full {categorySlug === category.slug
											? 'text-teal-600'
											: 'text-teal-500 group-hover:text-teal-600'} transition-colors"
										viewBox="0 0 64 64"
										fill="currentColor"
									>
										<circle
											cx="16"
											cy="16"
											r="8"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle
											cx="48"
											cy="16"
											r="8"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle
											cx="32"
											cy="48"
											r="8"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<path
											d="M24 16 L40 16 M24 22 L26 40 M40 22 L38 40"
											stroke="currentColor"
											stroke-width="2"
										/>
										<path
											d="M16 24 L16 32 L24 40 M48 24 L48 32 L40 40"
											stroke="currentColor"
											stroke-width="2"
										/>
									</svg>
								{:else if getCategoryIcon(category.title) === 'dx'}
									<svg
										class="h-full w-full {categorySlug === category.slug
											? 'text-orange-600'
											: 'text-orange-500 group-hover:text-orange-600'} transition-colors"
										viewBox="0 0 64 64"
										fill="currentColor"
									>
										<circle
											cx="20"
											cy="32"
											r="12"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<path d="M14 26 L26 38 M26 26 L14 38" stroke="currentColor" stroke-width="2" />
										<rect
											x="40"
											y="20"
											width="16"
											height="24"
											rx="2"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle cx="44" cy="28" r="1" />
										<circle cx="52" cy="28" r="1" />
										<path
											d="M44 36 Q48 32 52 36"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
									</svg>
								{:else}
									<svg
										class="h-full w-full {categorySlug === category.slug
											? 'text-gray-600'
											: 'text-gray-500 group-hover:text-gray-600'} transition-colors"
										viewBox="0 0 64 64"
										fill="currentColor"
									>
										<rect
											x="8"
											y="12"
											width="48"
											height="32"
											rx="4"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
										<circle
											cx="32"
											cy="28"
											r="8"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
										/>
									</svg>
								{/if}
							</div>

							<!-- Category Name -->
							<span
								class="text-xs font-medium sm:text-sm {categorySlug === category.slug
									? 'text-blue-600'
									: 'text-gray-700 group-hover:text-gray-900'} max-w-16 text-center leading-tight transition-colors sm:max-w-none"
							>
								<span class="hidden sm:inline"
									>{category.title.replace(' & ', '\n&\n').replace(' ', '\n')}</span
								>
								<span class="sm:hidden">{category.title.split(' ')[0]}</span>
							</span>
						</a>
					{/each}
				</div>
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

					<!-- Sort By Toggle (Date/Title) -->
					<button
						on:click={toggleSortBy}
						class="rounded-lg p-2 transition-colors {sortByDate
							? 'bg-blue-100 text-blue-600'
							: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
						title={sortByDate ? 'Sort by date' : 'Sort by title'}
					>
						{#if sortByDate}
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

					<!-- Sort Order Toggle (Newest/Oldest) -->
					<button
						on:click={toggleSortOrder}
						class="rounded-lg p-2 transition-colors {sortNewest
							? 'bg-blue-100 text-blue-600'
							: 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}"
						title={sortNewest ? 'Newest first' : 'Oldest first'}
					>
						{#if sortNewest}
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
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
				<!-- Masonry Grid Layout - 6 Columns -->
				<div
					class="columns-1 gap-6 space-y-6 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6"
				>
					{#each filteredPosts as post, index}
						<article
							class="group mb-6 cursor-pointer break-inside-avoid overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md"
							in:fly={{ y: 20, delay: index * 30, duration: 400 }}
						>
							<a href="/tech-hotpot/{post.slug}" class="block">
								<!-- Post Thumbnail -->
								<div
									class="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200"
								>
									<img
										src={getImageUrl(post.image)}
										alt={post.title}
										class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
									/>
								</div>

								<!-- Post Content -->
								<div class="p-4">
									<!-- Category Badge -->
									{#if post.category}
										<div class="mb-3 flex items-center">
											<div class="mr-2 h-4 w-4">
												<img
													src={getCategoryIconPath(post.category.title)}
													alt={post.category.title}
													class="h-full w-full opacity-70"
												/>
											</div>
											<span
												class="inline-block rounded-full px-2 py-1 text-xs font-medium"
												style="background-color: {post.category.color}20; color: {post.category
													.color};"
											>
												{post.category.title}
											</span>
										</div>
									{/if}

									<!-- Post Title -->
									<h2
										class="mb-2 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600"
									>
										{post.title}
									</h2>

									<!-- Post Excerpt -->
									{#if post.summary}
										<p class="mb-3 line-clamp-3 text-sm text-gray-600">
											{post.summary}
										</p>
									{/if}

									<!-- Post Meta -->
									<div class="flex items-center justify-between text-xs text-gray-500">
										<div class="flex items-center space-x-2">
											<span>{formatDate(post.date_published || post.date_created)}</span>
											<span>•</span>
											<span>{calculateReadTime(post.content)} min</span>
										</div>
										<div class="flex items-center space-x-1">
											{#if typeof post.author === 'object' && post.author?.image}
												<img
													src={getAvatarUrl(post.author.image, 16)}
													alt={getAuthorName(post.author)}
													class="h-4 w-4 rounded-full object-cover"
													loading="lazy"
												/>
											{:else}
												<div
													class="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
												>
													<span class="text-xs font-semibold text-white"
														>{getAuthorInitials(post.author)}</span
													>
												</div>
											{/if}
											<span class="text-xs">{getAuthorName(post.author)}</span>
										</div>
									</div>
								</div>
							</a>
						</article>
					{/each}
				</div>
			{:else}
				<!-- List View Layout -->
				<div class="space-y-4">
					{#each filteredPosts as post, index}
						<article
							class="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md"
							in:fly={{ x: -20, delay: index * 30, duration: 400 }}
						>
							<a href="/tech-hotpot/{post.slug}" class="block">
								<div class="flex flex-col sm:flex-row">
									<!-- Post Thumbnail -->
									<div class="sm:w-64 sm:flex-shrink-0">
										<div
											class="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:aspect-square"
										>
											<img
												src={getImageUrl(post.image)}
												alt={post.title}
												class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
												loading="lazy"
											/>
										</div>
									</div>

									<!-- Post Content -->
									<div class="flex-1 p-6">
										<!-- Category Badge -->
										{#if post.category}
											<div class="mb-3 flex items-center">
												<div class="mr-2 h-4 w-4">
													<img
														src={getCategoryIconPath(post.category.title)}
														alt={post.category.title}
														class="h-full w-full opacity-70"
													/>
												</div>
												<span
													class="inline-block rounded-full px-3 py-1 text-xs font-medium"
													style="background-color: {post.category.color}20; color: {post.category
														.color};"
												>
													{post.category.title}
												</span>
											</div>
										{/if}

										<!-- Post Title -->
										<h2
											class="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
										>
											{post.title}
										</h2>

										<!-- Post Excerpt -->
										{#if post.summary}
											<p class="mb-4 line-clamp-2 text-gray-600">
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
											<div class="flex items-center space-x-2">
												{#if typeof post.author === 'object' && post.author?.image}
													<img
														src={getAvatarUrl(post.author.image, 20)}
														alt={getAuthorName(post.author)}
														class="h-5 w-5 rounded-full object-cover"
														loading="lazy"
													/>
												{:else}
													<div
														class="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
													>
														<span class="text-xs font-semibold text-white"
															>{getAuthorInitials(post.author)}</span
														>
													</div>
												{/if}
												<span>{getAuthorName(post.author)}</span>
											</div>
										</div>
									</div>
								</div>
							</a>
						</article>
					{/each}
				</div>
			{/if}
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

	/* Masonry layout improvements */
	.break-inside-avoid {
		break-inside: avoid;
		page-break-inside: avoid;
	}

	/* Ensure proper spacing in masonry layout */
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
</style>
