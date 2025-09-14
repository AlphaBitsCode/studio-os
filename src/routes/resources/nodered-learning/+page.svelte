<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Workflow,
		Play,
		BookOpen,
		Download,
		ExternalLink,
		ArrowRight,
		Zap,
		Settings,
		Database
	} from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const learningModules = [
		{
			title: 'NodeRED Fundamentals',
			level: 'Beginner',
			duration: '2 hours',
			description:
				'Learn the basics of NodeRED, including installation, interface navigation, and creating your first flow.',
			topics: [
				'What is NodeRED and its use cases',
				'Installation and setup',
				'Understanding the flow editor',
				'Basic nodes and connections',
				'Creating your first automation'
			],
			icon: BookOpen,
			color: 'blue'
		},
		{
			title: 'Working with Nodes',
			level: 'Beginner',
			duration: '3 hours',
			description:
				'Deep dive into different types of nodes, their configurations, and how to connect them effectively.',
			topics: [
				'Input, output, and function nodes',
				'HTTP request and response handling',
				'File operations and data processing',
				'Timer and scheduling nodes',
				'Debug and monitoring techniques'
			],
			icon: Settings,
			color: 'green'
		},
		{
			title: 'Data Processing & Transformation',
			level: 'Intermediate',
			duration: '4 hours',
			description:
				'Master data manipulation, JSON processing, and creating complex data transformation workflows.',
			topics: [
				'JSON parsing and manipulation',
				'Data filtering and sorting',
				'Template nodes for formatting',
				'Switch and change nodes',
				'Working with arrays and objects'
			],
			icon: Database,
			color: 'purple'
		},
		{
			title: 'API Integration',
			level: 'Intermediate',
			duration: '3 hours',
			description:
				'Learn to integrate with REST APIs, handle authentication, and create robust API workflows.',
			topics: [
				'REST API fundamentals',
				'Authentication methods (API keys, OAuth)',
				'Error handling and retry logic',
				'Rate limiting and best practices',
				'Creating custom API endpoints'
			],
			icon: Zap,
			color: 'orange'
		},
		{
			title: 'Advanced Automation Patterns',
			level: 'Advanced',
			duration: '5 hours',
			description:
				'Explore complex automation scenarios, error handling, and scalable workflow design patterns.',
			topics: [
				'Complex flow control and loops',
				'Error handling strategies',
				'Subflows and reusable components',
				'Performance optimization',
				'Production deployment considerations'
			],
			icon: Workflow,
			color: 'red'
		},
		{
			title: 'Real-World Projects',
			level: 'Advanced',
			duration: '6 hours',
			description:
				'Build complete automation solutions for common business scenarios and IoT applications.',
			topics: [
				'Email automation workflows',
				'Data synchronization between systems',
				'IoT device monitoring and control',
				'Report generation and distribution',
				'Integration with business applications'
			],
			icon: Play,
			color: 'indigo'
		}
	];

	const resources = [
		{
			title: 'NodeRED Quick Reference Guide',
			type: 'PDF',
			description:
				'Comprehensive reference guide covering all essential NodeRED nodes and their configurations.',
			size: '2.5 MB',
			downloadUrl: '/downloads/nodered-quick-reference.pdf'
		},
		{
			title: 'Sample Flow Library',
			type: 'JSON',
			description: 'Collection of ready-to-use NodeRED flows for common automation scenarios.',
			size: '1.2 MB',
			downloadUrl: '/downloads/nodered-sample-flows.json'
		},
		{
			title: 'Best Practices Checklist',
			type: 'PDF',
			description: 'Essential guidelines for creating maintainable and scalable NodeRED workflows.',
			size: '800 KB',
			downloadUrl: '/downloads/nodered-best-practices.pdf'
		},
		{
			title: 'Troubleshooting Guide',
			type: 'PDF',
			description: 'Common issues and solutions for NodeRED development and deployment.',
			size: '1.5 MB',
			downloadUrl: '/downloads/nodered-troubleshooting.pdf'
		}
	];

	const externalLinks = [
		{
			title: 'Official NodeRED Documentation',
			url: 'https://nodered.org/docs/',
			description: 'Complete official documentation and API reference'
		},
		{
			title: 'NodeRED Community Forum',
			url: 'https://discourse.nodered.org/',
			description: 'Active community forum for questions and discussions'
		},
		{
			title: 'NodeRED Flow Library',
			url: 'https://flows.nodered.org/',
			description: 'Shared library of flows and nodes from the community'
		},
		{
			title: 'NodeRED GitHub Repository',
			url: 'https://github.com/node-red/node-red',
			description: 'Source code and issue tracking'
		}
	];

	function getColorClasses(color: string) {
		const colorMap: Record<string, string> = {
			blue: 'bg-blue-100 text-blue-600',
			green: 'bg-green-100 text-green-600',
			purple: 'bg-purple-100 text-purple-600',
			orange: 'bg-orange-100 text-orange-600',
			red: 'bg-red-100 text-red-600',
			indigo: 'bg-indigo-100 text-indigo-600'
		};
		return colorMap[color] || 'bg-gray-100 text-gray-600';
	}
</script>

<svelte:head>
	<title>NodeRED Learning Materials - AlphaBits</title>
	<meta
		name="description"
		content="Comprehensive NodeRED learning materials, tutorials, and resources for automation and workflow development. From beginner to advanced levels."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 py-20"
