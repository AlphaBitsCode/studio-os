<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import CategoryNavigation from '$lib/components/CategoryNavigation.svelte';
	import {
		formatDate,
		calculateReadTime,
		getImageUrl,
		getAvatarUrl,
		getAuthorName,
		getAuthorInitials,
		getCategoryIconPath
	} from '$lib/utils/blog-helpers';
	import type { PageData } from './$types';

	export let data: PageData;

	let mounted = false;

	// Use server-side data
	$: ({ categories, blogPostsByCategory, loading, error } = data);

	// Tech words for random display
	const techWords = [
		'Bits',
		'Bytes',
		'API',
		'SaaS',
		'A.I',
		'Data',
		'Code',
		'IoT',
		'DX',
		'React',
		'GCP',
		'Docker',
		'NodeRED',
		'DB',
		'SQL',
		'GraphQL',
		'Rust'
	];

	function getRandomWords(arr: string[], count: number) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	}

	$: randomTechWords = getRandomWords(techWords, 5).join(', ');

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Tech Hotpot - AlphaBits Technology Hub | Latest Tech Insights & Tutorials</title>
	<meta
		name="description"
		content="Explore cutting-edge technology insights, AI developments, IoT innovations, and digital transformation strategies with AlphaBits Tech Hotpot. Expert tutorials, industry analysis, and practical guides for developers and tech leaders."
	/>
	<meta
		name="keywords"
		content="technology blog, AI, IoT, digital transformation, software development, tech tutorials, AlphaBits, programming, automation, data analytics"
	/>
	<meta name="author" content="AlphaBits Team" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://alphabits.team/tech-hotpot" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Tech Hotpot - AlphaBits Technology Hub" />
	<meta
		property="og:description"
		content="Explore cutting-edge technology insights, AI developments, IoT innovations, and digital transformation strategies with AlphaBits Tech Hotpot."
	/>
	<meta property="og:image" content="https://alphabits.team/logos/logo_square.png" />
	<meta property="og:url" content="https://alphabits.team/tech-hotpot" />
	<meta property="og:site_name" content="AlphaBits" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Tech Hotpot - AlphaBits Technology Hub" />
	<meta
		name="twitter:description"
		content="Explore cutting-edge technology insights, AI developments, IoT innovations, and digital transformation strategies."
	/>
	<meta name="twitter:image" content="https://alphabits.team/logos/logo_square.png" />

	<!-- Additional SEO -->
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Schema.org structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Blog",
			"name": "Tech Hotpot",
			"description": "AlphaBits Technology Hub featuring the latest insights in AI, IoT, and digital transformation",
			"url": "https://alphabits.team/tech-hotpot",
			"publisher": {
				"@type": "Organization",
				"name": "AlphaBits",
				"url": "https://alphabits.team",
				"logo": {
					"@type": "ImageObject",
					"url": "https://alphabits.team/logos/logo_square.png"
				}
			},
			"mainEntityOfPage": {
				"@type": "WebPage",
				"@id": "https://alphabits.team/tech-hotpot"
			}
		}
	</script>
</svelte:head>

