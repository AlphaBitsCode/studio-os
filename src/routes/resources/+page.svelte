<script>
	import SEOHead from '$lib/components/SEOHead.svelte';

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'AlphaBits Resources',
		description:
			'Comprehensive resources including frameworks, courses, blog insights, and technical documentation for AI automation and digital transformation',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				item: {
					'@type': 'CreativeWork',
					name: 'SecondBrains Framework',
					url: 'https://alphabits.team/resources/secondbrains-framework',
					description: 'Comprehensive architecture for intelligent automation systems'
				}
			},
			{
				'@type': 'ListItem',
				position: 2,
				item: {
					'@type': 'Course',
					name: 'AI Workflow Automation Courses',
					url: 'https://alphabits.team/resources/courses',
					description: 'Training programs in AI automation, Node-RED, and IoT integration'
				}
			},
			{
				'@type': 'ListItem',
				position: 3,
				item: {
					'@type': 'Blog',
					name: 'Blog & Insights',
					url: 'https://alphabits.team/resources/blog',
					description: 'Latest insights and tutorials on AI automation and digital transformation'
				}
			}
		]
	};
</script>

<SEOHead
	title="Resources - AlphaBits | AI Automation Frameworks, Courses & Technical Documentation"
	description="Access our comprehensive resources including the SecondBrains Framework, AI workflow automation courses, blog insights, and technical documentation. Free learning materials for business automation."
	keywords="AI automation resources, SecondBrains Framework, Node-RED courses, automation training, technical documentation, AI learning materials, business automation guides"
	canonicalUrl="https://alphabits.team/resources"
	ogImage="https://alphabits.team/alphabits_cover.png"
	ogType="website"
	{structuredData}
/>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">Resources</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
				Comprehensive resources to help you understand and implement AI workflow automation and
				digital transformation solutions.
			</p>
		</div>
	</div>
</section>

<!-- Featured Resource -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="mb-16 overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg dark:from-gray-800 dark:to-gray-700"
		>
			<div class="grid gap-0 lg:grid-cols-2">
				<div class="p-8 lg:p-12">
					<div
						class="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
					>
						Featured Framework
					</div>
					<h2 class="mb-4 text-3xl font-bold md:text-4xl">SecondBrains Framework</h2>
					<p class="mb-6 text-lg text-gray-600 dark:text-gray-300">
						Our comprehensive framework for building intelligent automation systems. Learn about the
						architecture, technical components, and implementation strategies that power modern AI
						workflow automation.
					</p>

					<div class="mb-6 grid grid-cols-2 gap-4">
						<div>
							<div class="text-2xl font-bold text-blue-600 dark:text-blue-400">v0.0.4</div>
							<div class="text-sm text-gray-600 dark:text-gray-300">Current Version</div>
						</div>
						<div>
							<div class="text-2xl font-bold text-green-600 dark:text-green-400">Node-RED</div>
							<div class="text-sm text-gray-600 dark:text-gray-300">Core Conductor</div>
						</div>
					</div>

					<div class="mb-6 flex flex-wrap gap-2">
						<span
							class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
							>Architecture</span
						>
						<span
							class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200"
							>Implementation</span
						>
						<span
							class="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800 dark:bg-purple-900 dark:text-purple-200"
							>Network Config</span
						>
						<span
							class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800 dark:bg-orange-900 dark:text-orange-200"
							>Technical Docs</span
						>
					</div>

					<a
						href="/resources/secondbrains-framework"
						class="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
					>
						Explore Framework
						<svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</a>
				</div>

				<div
					class="flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-8 lg:p-12"
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
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								></path>
							</svg>
						</div>
						<h3 class="mb-2 text-xl font-bold">Intelligent Framework</h3>
						<p class="text-blue-100">Complete architecture for AI-powered automation systems</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Resources Grid -->
