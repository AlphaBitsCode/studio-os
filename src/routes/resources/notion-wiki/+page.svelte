<svelte:head>
	<title>Notion Wiki - AlphaBits Resources</title>
	<meta
		name="description"
		content="Comprehensive technical documentation, Node-RED guides, course materials, advanced developer documentation, and code/workflow samples in our Notion Wiki."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-gray-600 via-blue-600 to-indigo-800 py-16 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="mb-6 text-4xl font-bold md:text-5xl">Notion Wiki</h1>
			<p class="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">
				Comprehensive technical documentation, guides, and code samples for developers and technical
				teams.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="#documentation"
					class="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
				>
					Browse Documentation
				</a>
				<a
					href="#access"
					class="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
				>
					Request Access
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Wiki Overview -->
<section class="py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">Comprehensive Technical Knowledge Base</h2>
				<p class="mb-6 text-lg text-gray-600 dark:text-gray-300">
					Our Notion Wiki serves as the central repository for all technical documentation,
					implementation guides, code samples, and best practices. It's designed to be your go-to
					resource for understanding and implementing our solutions.
				</p>
				<p class="mb-8 text-lg text-gray-600 dark:text-gray-300">
					From beginner-friendly tutorials to advanced developer documentation, our wiki covers
					everything you need to successfully deploy and maintain AI workflow automation systems.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-gray-600 dark:text-gray-400">200+</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Documentation Pages</div>
					</div>
					<div class="text-center">
						<div class="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
						<div class="text-sm text-gray-600 dark:text-gray-300">Code Samples</div>
					</div>
				</div>
			</div>

			<div
				class="rounded-lg bg-gradient-to-br from-gray-50 to-blue-50 p-8 dark:from-gray-800 dark:to-gray-700"
			>
				<h3 class="mb-6 text-2xl font-bold">Wiki Features</h3>
				<div class="space-y-4">
					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Searchable Content</h4>
							<p class="text-sm text-gray-600 dark:text-gray-300">
								Powerful search functionality to find exactly what you need
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Interactive Examples</h4>
							<p class="text-sm text-gray-600 dark:text-gray-300">
								Live code examples and interactive demonstrations
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Regular Updates</h4>
							<p class="text-sm text-gray-600 dark:text-gray-300">
								Continuously updated with latest best practices and solutions
							</p>
						</div>
					</div>

					<div class="flex items-start space-x-3">
						<div
							class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-600"
						>
							<svg class="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								></path>
							</svg>
						</div>
						<div>
							<h4 class="mb-1 font-semibold">Community Contributions</h4>
							<p class="text-sm text-gray-600 dark:text-gray-300">
								Collaborative platform for sharing knowledge and solutions
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Documentation Sections -->
<section id="documentation" class="bg-gray-50 py-16 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Documentation Sections</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Organized documentation covering all aspects of our technology stack and solutions.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			<!-- Node-RED Implementation Guides -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900"
				>
					<svg
						class="h-6 w-6 text-red-600 dark:text-red-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Node-RED Implementation Guides</h3>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					Comprehensive guides for implementing Node-RED workflows, from basic concepts to advanced
					enterprise patterns.
				</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
					<li>• Getting Started with Node-RED</li>
					<li>• Custom Node Development</li>
					<li>• Enterprise Deployment Patterns</li>
					<li>• Performance Optimization</li>
					<li>• Security Best Practices</li>
					<li>• Troubleshooting Common Issues</li>
				</ul>
				<div class="flex items-center justify-between">
					<span class="text-sm text-gray-500 dark:text-gray-400">45+ guides</span>
					<button class="font-medium text-red-600 hover:underline dark:text-red-400">
						Browse Guides →
					</button>
				</div>
			</div>

			<!-- Advanced Developer Documentation -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
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
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Advanced Developer Documentation</h3>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					In-depth technical documentation for developers working with our frameworks and APIs.
				</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
					<li>• API Reference Documentation</li>
					<li>• SDK Integration Guides</li>
					<li>• Architecture Deep Dives</li>
					<li>• Database Schema Documentation</li>
					<li>• Testing and Quality Assurance</li>
					<li>• Deployment and DevOps</li>
				</ul>
				<div class="flex items-center justify-between">
					<span class="text-sm text-gray-500 dark:text-gray-400">60+ documents</span>
					<button class="font-medium text-blue-600 hover:underline dark:text-blue-400">
						Browse Documentation →
					</button>
				</div>
			</div>

			<!-- Code & Workflow Samples -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900"
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
							d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Code & Workflow Samples</h3>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					Ready-to-use code samples, workflow templates, and implementation examples for common use
					cases.
				</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
					<li>• Node-RED Flow Templates</li>
					<li>• AI Agent Implementation Examples</li>
					<li>• IoT Integration Samples</li>
					<li>• Data Processing Workflows</li>
					<li>• Dashboard and UI Components</li>
					<li>• Integration Code Snippets</li>
				</ul>
				<div class="flex items-center justify-between">
					<span class="text-sm text-gray-500 dark:text-gray-400">80+ samples</span>
					<button class="font-medium text-green-600 hover:underline dark:text-green-400">
						Browse Samples →
					</button>
				</div>
			</div>

			<!-- Course Materials & Resources -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
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
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						></path>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-semibold">Course Materials & Resources</h3>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					Supplementary materials, exercises, and resources for our training courses and workshops.
				</p>
				<ul class="mb-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
					<li>• Course Slides and Presentations</li>
					<li>• Hands-on Lab Exercises</li>
					<li>• Project Templates and Starters</li>
					<li>• Assessment and Quiz Materials</li>
					<li>• Additional Reading Resources</li>
					<li>• Video Tutorials and Recordings</li>
				</ul>
				<div class="flex items-center justify-between">
					<span class="text-sm text-gray-500 dark:text-gray-400">25+ resources</span>
					<button class="font-medium text-purple-600 hover:underline dark:text-purple-400">
						Browse Resources →
					</button>
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
				Essential tools and utilities to help you navigate and utilize our documentation
				effectively.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Search Documentation -->
			<div
				class="rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
			>
				<div
					class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
				>
					<svg
						class="h-6 w-6 text-gray-600 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Search Documentation</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Find specific guides, code samples, and solutions quickly
				</p>
				<button class="text-sm font-medium text-gray-600 hover:underline dark:text-gray-400">
					Open Search
				</button>
			</div>

			<!-- Getting Started Guide -->
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
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Getting Started Guide</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					New to our platform? Start with the basics
				</p>
				<button class="text-sm font-medium text-green-600 hover:underline dark:text-green-400">
					Start Here
				</button>
			</div>

			<!-- API Reference -->
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
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">API Reference</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Complete API documentation and examples
				</p>
				<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
					View APIs
				</button>
			</div>

			<!-- Community Forum -->
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
							d="17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
						></path>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold">Community Forum</h3>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Ask questions and share knowledge with the community
				</p>
				<button class="text-sm font-medium text-purple-600 hover:underline dark:text-purple-400">
					Join Discussion
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Popular Resources -->
<section class="bg-gray-50 py-16 dark:bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold md:text-4xl">Popular Resources</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
				Most accessed and highly rated documentation and resources.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Resource 1 -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold">Node-RED Quick Start Guide</h3>
					<span
						class="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200"
						>Popular</span
					>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Get up and running with Node-RED in 30 minutes. Complete setup guide with examples.
				</p>
				<div class="flex items-center justify-between">
					<span class="text-xs text-gray-500 dark:text-gray-400">Updated 2 days ago</span>
					<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
						View Guide →
					</button>
				</div>
			</div>

			<!-- Resource 2 -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold">AI Agent Implementation Template</h3>
					<span
						class="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
						>Template</span
					>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Ready-to-use template for building intelligent AI agents with decision-making
					capabilities.
				</p>
				<div class="flex items-center justify-between">
					<span class="text-xs text-gray-500 dark:text-gray-400">Updated 1 week ago</span>
					<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
						Download Template →
					</button>
				</div>
			</div>

			<!-- Resource 3 -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold">IoT Device Integration Cookbook</h3>
					<span
						class="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200"
						>Guide</span
					>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Step-by-step recipes for integrating various IoT devices and sensors with your workflows.
				</p>
				<div class="flex items-center justify-between">
					<span class="text-xs text-gray-500 dark:text-gray-400">Updated 3 days ago</span>
					<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
						View Cookbook →
					</button>
				</div>
			</div>

			<!-- Resource 4 -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold">Enterprise Security Best Practices</h3>
					<span
						class="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200"
						>Security</span
					>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Comprehensive security guidelines for enterprise automation deployments.
				</p>
				<div class="flex items-center justify-between">
					<span class="text-xs text-gray-500 dark:text-gray-400">Updated 5 days ago</span>
					<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
						Read Guide →
					</button>
				</div>
			</div>

			<!-- Resource 5 -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold">Performance Optimization Checklist</h3>
					<span
						class="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200"
						>Checklist</span
					>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Essential checklist for optimizing the performance of your automation workflows.
				</p>
				<div class="flex items-center justify-between">
					<span class="text-xs text-gray-500 dark:text-gray-400">Updated 1 week ago</span>
					<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
						View Checklist →
					</button>
				</div>
			</div>

			<!-- Resource 6 -->
			<div class="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-700">
				<div class="mb-4 flex items-center justify-between">
					<h3 class="text-lg font-semibold">Troubleshooting Common Issues</h3>
					<span
						class="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
						>FAQ</span
					>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
					Solutions to the most common issues and error messages you might encounter.
				</p>
				<div class="flex items-center justify-between">
					<span class="text-xs text-gray-500 dark:text-gray-400">Updated 4 days ago</span>
					<button class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
						View Solutions →
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Access Request -->
<section id="access" class="py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div
			class="rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 p-8 dark:from-gray-800 dark:to-gray-700"
		>
			<div class="mb-8 text-center">
				<h2 class="mb-4 text-3xl font-bold">Request Wiki Access</h2>
				<p class="text-lg text-gray-600 dark:text-gray-300">
					Get full access to our comprehensive Notion Wiki with detailed documentation, code
					samples, and exclusive resources.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Access Levels -->
				<div>
					<h3 class="mb-4 text-xl font-semibold">Access Levels</h3>
					<div class="space-y-4">
						<div class="flex items-start space-x-3">
							<div
								class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600"
							>
								<svg
									class="h-3 w-3 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold">Public Access</h4>
								<p class="text-sm text-gray-600 dark:text-gray-300">
									Basic guides and getting started documentation
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div
								class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-600"
							>
								<svg
									class="h-3 w-3 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold">Developer Access</h4>
								<p class="text-sm text-gray-600 dark:text-gray-300">
									Advanced documentation, API references, and code samples
								</p>
							</div>
						</div>

						<div class="flex items-start space-x-3">
							<div
								class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600"
							>
								<svg
									class="h-3 w-3 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
							</div>
							<div>
								<h4 class="font-semibold">Enterprise Access</h4>
								<p class="text-sm text-gray-600 dark:text-gray-300">
									Full access including enterprise patterns and exclusive resources
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Request Form -->
				<div>
					<h3 class="mb-4 text-xl font-semibold">Request Access</h3>
					<form class="space-y-4">
						<div>
							<label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
								>Full Name</label
							>
							<input
								type="text"
								class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
								placeholder="Your full name"
							/>
						</div>

						<div>
							<label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
								>Email Address</label
							>
							<input
								type="email"
								class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
								placeholder="your.email@company.com"
							/>
						</div>

						<div>
							<label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
								>Access Level</label
							>
							<select
								class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
							>
								<option>Developer Access</option>
								<option>Enterprise Access</option>
							</select>
						</div>

						<div>
							<label class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
								>Use Case</label
							>
							<textarea
								rows="3"
								class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
								placeholder="Briefly describe how you plan to use the documentation..."
							></textarea>
						</div>

						<button
							type="submit"
							class="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
						>
							Request Access
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-gray-600 to-blue-600 py-16 text-white">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-4 text-3xl font-bold md:text-4xl">Need Help Getting Started?</h2>
		<p class="mb-8 text-xl">
			Our team is here to help you navigate the documentation and find the resources you need.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-lg bg-white px-8 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-100"
			>
				Contact Support
			</a>
			<a
				href="/resources/courses"
				class="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-600"
			>
				Take a Course
			</a>
		</div>
	</div>
</section>