<!-- Animated Background -->
<div class="fixed inset-0 -z-10 overflow-hidden">
	<div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
	<!-- Floating particles -->
	<div class="absolute inset-0">
		{#each Array(20) as _, i}
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

<!-- Header -->
<header class="relative z-10 py-8">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<div class="mb-4 flex items-center justify-center space-x-4">
			<!-- Tech Hotpot Logo - Intricate Design -->
			<div class="relative">
				<svg class="h-20 w-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
					<!-- Gradient Definitions -->
					<defs>
						<linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
							<stop offset="50%" style="stop-color:#f7931e;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#ff4500;stop-opacity:1" />
						</linearGradient>
						<linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
							<stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.8" />
							<stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6" />
							<stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:0.4" />
						</linearGradient>
						<radialGradient id="circuitGlow" cx="50%" cy="50%" r="50%">
							<stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8" />
							<stop offset="100%" style="stop-color:#059669;stop-opacity:0.3" />
						</radialGradient>
					</defs>

					<!-- Pot Shadow -->
					<ellipse cx="50" cy="85" rx="25" ry="4" fill="#000000" opacity="0.2" />

					<!-- Main Pot Body -->
					<path
						d="M20 45 L80 45 L78 75 C78 78 75 80 72 80 L28 80 C25 80 22 78 22 75 Z"
						fill="url(#potGradient)"
						stroke="#d97706"
						stroke-width="1.5"
					/>

					<!-- Pot Rim -->
					<ellipse
						cx="50"
						cy="45"
						rx="30"
						ry="3"
						fill="#ea580c"
						stroke="#9a3412"
						stroke-width="1"
					/>

					<!-- Left Handle -->
					<path
						d="M15 40 C12 40 10 42 10 45 C10 48 12 50 15 50 L20 50 L20 45 L20 40 Z"
						fill="#92400e"
						stroke="#451a03"
						stroke-width="1.5"
					/>

					<!-- Right Handle -->
					<path
						d="M85 40 C88 40 90 42 90 45 C90 48 88 50 85 50 L80 50 L80 45 L80 40 Z"
						fill="#92400e"
						stroke="#451a03"
						stroke-width="1.5"
					/>

					<!-- Tech Circuit Pattern Inside Pot -->
					<g opacity="0.6">
						<!-- Circuit Board Lines -->
						<path
							d="M30 55 L35 55 L35 60 L40 60"
							stroke="url(#circuitGlow)"
							stroke-width="2"
							fill="none"
						/>
						<path
							d="M60 55 L65 55 L65 60 L70 60"
							stroke="url(#circuitGlow)"
							stroke-width="2"
							fill="none"
						/>
						<path d="M45 65 L55 65" stroke="url(#circuitGlow)" stroke-width="2" fill="none" />

						<!-- Circuit Nodes -->
						<circle cx="35" cy="55" r="2" fill="#10b981" />
						<circle cx="40" cy="60" r="2" fill="#10b981" />
						<circle cx="65" cy="55" r="2" fill="#10b981" />
						<circle cx="70" cy="60" r="2" fill="#10b981" />
						<circle cx="50" cy="65" r="2" fill="#10b981" />

						<!-- Microchip Symbol -->
						<rect
							x="47"
							y="57"
							width="6"
							height="6"
							fill="#374151"
							stroke="#10b981"
							stroke-width="1"
						/>
						<rect x="48.5" y="58.5" width="3" height="3" fill="#10b981" />
					</g>

					<!-- Steam/Data Streams -->
					<g class="animate-pulse">
						<!-- Left Steam -->
						<path
							d="M35 40 Q37 35 35 30 Q33 25 35 20 Q37 15 35 10"
							stroke="url(#steamGradient)"
							stroke-width="2.5"
							fill="none"
							class="animate-bounce"
							style="animation-delay: 0s"
						/>

						<!-- Center Steam -->
						<path
							d="M50 40 Q52 35 50 30 Q48 25 50 20 Q52 15 50 10"
							stroke="url(#steamGradient)"
							stroke-width="3"
							fill="none"
							class="animate-bounce"
							style="animation-delay: 0.3s"
						/>

						<!-- Right Steam -->
						<path
							d="M65 40 Q67 35 65 30 Q63 25 65 20 Q67 15 65 10"
							stroke="url(#steamGradient)"
							stroke-width="2.5"
							fill="none"
							class="animate-bounce"
							style="animation-delay: 0.6s"
						/>
					</g>

					<!-- Digital Particles -->
					<g class="animate-ping" style="animation-delay: 1s">
						<circle cx="42" cy="25" r="1" fill="#3b82f6" opacity="0.8" />
						<circle cx="58" cy="18" r="1" fill="#10b981" opacity="0.8" />
						<circle cx="48" cy="12" r="1" fill="#f59e0b" opacity="0.8" />
					</g>

					<!-- Binary Code Floating -->
					<g class="animate-pulse" style="animation-delay: 0.5s">
						<text x="25" y="15" font-family="monospace" font-size="4" fill="#6b7280" opacity="0.7"
							>101</text
						>
						<text x="70" y="25" font-family="monospace" font-size="4" fill="#6b7280" opacity="0.7"
							>010</text
						>
						<text x="55" y="8" font-family="monospace" font-size="4" fill="#6b7280" opacity="0.7"
							>110</text
						>
					</g>

					<!-- Pot Lid (Optional Tech Element) -->
					<ellipse cx="50" cy="42" rx="28" ry="2" fill="#dc2626" opacity="0.3" />
				</svg>
			</div>
			<h1 class="text-5xl font-bold text-orange-600 md:text-6xl">TECH HOTPOT</h1>
		</div>

		<p class="mx-auto max-w-2xl text-xl text-gray-600">
			{randomTechWords}
		</p>
	</div>
</header>

<!-- Sticky Category Navigation -->
<nav class="sticky top-14 z-40 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md">
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
		<div class="flex items-center justify-between py-3 sm:justify-center">
			<CategoryNavigation {categories} />
		</div>
	</div>
</nav>

<!-- Hero Section -->
<section class="relative py-8"></section>

<!-- Latest Blog Posts Section -->
<section class="bg-white/50 pb-16 backdrop-blur-sm">
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
					href="/tech-hotpot"
					class="mt-4 inline-block rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-600"
				>
					Refresh Page
				</a>
			</div>
		{:else}
			<!-- Blog Posts Grid by Category - 5 Columns Layout -->
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				{#each categories as category, categoryIndex}
					{@const categoryPosts = blogPostsByCategory[category.title] || []}
					<div
						class="category-column"
						in:fly={{ x: -50, delay: categoryIndex * 100, duration: 600 }}
					>
						<!-- Category Header -->
						<div class="mb-4 flex items-center">
							<div class="mr-2 h-8 w-8">
								<img
									src={getCategoryIconPath(category.title)}
									alt={category.title}
									class="h-full w-full opacity-70"
								/>
							</div>
							<div>
								<h3 class="text-lg font-bold text-gray-800">{category.title}</h3>
							</div>
						</div>

						<!-- Posts in Column (2 posts per category) -->
						<div class="space-y-4">
							{#if categoryPosts.length === 0}
								<!-- Empty category message -->
								<div
									class="rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4 text-center"
								>
									<div class="mb-2 text-gray-400">
										<svg
											class="mx-auto h-8 w-8"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
											></path>
										</svg>
									</div>
									<p class="text-xs text-gray-500">No posts yet</p>
									<p class="mt-1 text-xs text-gray-400">Coming soon!</p>
								</div>
							{:else}
								{#each categoryPosts.slice(0, 2) as post, postIndex}
									<BlogPostCard
										{post}
										viewMode="compact"
										delay={categoryIndex * 100 + postIndex * 50}
									/>
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-12 text-center">
				<a
					href="/tech-hotpot/all"
					class="inline-flex transform items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-600"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path>
					</svg>
					<span>View All Posts</span>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
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
</style>