<section class="bg-gray-50 py-16 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">All Resources</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Everything you need to understand, learn, and implement our solutions.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Courses -->
			<div
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div class="bg-gradient-to-br from-green-500 to-green-600 p-6">
					<div
						class="bg-opacity-20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
					>
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">Courses</h3>
				</div>
				<div class="p-6">
					<p class="mb-4 text-gray-600 dark:text-gray-300">
						Comprehensive training programs designed to help you master AI workflow automation and
						related technologies.
					</p>
					<div class="mb-4">
						<h4 class="mb-2 font-semibold">Available Courses:</h4>
						<ul class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
							<li>• AI Workflow Automation Course</li>
							<li>• Node-RED Fundamentals</li>
							<li>• IoT Integration Basics</li>
							<li>• Data Analytics with InfluxDB</li>
						</ul>
					</div>
					<a
						href="/resources/courses"
						class="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-400"
					>
						Browse Courses
						<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</a>
				</div>
			</div>

			<!-- Blog / Insights -->
			<div
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6">
					<div
						class="bg-opacity-20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
					>
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">Blog / Insights</h3>
				</div>
				<div class="p-6">
					<p class="mb-4 text-gray-600 dark:text-gray-300">
						Latest insights, tutorials, and thought leadership articles on AI automation, digital
						transformation, and emerging technologies.
					</p>
					<div class="mb-4">
						<h4 class="mb-2 font-semibold">Recent Topics:</h4>
						<ul class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
							<li>• AI Workflow Best Practices</li>
							<li>• IoT Implementation Strategies</li>
							<li>• Digital Transformation Trends</li>
							<li>• Technology Leadership Insights</li>
						</ul>
					</div>
					<a
						href="/resources/blog"
						class="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-400"
					>
						Read Articles
						<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</a>
				</div>
			</div>

			<!-- Notion Wiki -->
			<div
				class="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-700"
			>
				<div class="bg-gradient-to-br from-orange-500 to-orange-600 p-6">
					<div
						class="bg-opacity-20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white"
					>
						<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							></path>
						</svg>
					</div>
					<h3 class="mb-2 text-xl font-bold text-white">Notion Wiki</h3>
				</div>
				<div class="p-6">
					<p class="mb-4 text-gray-600 dark:text-gray-300">
						Comprehensive technical documentation, guides, and code samples for developers and
						technical teams.
					</p>
					<div class="mb-4">
						<h4 class="mb-2 font-semibold">Documentation Includes:</h4>
						<ul class="space-y-1 text-sm text-gray-500 dark:text-gray-400">
							<li>• Node-RED Implementation Guides</li>
							<li>• Advanced Developer Documentation</li>
							<li>• Code & Workflow Samples</li>
							<li>• Course Materials & Resources</li>
						</ul>
					</div>
					<a
						href="/resources/notion-wiki"
						class="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-400"
					>
						Access Wiki
						<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Quick Access Tools -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Quick Access Tools</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Essential tools and calculators to help you plan and implement your projects.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div
				class="rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900"
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
							d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">ROI Calculator</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Calculate potential returns from automation investments
				</p>
				<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
					>Coming Soon</button
				>
			</div>

			<div
				class="rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900"
				>
					<svg
						class="h-6 w-6 text-green-600 dark:text-green-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Project Planner</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Plan your digital transformation timeline
				</p>
				<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
					>Coming Soon</button
				>
			</div>

			<div
				class="rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900"
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
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Tech Assessment</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Evaluate your current technology stack
				</p>
				<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
					>Coming Soon</button
				>
			</div>

			<div
				class="rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900"
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
				<h3 class="mb-2 text-lg font-semibold">Quick Start Guide</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Get started with automation in 30 minutes
				</p>
				<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
					>Coming Soon</button
				>
			</div>
		</div>
	</div>
</section>

<!-- Newsletter Signup -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Stay Updated</h2>
		<p class="mb-8 text-xl">
			Get the latest resources, insights, and updates delivered to your inbox.
		</p>
		<div class="mx-auto max-w-md">
			<div class="flex flex-col gap-4 sm:flex-row">
				<input
					type="email"
					placeholder="Enter your email"
					class="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
				/>
				<button
					class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
				>
					Subscribe
				</button>
			</div>
			<p class="mt-3 text-sm text-blue-100">
				No spam, unsubscribe at any time. We respect your privacy.
			</p>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Need Personalized Guidance?</h2>
		<p class="mb-8 text-xl text-gray-600 dark:text-gray-300">
			Our experts are here to help you navigate your digital transformation journey.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/quick-assessment"
				class="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
			>
				Schedule a Consultation
			</a>
			<a
				href="/quick-assessment"
				class="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white dark:text-blue-400"
			>
				Explore Our Services
			</a>
		</div>
	</div>
</section>