>
	<div class="bg-grid-pattern absolute inset-0 opacity-5"></div>
	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div
				class="mb-6 inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800"
			>
				<Workflow class="mr-2 h-4 w-4" />
				NodeRED Learning
			</div>

			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
				Master NodeRED
				<span class="text-orange-700"> Automation </span>
			</h1>

			<p class="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				Comprehensive learning materials and resources to help you become proficient in NodeRED
				workflow automation and IoT development.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="#modules"
					class="transform rounded-lg bg-red-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700"
				>
					Start Learning
				</a>
				<a
					href="#resources"
					class="rounded-lg border-2 border-gray-400 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-400 hover:text-white"
				>
					Download Resources
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Learning Path Section -->
<section id="modules" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Structured Learning Path</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Follow our carefully designed curriculum to master NodeRED from basics to advanced
				automation patterns.
			</p>
		</div>

		<div class="space-y-8">
			{#each learningModules as module, index}
				<div
					class="rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl"
				>
					<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
						<div class="flex-1">
							<div class="mb-4 flex items-center">
								<div class={`mr-4 rounded-lg p-3 ${getColorClasses(module.color)}`}>
									<svelte:component this={module.icon} class="h-6 w-6" />
								</div>
								<div>
									<h3 class="mb-1 text-2xl font-semibold text-gray-900">{module.title}</h3>
									<div class="flex items-center space-x-4 text-sm text-gray-500">
										<span class="rounded bg-gray-100 px-2 py-1">{module.level}</span>
										<span>{module.duration}</span>
									</div>
								</div>
							</div>

							<p class="mb-6 leading-relaxed text-gray-600">{module.description}</p>

							<div class="mb-6">
								<h4 class="mb-3 text-sm font-semibold text-gray-900">What you'll learn:</h4>
								<ul class="grid gap-2 text-sm text-gray-600 md:grid-cols-2">
									{#each module.topics as topic}
										<li class="flex items-center">
											<div class="mr-2 h-1.5 w-1.5 rounded-full bg-red-600"></div>
											{topic}
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<div class="flex-shrink-0 lg:ml-8">
							<div class="text-center">
								<div class="mb-2 text-4xl font-bold text-gray-300">#{index + 1}</div>
								<button
									class="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
								>
									Start Module
								</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Resources Section -->
<section id="resources" class="bg-gray-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Downloadable Resources</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Access our curated collection of guides, templates, and reference materials to support your
				NodeRED journey.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2">
			{#each resources as resource}
				<div class="rounded-lg bg-white p-6 hover:transition-shadow">
					<div class="mb-4 flex items-start justify-between">
						<div class="flex items-center">
							<div class="mr-3 rounded-lg bg-orange-100 p-2">
								<Download class="h-5 w-5 text-orange-600" />
							</div>
							<div>
								<h3 class="text-lg font-semibold text-gray-900">{resource.title}</h3>
								<span class="text-sm font-medium text-orange-600">{resource.type}</span>
							</div>
						</div>
						<span class="text-sm text-gray-500">{resource.size}</span>
					</div>

					<p class="mb-4 leading-relaxed text-gray-600">{resource.description}</p>

					<a
						href={resource.downloadUrl}
						class="inline-flex items-center font-medium text-orange-600 transition-colors hover:text-orange-700"
					>
						Download Now
						<ArrowRight class="ml-1 h-4 w-4" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- External Links Section -->
<section class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Additional Resources</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Explore official documentation, community resources, and tools to enhance your NodeRED
				experience.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each externalLinks as link}
				<a
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group rounded-lg bg-gray-50 p-6 transition-colors hover:bg-gray-100"
				>
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<h3
								class="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-red-600"
							>
								{link.title}
							</h3>
							<p class="text-sm text-gray-600">{link.description}</p>
						</div>
						<ExternalLink
							class="ml-3 h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-red-600"
						/>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Demo Section -->
<section class="bg-gray-900 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-white md:text-4xl">See NodeRED in Action</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-300">
				Watch our demo showcasing real-world NodeRED automation scenarios.
			</p>
		</div>

		<div class="mx-auto max-w-4xl">
			<div class="rounded-lg bg-gray-800 p-8 text-center">
				<div class="mb-6">
					<img
						src="/courses/nodered-demo.gif"
						alt="NodeRED Demo"
						class="w-full rounded-lg shadow-lg"
					/>
				</div>
				<p class="mb-6 text-gray-300">
					This demo shows how to create a complete automation workflow that processes data, sends
					notifications, and integrates with external APIs.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
				>
					Request Live Demo
					<ArrowRight class="ml-2 h-4 w-4" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-red-600 to-orange-600 py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
			Ready to Automate Your Workflows?
		</h2>
		<p class="mx-auto mb-8 max-w-3xl text-xl text-red-100">
			Let our experts help you implement NodeRED automation solutions tailored to your business
			needs.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/services/ai-workflow-automation"
				class="rounded-lg bg-white px-8 py-3 font-semibold text-red-600 transition-colors hover:bg-gray-100"
			>
				Explore Automation Services
			</a>
			<a
				href="/contact"
				class="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-red-600"
			>
				Get Consultation
			</a>
		</div>
	</div>
</section>

<style>
	.bg-grid-pattern {
		background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
		background-size: 20px 20px;
	}
</style>
