<script lang="ts">
	import { onMount } from 'svelte';
	import { Workflow, Play, BookOpen, Download, ExternalLink, ArrowRight, Zap, Settings, Database } from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const learningModules = [
		{
			title: "NodeRED Fundamentals",
			level: "Beginner",
			duration: "2 hours",
			description: "Learn the basics of NodeRED, including installation, interface navigation, and creating your first flow.",
			topics: [
				"What is NodeRED and its use cases",
				"Installation and setup",
				"Understanding the flow editor",
				"Basic nodes and connections",
				"Creating your first automation"
			],
			icon: BookOpen,
			color: "blue"
		},
		{
			title: "Working with Nodes",
			level: "Beginner",
			duration: "3 hours",
			description: "Deep dive into different types of nodes, their configurations, and how to connect them effectively.",
			topics: [
				"Input, output, and function nodes",
				"HTTP request and response handling",
				"File operations and data processing",
				"Timer and scheduling nodes",
				"Debug and monitoring techniques"
			],
			icon: Settings,
			color: "green"
		},
		{
			title: "Data Processing & Transformation",
			level: "Intermediate",
			duration: "4 hours",
			description: "Master data manipulation, JSON processing, and creating complex data transformation workflows.",
			topics: [
				"JSON parsing and manipulation",
				"Data filtering and sorting",
				"Template nodes for formatting",
				"Switch and change nodes",
				"Working with arrays and objects"
			],
			icon: Database,
			color: "purple"
		},
		{
			title: "API Integration",
			level: "Intermediate",
			duration: "3 hours",
			description: "Learn to integrate with REST APIs, handle authentication, and create robust API workflows.",
			topics: [
				"REST API fundamentals",
				"Authentication methods (API keys, OAuth)",
				"Error handling and retry logic",
				"Rate limiting and best practices",
				"Creating custom API endpoints"
			],
			icon: Zap,
			color: "orange"
		},
		{
			title: "Advanced Automation Patterns",
			level: "Advanced",
			duration: "5 hours",
			description: "Explore complex automation scenarios, error handling, and scalable workflow design patterns.",
			topics: [
				"Complex flow control and loops",
				"Error handling strategies",
				"Subflows and reusable components",
				"Performance optimization",
				"Production deployment considerations"
			],
			icon: Workflow,
			color: "red"
		},
		{
			title: "Real-World Projects",
			level: "Advanced",
			duration: "6 hours",
			description: "Build complete automation solutions for common business scenarios and IoT applications.",
			topics: [
				"Email automation workflows",
				"Data synchronization between systems",
				"IoT device monitoring and control",
				"Report generation and distribution",
				"Integration with business applications"
			],
			icon: Play,
			color: "indigo"
		}
	];

	const resources = [
		{
			title: "NodeRED Quick Reference Guide",
			type: "PDF",
			description: "Comprehensive reference guide covering all essential NodeRED nodes and their configurations.",
			size: "2.5 MB",
			downloadUrl: "/downloads/nodered-quick-reference.pdf"
		},
		{
			title: "Sample Flow Library",
			type: "JSON",
			description: "Collection of ready-to-use NodeRED flows for common automation scenarios.",
			size: "1.2 MB",
			downloadUrl: "/downloads/nodered-sample-flows.json"
		},
		{
			title: "Best Practices Checklist",
			type: "PDF",
			description: "Essential guidelines for creating maintainable and scalable NodeRED workflows.",
			size: "800 KB",
			downloadUrl: "/downloads/nodered-best-practices.pdf"
		},
		{
			title: "Troubleshooting Guide",
			type: "PDF",
			description: "Common issues and solutions for NodeRED development and deployment.",
			size: "1.5 MB",
			downloadUrl: "/downloads/nodered-troubleshooting.pdf"
		}
	];

	const externalLinks = [
		{
			title: "Official NodeRED Documentation",
			url: "https://nodered.org/docs/",
			description: "Complete official documentation and API reference"
		},
		{
			title: "NodeRED Community Forum",
			url: "https://discourse.nodered.org/",
			description: "Active community forum for questions and discussions"
		},
		{
			title: "NodeRED Flow Library",
			url: "https://flows.nodered.org/",
			description: "Shared library of flows and nodes from the community"
		},
		{
			title: "NodeRED GitHub Repository",
			url: "https://github.com/node-red/node-red",
			description: "Source code and issue tracking"
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
	<meta name="description" content="Comprehensive NodeRED learning materials, tutorials, and resources for automation and workflow development. From beginner to advanced levels." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-red-50 via-white to-orange-50 py-20 overflow-hidden">
	<div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center">
			<div class="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
				<Workflow class="w-4 h-4 mr-2" />
				NodeRED Learning
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
				Master NodeRED
				<span class="text-orange-700">
					Automation
				</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
				Comprehensive learning materials and resources to help you become proficient in NodeRED workflow automation and IoT development.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a href="#modules" class="bg-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
					Start Learning
				</a>
				<a href="#resources" class="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-300">
					Download Resources
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Learning Path Section -->
<section id="modules" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Structured Learning Path</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Follow our carefully designed curriculum to master NodeRED from basics to advanced automation patterns.
			</p>
		</div>

		<div class="space-y-8">
			{#each learningModules as module, index}
				<div class="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
					<div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
						<div class="flex-1">
							<div class="flex items-center mb-4">
								<div class={`p-3 rounded-lg mr-4 ${getColorClasses(module.color)}`}>
									<svelte:component this={module.icon} class="w-6 h-6" />
								</div>
								<div>
									<h3 class="text-2xl font-semibold text-gray-900 mb-1">{module.title}</h3>
									<div class="flex items-center space-x-4 text-sm text-gray-500">
										<span class="px-2 py-1 bg-gray-100 rounded">{module.level}</span>
										<span>{module.duration}</span>
									</div>
								</div>
							</div>
							
							<p class="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
							
							<div class="mb-6">
								<h4 class="text-sm font-semibold text-gray-900 mb-3">What you'll learn:</h4>
								<ul class="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
									{#each module.topics as topic}
										<li class="flex items-center">
											<div class="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
											{topic}
										</li>
									{/each}
								</ul>
							</div>
						</div>
						
						<div class="lg:ml-8 flex-shrink-0">
							<div class="text-center">
								<div class="text-4xl font-bold text-gray-300 mb-2">#{index + 1}</div>
								<button class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
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
<section id="resources" class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Access our curated collection of guides, templates, and reference materials to support your NodeRED journey.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			{#each resources as resource}
				<div class="bg-white rounded-lg  p-6 hover:transition-shadow">
					<div class="flex items-start justify-between mb-4">
						<div class="flex items-center">
							<div class="p-2 bg-orange-100 rounded-lg mr-3">
								<Download class="w-5 h-5 text-orange-600" />
							</div>
							<div>
								<h3 class="text-lg font-semibold text-gray-900">{resource.title}</h3>
								<span class="text-sm text-orange-600 font-medium">{resource.type}</span>
							</div>
						</div>
						<span class="text-sm text-gray-500">{resource.size}</span>
					</div>
					
					<p class="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
					
					<a href={resource.downloadUrl} class="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
						Download Now
						<ArrowRight class="w-4 h-4 ml-1" />
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- External Links Section -->
<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Resources</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Explore official documentation, community resources, and tools to enhance your NodeRED experience.
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-6">
			{#each externalLinks as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group">
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{link.title}</h3>
							<p class="text-gray-600 text-sm">{link.description}</p>
						</div>
						<ExternalLink class="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0 ml-3" />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Demo Section -->
<section class="py-20 bg-gray-900">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-4">See NodeRED in Action</h2>
			<p class="text-xl text-gray-300 max-w-3xl mx-auto">
				Watch our demo showcasing real-world NodeRED automation scenarios.
			</p>
		</div>

		<div class="max-w-4xl mx-auto">
			<div class="bg-gray-800 rounded-lg p-8 text-center">
				<div class="mb-6">
					<img src="/courses/nodered-demo.gif" alt="NodeRED Demo" class="w-full rounded-lg shadow-lg" />
				</div>
				<p class="text-gray-300 mb-6">
					This demo shows how to create a complete automation workflow that processes data, sends notifications, and integrates with external APIs.
				</p>
				<a href="/contact" class="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
					Request Live Demo
					<ArrowRight class="w-4 h-4 ml-2" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-red-600 to-orange-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
			Ready to Automate Your Workflows?
		</h2>
		<p class="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
			Let our experts help you implement NodeRED automation solutions tailored to your business needs.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/services/ai-workflow-automation" class="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Explore Automation Services
			</a>
			<a href="/contact" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
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