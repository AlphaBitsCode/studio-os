<script>
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'AlphaBits Blog & Insights',
		description:
			'Latest insights, tutorials, and thought leadership articles on AI automation, digital transformation, and emerging technologies',
		url: 'https://alphabits.team/resources/blog',
		publisher: {
			'@type': 'Organization',
			name: 'AlphaBits',
			logo: {
				'@type': 'ImageObject',
				url: 'https://alphabits.team/logos/logo_square.png'
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': 'https://alphabits.team/resources/blog'
		}
	};
</script>

<SEOHead
	title="Blog & Insights - AlphaBits Resources | AI Automation & Digital Transformation Articles"
	description="Latest insights, tutorials, and thought leadership articles on AI automation, digital transformation, and emerging technologies from AlphaBits experts. Learn from real-world implementations."
	keywords="AI automation blog, digital transformation insights, Node-RED tutorials, IoT articles, business automation guides, technology thought leadership, AI implementation tips"
	canonicalUrl="https://alphabits.team/resources/blog"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="website"
	{structuredData}
/>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-purple-600 via-pink-600 to-red-800 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">Blog & Insights</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
				Latest insights, tutorials, and thought leadership on AI automation, digital transformation,
				and emerging technologies.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="#featured"
					class="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
				>
					Featured Articles
				</a>
				<a
					href="#subscribe"
					class="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
				>
					Subscribe to Updates
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Featured Article -->
<section id="featured" class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="mb-16 overflow-hidden rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg dark:from-gray-800 dark:to-gray-700"
		>
			<div class="grid gap-0 lg:grid-cols-2">
				<div class="p-8 lg:p-12">
					<div
						class="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
					>
						Featured Article
					</div>
					<h2 class="mb-4 text-3xl font-bold md:text-4xl">
						The Future of AI Workflow Automation: 2024 Trends and Predictions
					</h2>
					<p class="mb-6 text-lg text-gray-600 dark:text-gray-300">
						Explore the latest trends in AI workflow automation and discover how emerging
						technologies are reshaping business operations across industries.
					</p>

					<div class="mb-6 flex items-center space-x-4">
						<div class="flex items-center space-x-2">
							<div class="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
								<span class="text-sm font-bold text-white">AB</span>
							</div>
							<span class="text-sm text-gray-600 dark:text-gray-300">AlphaBits Team</span>
						</div>
						<span class="text-sm text-gray-500 dark:text-gray-400">•</span>
						<span class="text-sm text-gray-500 dark:text-gray-400">March 15, 2024</span>
						<span class="text-sm text-gray-500 dark:text-gray-400">•</span>
						<span class="text-sm text-gray-500 dark:text-gray-400">8 min read</span>
					</div>

					<div class="mb-6 flex flex-wrap gap-2">
						<span
							class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900 dark:text-purple-200"
							>AI Trends</span
						>
						<span
							class="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-800 dark:bg-pink-900 dark:text-pink-200"
							>Automation</span
						>
						<span
							class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800 dark:bg-red-900 dark:text-red-200"
							>Future Tech</span
						>
					</div>

					<button
						class="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
					>
						Read Full Article
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>
				</div>

				<div
					class="flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 p-8 lg:p-12"
				>
					<div class="text-center text-white">
						<div
							class="bg-opacity-20 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white"
						>
							<svg class="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						</div>
						<h3 class="mb-2 text-xl font-bold">Trending Insights</h3>
						<p class="text-purple-100">Stay ahead with the latest AI and automation trends</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Article Categories -->
