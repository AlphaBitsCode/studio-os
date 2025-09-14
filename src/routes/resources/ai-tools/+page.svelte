<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Bot,
		Zap,
		Brain,
		Workflow,
		ArrowRight,
		ExternalLink,
		Server,
		Code,
		Globe,
		Shield,
		Cloud,
		Terminal,
		Cpu,
		Database,
		Grid,
		List,
		Github
	} from 'lucide-svelte';

	let mounted = false;
	let selectedCategory = 'All';
	let searchTerm = '';
	let viewMode: 'grid' | 'list' = 'grid';

	onMount(() => {
		mounted = true;
	});

	// JSON array of tools for easy management
	const toolsData = [
		{
			name: 'ChatGPT',
			category: 'Conversational AI',
			description:
				'Advanced language model for content creation, coding assistance, and problem-solving.',
			features: [
				'Natural language processing',
				'Code generation',
				'Content writing',
				'Data analysis'
			],
			price: 'Free tier available',
			url: 'https://chat.openai.com',
			icon: 'Bot'
		},
		{
			name: 'Claude',
			category: 'AI Assistant',
			description:
				"Anthropic's AI assistant for analysis, writing, math, coding, and creative tasks.",
			features: ['Document analysis', 'Code review', 'Research assistance', 'Creative writing'],
			price: 'Free tier available',
			url: 'https://claude.ai',
			icon: 'Brain'
		},
		{
			name: 'Claude Desktop',
			category: 'AI Assistant',
			description: 'Desktop application for Claude with enhanced features and local file access.',
			features: [
				'Local file integration',
				'Desktop notifications',
				'Offline capabilities',
				'Enhanced privacy'
			],
			price: 'Free',
			url: 'https://claude.ai/desktop',
			icon: 'Brain'
		},
		{
			name: 'Claude Code',
			category: 'Development',
			description: "Claude's specialized coding interface for developers and programmers.",
			features: ['Code generation', 'Debugging assistance', 'Architecture planning', 'Code review'],
			price: 'Free tier available',
			url: 'https://claude.ai/code',
			icon: 'Code'
		},
		{
			name: 'Flowise',
			category: 'AI Development',
			description:
				'Open-source low-code tool for building customized LLM orchestration flows and AI agents.',
			features: ['Visual LLM builder', 'Custom AI agents', 'API integration', 'Self-hosted'],
			price: 'Free (open source)',
			url: 'https://flowiseai.com',
			icon: 'Bot'
		},
		{
			name: 'GitHub Copilot',
			category: 'Development',
			description: 'AI pair programmer that helps you write code faster.',
			features: ['Code completion', 'Function generation', 'Documentation', 'Test writing'],
			price: 'Subscription required',
			url: 'https://github.com/features/copilot',
			icon: 'Brain'
		},
		{
			name: 'CasaOS',
			category: 'Infrastructure',
			description: 'Simple, elegant home cloud system with Docker container management.',
			features: ['Docker management', 'Web interface', 'App store', 'File management'],
			price: 'Free (open source)',
			url: 'https://casaos.io',
			icon: 'Server'
		},
		{
			name: 'PM2',
			category: 'Deployment',
			description: 'Advanced process manager for Node.js applications with built-in load balancer.',
			features: ['Process management', 'Load balancing', 'Monitoring', 'Auto-restart'],
			price: 'Free (open source)',
			url: 'https://pm2.keymetrics.io',
			icon: 'Terminal'
		},
		{
			name: 'Cloudflare',
			category: 'Networking',
			description: 'Global CDN, DNS, and security services for websites and applications.',
			features: ['CDN', 'DNS management', 'DDoS protection', 'SSL certificates'],
			price: 'Free tier available',
			url: 'https://cloudflare.com',
			icon: 'Cloud'
		},
		{
			name: 'Cloudflare Tunnel',
			category: 'Networking',
			description: 'Secure way to connect resources to Cloudflare without a publicly routable IP.',
			features: ['Zero-trust access', 'No open ports', 'Automatic failover', 'Traffic encryption'],
			price: 'Free tier available',
			url: 'https://developers.cloudflare.com/cloudflare-one/connections/connect-apps',
			icon: 'Shield'
		},
		{
			name: 'ZeroTier',
			category: 'Networking',
			description: 'Global area networking solution that creates secure virtual networks.',
			features: ['Virtual networking', 'P2P connections', 'Cross-platform', 'Network management'],
			price: 'Free tier available',
			url: 'https://zerotier.com',
			icon: 'Globe'
		},
		{
			name: 'Netlify',
			category: 'Deployment',
			description:
				'Platform for deploying and hosting modern web applications with continuous deployment.',
			features: ['Git integration', 'Continuous deployment', 'Edge functions', 'Form handling'],
			price: 'Free tier available',
			url: 'https://netlify.com',
			icon: 'Globe'
		},
		{
			name: 'Lovable.dev',
			category: 'Development Platform',
			description: 'AI-powered full-stack development platform for building applications quickly.',
			features: [
				'AI code generation',
				'Full-stack development',
				'Rapid prototyping',
				'Deployment automation'
			],
			price: 'Subscription required',
			url: 'https://lovable.dev',
			icon: 'Code'
		},
		{
			name: 'Replit',
			category: 'Development Platform',
			description:
				'Online IDE and development platform with collaborative features and AI assistance.',
			features: ['Online IDE', 'Collaboration', 'AI assistance', 'Instant deployment'],
			price: 'Free tier available',
			url: 'https://replit.com',
			icon: 'Code'
		},
		{
			name: 'Trae IDE',
			category: 'Development Tools',
			description: 'AI-powered IDE with advanced code intelligence and automation features.',
			features: [
				'AI code assistance',
				'Smart refactoring',
				'Automated testing',
				'Project management'
			],
			price: 'Subscription required',
			url: 'https://trae.ai',
			icon: 'Code'
		},
		{
			name: 'Cursor IDE',
			category: 'Development Tools',
			description: 'AI-first code editor built for pair programming with AI.',
			features: [
				'AI pair programming',
				'Code generation',
				'Natural language editing',
				'Codebase chat'
			],
			price: 'Free tier available',
			url: 'https://cursor.sh',
			icon: 'Code'
		},
		{
			name: 'OpenCode',
			category: 'Development Tools',
			description:
				'Open-source client with Model Context Protocol (MCP) support for AI development.',
			features: ['MCP support', 'Open source', 'AI model integration', 'Extensible architecture'],
			price: 'Free (open source)',
			url: 'https://github.com/opencode-ai',
			icon: 'Code'
		}
	];

	// Icon mapping
	const iconMap: Record<string, any> = {
		Bot,
		Brain,
		Workflow,
		Zap,
		Code,
		Server,
		Terminal,
		Cloud,
		Shield,
		Globe,
		Cpu,
		Database
	};

	// Reactive filtering
	$: filteredTools = toolsData.filter((tool) => {
		const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
		const matchesSearch =
			tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
			tool.category.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	$: categories = ['All', ...new Set(toolsData.map((tool) => tool.category))];

	// FOSS Tools data
	const fossTools = [
		{
			name: 'MedusaJS 2.0 - eKommerce MCP',
			description:
				'Model Context Protocol (MCP) server for Medusa JavaScript SDK integration with AI automation and orchestration capabilities.',
			url: 'https://github.com/AlphaBitsCode/medusa-mcp',
			features: [
				'MCP Support',
				'Scalable Infrastructure',
				'AI-Ready Interfaces',
				'Extensible Architecture'
			]
		},
		{
			name: 'Studio OS',
			description:
				'Our very own website built with Svelte 5 + Directus in Docker - a complete studio management platform.',
			url: 'https://github.com/AlphaBitsCode/studio-os',
			features: ['Svelte 5', 'Directus CMS', 'Docker Setup', 'Studio Management']
		},
		{
			name: 'SecondBrains Architecture Framework',
			description:
				'Open-source framework for SMEs and Startups with advanced workflow automation, data analytics, and AI agent building capabilities.',
			url: 'https://github.com/AlphaBitsCode/second.brains',
			features: ['Workflow Automation', 'Data Analytics', 'AI Agent Builder', 'Low-Code Tools']
		},
		{
			name: 'Productivity Tips',
			description:
				'Comprehensive collection of productivity strategies and techniques to maximize efficiency and manage time better.',
			url: 'https://alphabits.team/resources/productivity-tips',
			features: [
				'Time Management',
				'Task Prioritization',
				'Focus Techniques',
				'Workflow Optimization'
			]
		},
		{
			name: 'Node-RED Learning Materials',
			description:
				'Comprehensive learning resources for Node-RED workflow automation and IoT development.',
			url: '#',
			features: [
				'Flow Programming',
				'IoT Integration',
				'Automation Workflows',
				'Community Support'
			],
			comingSoon: true
		}
	];
</script>

<svelte:head>
	<title>AI Tools & Resources - AlphaBits</title>
	<meta
		name="description"
		content="Discover powerful AI tools and resources to boost productivity and automate workflows. Free and premium options for businesses of all sizes."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20"
>
	<div class="bg-grid-pattern absolute inset-0 opacity-5"></div>
	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div
				class="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
			>
				<Bot class="mr-2 h-4 w-4" />
				AI Tools & Resources
			</div>

			<h1 class="mb-6 text-4xl leading-tight font-bold text-gray-900 md:text-6xl">
				Powerful AI Tools for
				<span class="text-blue-700"> Productivity </span>
			</h1>

			<p class="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				Discover curated AI tools and resources to streamline your workflow, boost productivity, and
				automate repetitive tasks.
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="#tools"
					class="transform rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
				>
					Explore Tools
				</a>
				<a
					href="/contact"
					class="rounded-lg border-2 border-gray-400 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-400 hover:text-white"
				>
					Get Consultation
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Search and Filter Section -->
<section class="bg-gray-50 py-12">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-4 lg:flex-row">
			<!-- Search Bar -->
			<div class="w-full lg:w-1/3">
				<input
					bind:value={searchTerm}
					type="text"
					placeholder="Search tools, categories, or features..."
					class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			<!-- View Toggle -->
			<div class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-1">
				<button
					on:click={() => (viewMode = 'grid')}
					class="rounded-md p-2 transition-colors {viewMode === 'grid'
						? 'bg-blue-600 text-white'
						: 'text-gray-600 hover:bg-gray-100'}"
					title="Grid View"
				>
					<Grid class="h-4 w-4" />
				</button>
				<button
					on:click={() => (viewMode = 'list')}
					class="rounded-md p-2 transition-colors {viewMode === 'list'
						? 'bg-blue-600 text-white'
						: 'text-gray-600 hover:bg-gray-100'}"
					title="List View"
				>
					<List class="h-4 w-4" />
				</button>
			</div>

			<!-- Category Filter -->
			<div class="flex flex-wrap gap-2">
				{#each categories as category}
					<button
						on:click={() => (selectedCategory = category)}
						class="rounded-lg px-4 py-2 font-medium transition-colors {selectedCategory === category
							? 'bg-blue-600 text-white'
							: 'bg-white text-gray-700 hover:bg-blue-50'}"
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<!-- Results Count -->
		<div class="mt-4 text-center">
			<p class="text-gray-600">Showing {filteredTools.length} of {toolsData.length} tools</p>
		</div>
	</div>
