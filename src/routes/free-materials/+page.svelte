<script>
	import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
	<title>Free Materials - AlphaBits</title>
	<meta
		name="description"
		content="Access free AI tools, productivity tips, NodeRED learning materials, and other valuable resources to boost your business efficiency."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100"
>
	<div class="absolute inset-0 bg-white/30"></div>

	<!-- Main Hero Content -->
	<div class="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-6xl text-center">
			<!-- Hero Icon -->
			<div class="mb-8 flex justify-center">
				<div
					class="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600"
				>
					<svg
						class="h-16 w-16 text-blue-700"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						></path>
					</svg>
				</div>
			</div>

			<!-- Hero Text -->
			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
				Learning Materials &
				<span class="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-gray-700">
					AI Tools
				</span>
			</h1>

			<p class="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				Access our comprehensive collection of free tools, guides, and learning materials to
				accelerate your business transformation journey.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="#resources"
					class="transform rounded-lg bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700"
				>
					Explore Resources
				</a>
				<a
					href="/contact"
					class="rounded-lg border-2 border-gray-400 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-400 hover:text-white"
				>
					Get Support
				</a>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
		<svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
</section>

<!-- Resources Grid Section -->
<section id="resources" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Free Resources & Tools</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-600">
				Everything you need to get started with AI workflow automation and business transformation.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- AI Tools -->
			<div
				class="transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
					<svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">AI Tools Collection</h3>
				<p class="mb-6 text-gray-600">
					Curated list of the best AI tools for productivity, automation, and business optimization.
				</p>
				<a
					href="/resources/ai-tools"
					class="inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-blue-700"
				>
					Explore Tools
					<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>

			<!-- Productivity Tips -->
			<div
				class="transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
					<svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Productivity Tips</h3>
				<p class="mb-6 text-gray-600">
					Expert strategies and actionable tips to boost your team's productivity and efficiency.
				</p>
				<a
					href="/resources/productivity-tips"
					class="inline-flex items-center font-semibold text-green-600 transition-colors hover:text-green-700"
				>
					Learn More
					<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>

			<!-- NodeRED Learning -->
			<div
				class="transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
					<svg class="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">NodeRED Learning</h3>
				<p class="mb-6 text-gray-600">
					Comprehensive guides and tutorials for mastering NodeRED workflow automation.
				</p>
				<a
					href="/resources/nodered-learning"
					class="inline-flex items-center font-semibold text-red-600 transition-colors hover:text-red-700"
				>
					Start Learning
					<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>

			<!-- Quick Assessment -->
			<div
				class="transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100">
					<svg
						class="h-8 w-8 text-purple-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Quick Assessment</h3>
				<p class="mb-6 text-gray-600">
					Free business assessment to identify automation opportunities and optimization areas.
				</p>
				<a
					href="/quick-assessment"
					class="inline-flex items-center font-semibold text-purple-600 transition-colors hover:text-purple-700"
				>
					Take Assessment
					<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>

			<!-- Case Studies -->
			<div
				class="transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-100">
					<svg
						class="h-8 w-8 text-indigo-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Case Studies</h3>
				<p class="mb-6 text-gray-600">
					Real-world examples of successful AI workflow implementations and business
					transformations.
				</p>
				<a
					href="/case-studies"
					class="inline-flex items-center font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
				>
					View Studies
					<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>

			<!-- Blog & Insights -->
			<div
				class="transform rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
			>
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100">
					<svg
						class="h-8 w-8 text-yellow-600"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Blog & Insights</h3>
				<p class="mb-6 text-gray-600">
					Latest insights, trends, and best practices in AI, automation, and digital transformation.
				</p>
				<a
					href="/blog"
					class="inline-flex items-center font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
				>
					Read Blog
					<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Newsletter Section -->
<section class="bg-gray-50 py-20">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<div class="rounded-2xl bg-white p-12 shadow-xl">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Stay Updated</h2>
			<p class="mb-8 text-xl text-gray-600">
				Get the latest free resources, tools, and insights delivered to your inbox.
			</p>
			<div class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
				<input
					type="email"
					placeholder="Enter your email"
					class="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
				/>
				<button
					class="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
				>
					Subscribe
				</button>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<CTA />