<section class="bg-gray-50 py-16 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Article Categories</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Explore our comprehensive collection of articles organized by topic.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- AI Workflow Best Practices -->
			<div
				class="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900"
				>
					<svg
						class="h-6 w-6 text-purple-600 dark:text-purple-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-lg font-semibold">AI Workflow Best Practices</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Expert guidance on implementing and optimizing AI-powered automation workflows.
				</p>
				<div class="mb-3 text-sm text-gray-500 dark:text-gray-400">12 articles</div>
				<button class="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400">
					Browse Articles →
				</button>
			</div>

			<!-- IoT Implementation Strategies -->
			<div
				class="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900"
				>
					<svg
						class="h-6 w-6 text-teal-600 dark:text-teal-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-lg font-semibold">IoT Implementation Strategies</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Practical guides for deploying and managing IoT infrastructure in business environments.
				</p>
				<div class="mb-3 text-sm text-gray-500 dark:text-gray-400">8 articles</div>
				<button class="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400">
					Browse Articles →
				</button>
			</div>

			<!-- Digital Transformation Trends -->
			<div
				class="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900"
				>
					<svg
						class="h-6 w-6 text-orange-600 dark:text-orange-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-lg font-semibold">Digital Transformation Trends</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Insights on the latest trends and technologies shaping digital transformation.
				</p>
				<div class="mb-3 text-sm text-gray-500 dark:text-gray-400">15 articles</div>
				<button class="text-sm font-medium text-orange-600 hover:underline dark:text-orange-400">
					Browse Articles →
				</button>
			</div>

			<!-- Technology Leadership Insights -->
			<div
				class="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900"
				>
					<svg
						class="h-6 w-6 text-blue-600 dark:text-blue-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-lg font-semibold">Technology Leadership Insights</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Strategic perspectives on technology leadership and organizational transformation.
				</p>
				<div class="mb-3 text-sm text-gray-500 dark:text-gray-400">10 articles</div>
				<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
					Browse Articles →
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Recent Articles -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Recent Articles</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Stay up-to-date with our latest insights and tutorials.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Article 1 -->
			<article
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="flex h-48 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<div class="p-6">
					<div class="mb-3 flex items-center space-x-2">
						<span
							class="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
							>AI Automation</span
						>
						<span class="text-xs text-gray-500 dark:text-gray-400">March 10, 2024</span>
					</div>
					<h3 class="mb-3 text-lg font-semibold">
						Building Intelligent Customer Support Workflows
					</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
						Learn how to create AI-powered customer support systems that automatically route
						tickets, generate responses, and escalate complex issues.
					</p>
					<div class="flex items-center justify-between">
						<span class="text-xs text-gray-500 dark:text-gray-400">6 min read</span>
						<button
							class="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400"
						>
							Read More →
						</button>
					</div>
				</div>
			</article>

			<!-- Article 2 -->
			<article
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="flex h-48 items-center justify-center bg-gradient-to-r from-teal-500 to-blue-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
						></path>
					</svg>
				</div>
				<div class="p-6">
					<div class="mb-3 flex items-center space-x-2">
						<span
							class="rounded bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900 dark:text-teal-200"
							>IoT</span
						>
						<span class="text-xs text-gray-500 dark:text-gray-400">March 8, 2024</span>
					</div>
					<h3 class="mb-3 text-lg font-semibold">
						IoT Security Best Practices for Enterprise Deployments
					</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
						Essential security considerations and implementation strategies for large-scale IoT
						infrastructure deployments.
					</p>
					<div class="flex items-center justify-between">
						<span class="text-xs text-gray-500 dark:text-gray-400">8 min read</span>
						<button class="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400">
							Read More →
						</button>
					</div>
				</div>
			</article>

			<!-- Article 3 -->
			<article
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="flex h-48 items-center justify-center bg-gradient-to-r from-orange-500 to-red-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						></path>
					</svg>
				</div>
				<div class="p-6">
					<div class="mb-3 flex items-center space-x-2">
						<span
							class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200"
							>Data Analytics</span
						>
						<span class="text-xs text-gray-500 dark:text-gray-400">March 5, 2024</span>
					</div>
					<h3 class="mb-3 text-lg font-semibold">
						Optimizing InfluxDB Performance for Time-Series Data
					</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
						Advanced techniques for optimizing InfluxDB performance, including schema design, query
						optimization, and resource management.
					</p>
					<div class="flex items-center justify-between">
						<span class="text-xs text-gray-500 dark:text-gray-400">10 min read</span>
						<button
							class="text-sm font-medium text-orange-600 hover:underline dark:text-orange-400"
						>
							Read More →
						</button>
					</div>
				</div>
			</article>

			<!-- Article 4 -->
			<article
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="flex h-48 items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
				</div>
				<div class="p-6">
					<div class="mb-3 flex items-center space-x-2">
						<span
							class="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
							>Leadership</span
						>
						<span class="text-xs text-gray-500 dark:text-gray-400">March 3, 2024</span>
					</div>
					<h3 class="mb-3 text-lg font-semibold">
						The Fractional CTO Model: When and Why It Works
					</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
						Exploring the benefits and challenges of the fractional CTO model for growing companies
						and established enterprises.
					</p>
					<div class="flex items-center justify-between">
						<span class="text-xs text-gray-500 dark:text-gray-400">7 min read</span>
						<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
							Read More →
						</button>
					</div>
				</div>
			</article>

			<!-- Article 5 -->
			<article
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="flex h-48 items-center justify-center bg-gradient-to-r from-green-500 to-teal-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						></path>
					</svg>
				</div>
				<div class="p-6">
					<div class="mb-3 flex items-center space-x-2">
						<span
							class="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200"
							>Node-RED</span
						>
						<span class="text-xs text-gray-500 dark:text-gray-400">March 1, 2024</span>
					</div>
					<h3 class="mb-3 text-lg font-semibold">
						Advanced Node-RED Patterns for Enterprise Workflows
					</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
						Discover advanced Node-RED patterns and best practices for building robust, scalable
						enterprise automation workflows.
					</p>
					<div class="flex items-center justify-between">
						<span class="text-xs text-gray-500 dark:text-gray-400">12 min read</span>
						<button class="text-sm font-medium text-green-600 hover:underline dark:text-green-400">
							Read More →
						</button>
					</div>
				</div>
			</article>

			<!-- Article 6 -->
			<article
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="flex h-48 items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<div class="p-6">
					<div class="mb-3 flex items-center space-x-2">
						<span
							class="rounded bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-200"
							>Digital Transformation</span
						>
						<span class="text-xs text-gray-500 dark:text-gray-400">February 28, 2024</span>
					</div>
					<h3 class="mb-3 text-lg font-semibold">Legacy System Migration: A Step-by-Step Guide</h3>
					<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
						Comprehensive guide to planning and executing legacy system migrations with minimal
						business disruption.
					</p>
					<div class="flex items-center justify-between">
						<span class="text-xs text-gray-500 dark:text-gray-400">15 min read</span>
						<button class="text-sm font-medium text-pink-600 hover:underline dark:text-pink-400">
							Read More →
						</button>
					</div>
				</div>
			</article>
		</div>

		<div class="mt-12 text-center">
			<button
				class="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
			>
				Load More Articles
			</button>
		</div>
	</div>
</section>

<!-- Newsletter Signup -->
<section id="subscribe" class="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Stay Updated with Our Latest Insights</h2>
		<p class="mb-8 text-xl">
			Subscribe to our newsletter and never miss the latest articles, tutorials, and industry
			insights.
		</p>
		<div class="mx-auto max-w-md">
			<div class="flex flex-col gap-4 sm:flex-row">
				<input
					type="email"
					placeholder="Enter your email address"
					class="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
				/>
				<button
					class="rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 transition-colors hover:bg-gray-100"
				>
					Subscribe
				</button>
			</div>
			<p class="mt-3 text-sm text-purple-100">Weekly insights • No spam • Unsubscribe anytime</p>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Ready to Implement These Insights?</h2>
		<p class="mb-8 text-xl text-gray-600 dark:text-gray-300">
			Let our experts help you apply these concepts to transform your business operations.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
			>
				Schedule Consultation
			</a>
			<a
				href="/services"
				class="rounded-lg border-2 border-purple-600 px-8 py-3 font-semibold text-purple-600 transition-colors hover:bg-purple-600 hover:text-white dark:text-purple-400"
			>
				Explore Our Services
			</a>
		</div>
	</div>
</section>