</section>

<!-- Tools Grid Section -->
<section id="tools" class="bg-white py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
				AI Tools & Development Resources
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Comprehensive collection of AI tools, development platforms, and infrastructure solutions to
				boost your productivity.
			</p>
		</div>

		<!-- Grid View -->
		{#if viewMode === 'grid'}
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredTools as tool}
					<div
						class="transform rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="mb-4 flex items-start justify-between">
							<div class="flex items-center">
								<div class="mr-4 rounded-lg bg-blue-100 p-3">
									<svelte:component this={iconMap[tool.icon]} class="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 class="mb-1 text-xl font-semibold text-gray-900">{tool.name}</h3>
									<span class="text-sm font-medium text-blue-600">{tool.category}</span>
								</div>
							</div>
							<a
								href={tool.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-400 transition-colors hover:text-blue-600"
							>
								<ExternalLink class="h-5 w-5" />
							</a>
						</div>

						<p class="mb-4 leading-relaxed text-gray-600">{tool.description}</p>

						<div class="mb-4">
							<h4 class="mb-2 text-sm font-semibold text-gray-900">Key Features:</h4>
							<ul class="space-y-1 text-sm text-gray-600">
								{#each tool.features as feature}
									<li class="flex items-center">
										<div class="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<div class="flex items-center justify-between border-t border-gray-100 pt-4">
							<span class="text-sm font-medium text-green-600">{tool.price}</span>
							<a
								href={tool.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
							>
								Try Now
								<ArrowRight class="ml-1 h-4 w-4" />
							</a>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- List View -->
			<div class="space-y-4">
				{#each filteredTools as tool}
					<div
						class="rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
					>
						<div class="flex items-start justify-between">
							<div class="flex flex-1 items-start space-x-4">
								<div class="rounded-lg bg-blue-100 p-2">
									<svelte:component this={iconMap[tool.icon]} class="h-5 w-5 text-blue-600" />
								</div>
								<div class="flex-1">
									<div class="mb-2 flex items-center gap-3">
										<h3 class="text-lg font-semibold text-gray-900">{tool.name}</h3>
										<span class="rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600"
											>{tool.category}</span
										>
										<span class="text-xs font-medium text-green-600">{tool.price}</span>
									</div>
									<p class="mb-3 text-gray-600">{tool.description}</p>
									<div class="flex flex-wrap gap-2">
										{#each tool.features as feature}
											<span class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
												>{feature}</span
											>
										{/each}
									</div>
								</div>
							</div>
							<div class="flex items-center gap-2">
								<a
									href={tool.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
								>
									Try Now
									<ArrowRight class="ml-1 h-4 w-4" />
								</a>
								<a
									href={tool.url}
									target="_blank"
									rel="noopener noreferrer"
									class="text-gray-400 transition-colors hover:text-blue-600"
								>
									<ExternalLink class="h-4 w-4" />
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		{#if filteredTools.length === 0}
			<div class="py-12 text-center">
				<p class="text-lg text-gray-500">No tools found matching your criteria.</p>
				<button
					on:click={() => {
						selectedCategory = 'All';
						searchTerm = '';
					}}
					class="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
				>
					Clear Filters
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- FOSS Tools Section -->
<section class="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<div
				class="mb-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"
			>
				<Github class="mr-2 h-4 w-4" />
				Open Source Tools
			</div>
			<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our FOSS Tools</h2>
			<p class="mx-auto max-w-3xl text-lg text-gray-600">
				Explore our collection of free and open-source tools, frameworks, and resources that we use
				and develop in production.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each fossTools as tool}
				<div
					class="transform rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl {tool.comingSoon
						? 'opacity-75'
						: ''}"
				>
					<div class="mb-4 flex items-start justify-between">
						<div class="flex items-center">
							<div class="mr-4 rounded-lg bg-green-100 p-3">
								<Github class="h-6 w-6 text-green-600" />
							</div>
							<div>
								<h3 class="mb-1 text-xl font-semibold text-gray-900">{tool.name}</h3>
								{#if tool.comingSoon}
									<span class="rounded bg-orange-50 px-2 py-1 text-sm font-medium text-orange-600"
										>Coming Soon</span
									>
								{:else}
									<span class="rounded bg-green-50 px-2 py-1 text-sm font-medium text-green-600"
										>Open Source</span
									>
								{/if}
							</div>
						</div>
						{#if !tool.comingSoon}
							<a
								href={tool.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-400 transition-colors hover:text-green-600"
							>
								<ExternalLink class="h-5 w-5" />
							</a>
						{/if}
					</div>

					<p class="mb-4 leading-relaxed text-gray-600">{tool.description}</p>

					<div class="mb-4">
						<h4 class="mb-2 text-sm font-semibold text-gray-900">Key Features:</h4>
						<ul class="space-y-1 text-sm text-gray-600">
							{#each tool.features as feature}
								<li class="flex items-center">
									<div class="mr-2 h-1.5 w-1.5 rounded-full bg-green-600"></div>
									{feature}
								</li>
							{/each}
						</ul>
					</div>

					<div class="flex items-center justify-between border-t border-gray-100 pt-4">
						<span class="text-sm font-medium text-green-600">Free & Open Source</span>
						{#if tool.comingSoon}
							<span class="inline-flex items-center font-medium text-orange-600">
								Coming Soon
							</span>
						{:else}
							<a
								href={tool.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center font-medium text-green-600 transition-colors hover:text-green-700"
							>
								Explore
								<ArrowRight class="ml-1 h-4 w-4" />
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="font-bol mb-6 text-3xl md:text-4xl">Ready to Transform Your Workflow?</h2>
		<p class="mx-auto mb-8 max-w-3xl text-xl text-gray-500">
			Let our experts help you choose and implement the right AI tools for your business needs.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/quick-assessment"
				class="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-gray-100"
			>
				Start Assessment
			</a>
			<a
				href="/contact"
				class="rounded-lg border-2 px-8 py-3 font-semibold transition-colors hover:bg-white hover:text-blue-600"
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
