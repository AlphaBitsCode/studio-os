<script lang="ts">
	import { onMount } from 'svelte';
	import { Bot, Zap, Brain, Workflow, ArrowRight, ExternalLink, Server, Code, Globe, Shield, Cloud, Terminal, Cpu, Database, Grid, List, Github } from 'lucide-svelte';

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
			name: "ChatGPT",
			category: "Conversational AI",
			description: "Advanced language model for content creation, coding assistance, and problem-solving.",
			features: ["Natural language processing", "Code generation", "Content writing", "Data analysis"],
			price: "Free tier available",
			url: "https://chat.openai.com",
			icon: "Bot"
		},
		{
			name: "Claude",
			category: "AI Assistant",
			description: "Anthropic's AI assistant for analysis, writing, math, coding, and creative tasks.",
			features: ["Document analysis", "Code review", "Research assistance", "Creative writing"],
			price: "Free tier available",
			url: "https://claude.ai",
			icon: "Brain"
		},
		{
			name: "Claude Desktop",
			category: "AI Assistant",
			description: "Desktop application for Claude with enhanced features and local file access.",
			features: ["Local file integration", "Desktop notifications", "Offline capabilities", "Enhanced privacy"],
			price: "Free",
			url: "https://claude.ai/desktop",
			icon: "Brain"
		},
		{
			name: "Claude Code",
			category: "Development",
			description: "Claude's specialized coding interface for developers and programmers.",
			features: ["Code generation", "Debugging assistance", "Architecture planning", "Code review"],
			price: "Free tier available",
			url: "https://claude.ai/code",
			icon: "Code"
		},
		{
			name: "Zapier",
			category: "Workflow Automation",
			description: "Connect your apps and automate workflows without coding.",
			features: ["App integrations", "Automated workflows", "Trigger-based actions", "Multi-step automation"],
			price: "Free tier available",
			url: "https://zapier.com",
			icon: "Workflow"
		},
		{
			name: "n8n",
			category: "Workflow Automation",
			description: "Open-source workflow automation tool with visual editor and self-hosting options.",
			features: ["Visual workflow builder", "Self-hosted option", "Custom nodes", "API integrations"],
			price: "Free (open source)",
			url: "https://n8n.io",
			icon: "Workflow"
		},
		{
			name: "Make (Integromat)",
			category: "Workflow Automation",
			description: "Visual platform for creating, building and automating anything.",
			features: ["Visual automation builder", "Advanced logic", "Data transformation", "Real-time monitoring"],
			price: "Free tier available",
			url: "https://make.com",
			icon: "Zap"
		},
		{
			name: "Flowise",
			category: "AI Development",
			description: "Open-source low-code tool for building customized LLM orchestration flows and AI agents.",
			features: ["Visual LLM builder", "Custom AI agents", "API integration", "Self-hosted"],
			price: "Free (open source)",
			url: "https://flowiseai.com",
			icon: "Bot"
		},
		{
			name: "Notion AI",
			category: "Productivity",
			description: "AI-powered writing assistant integrated into your workspace.",
			features: ["Content generation", "Summarization", "Translation", "Brainstorming"],
			price: "Paid add-on",
			url: "https://notion.so",
			icon: "Bot"
		},
		{
			name: "GitHub Copilot",
			category: "Development",
			description: "AI pair programmer that helps you write code faster.",
			features: ["Code completion", "Function generation", "Documentation", "Test writing"],
			price: "Subscription required",
			url: "https://github.com/features/copilot",
			icon: "Brain"
		},
		{
			name: "CasaOS",
			category: "Infrastructure",
			description: "Simple, elegant home cloud system with Docker container management.",
			features: ["Docker management", "Web interface", "App store", "File management"],
			price: "Free (open source)",
			url: "https://casaos.io",
			icon: "Server"
		},
		{
			name: "PM2",
			category: "Deployment",
			description: "Advanced process manager for Node.js applications with built-in load balancer.",
			features: ["Process management", "Load balancing", "Monitoring", "Auto-restart"],
			price: "Free (open source)",
			url: "https://pm2.keymetrics.io",
			icon: "Terminal"
		},
		{
			name: "Cloudflare",
			category: "Networking",
			description: "Global CDN, DNS, and security services for websites and applications.",
			features: ["CDN", "DNS management", "DDoS protection", "SSL certificates"],
			price: "Free tier available",
			url: "https://cloudflare.com",
			icon: "Cloud"
		},
		{
			name: "Cloudflare Tunnel",
			category: "Networking",
			description: "Secure way to connect resources to Cloudflare without a publicly routable IP.",
			features: ["Zero-trust access", "No open ports", "Automatic failover", "Traffic encryption"],
			price: "Free tier available",
			url: "https://developers.cloudflare.com/cloudflare-one/connections/connect-apps",
			icon: "Shield"
		},
		{
			name: "ZeroTier",
			category: "Networking",
			description: "Global area networking solution that creates secure virtual networks.",
			features: ["Virtual networking", "P2P connections", "Cross-platform", "Network management"],
			price: "Free tier available",
			url: "https://zerotier.com",
			icon: "Globe"
		},
		{
			name: "Netlify",
			category: "Deployment",
			description: "Platform for deploying and hosting modern web applications with continuous deployment.",
			features: ["Git integration", "Continuous deployment", "Edge functions", "Form handling"],
			price: "Free tier available",
			url: "https://netlify.com",
			icon: "Globe"
		},
		{
			name: "Lovable.dev",
			category: "Development Platform",
			description: "AI-powered full-stack development platform for building applications quickly.",
			features: ["AI code generation", "Full-stack development", "Rapid prototyping", "Deployment automation"],
			price: "Subscription required",
			url: "https://lovable.dev",
			icon: "Code"
		},
		{
			name: "Replit",
			category: "Development Platform",
			description: "Online IDE and development platform with collaborative features and AI assistance.",
			features: ["Online IDE", "Collaboration", "AI assistance", "Instant deployment"],
			price: "Free tier available",
			url: "https://replit.com",
			icon: "Code"
		},
		{
			name: "Trae IDE",
			category: "Development Tools",
			description: "AI-powered IDE with advanced code intelligence and automation features.",
			features: ["AI code assistance", "Smart refactoring", "Automated testing", "Project management"],
			price: "Subscription required",
			url: "https://trae.ai",
			icon: "Code"
		},
		{
			name: "Cursor IDE",
			category: "Development Tools",
			description: "AI-first code editor built for pair programming with AI.",
			features: ["AI pair programming", "Code generation", "Natural language editing", "Codebase chat"],
			price: "Free tier available",
			url: "https://cursor.sh",
			icon: "Code"
		},
		{
			name: "Windsurf IDE",
			category: "Development Tools",
			description: "Modern IDE with AI-powered development features and collaborative tools.",
			features: ["AI assistance", "Real-time collaboration", "Smart debugging", "Code analysis"],
			price: "Free tier available",
			url: "https://windsurf.ai",
			icon: "Code"
		},
		{
			name: "OpenCode",
			category: "Development Tools",
			description: "Open-source client with Model Context Protocol (MCP) support for AI development.",
			features: ["MCP support", "Open source", "AI model integration", "Extensible architecture"],
			price: "Free (open source)",
			url: "https://github.com/opencode-ai",
			icon: "Code"
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
	$: filteredTools = toolsData.filter(tool => {
		const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
		const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
							  tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
							  tool.category.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	$: categories = ['All', ...new Set(toolsData.map(tool => tool.category))];

	// FOSS Tools data
	const fossTools = [
		{
			name: "MedusaJS 2.0 - eKommerce MCP",
			description: "Model Context Protocol (MCP) server for Medusa JavaScript SDK integration with AI automation and orchestration capabilities.",
			url: "https://github.com/AlphaBitsCode/medusa-mcp",
			features: ["MCP Support", "Scalable Infrastructure", "AI-Ready Interfaces", "Extensible Architecture"]
		},
		{
			name: "Studio OS",
			description: "Our very own website built with Svelte 5 + Directus in Docker - a complete studio management platform.",
			url: "https://github.com/AlphaBitsCode/studio-os",
			features: ["Svelte 5", "Directus CMS", "Docker Setup", "Studio Management"]
		},
		{
			name: "SecondBrains Architecture Framework",
			description: "Open-source framework for SMEs and Startups with advanced workflow automation, data analytics, and AI agent building capabilities.",
			url: "https://github.com/AlphaBitsCode/second.brains",
			features: ["Workflow Automation", "Data Analytics", "AI Agent Builder", "Low-Code Tools"]
		},
		{
			name: "Productivity Tips",
			description: "Comprehensive collection of productivity strategies and techniques to maximize efficiency and manage time better.",
			url: "https://alphabits.team/resources/productivity-tips",
			features: ["Time Management", "Task Prioritization", "Focus Techniques", "Workflow Optimization"]
		},
		{
			name: "Node-RED Learning Materials",
			description: "Comprehensive learning resources for Node-RED workflow automation and IoT development.",
			url: "#",
			features: ["Flow Programming", "IoT Integration", "Automation Workflows", "Community Support"],
			comingSoon: true
		}
	];
</script>

<svelte:head>
	<title>AI Tools & Resources - AlphaBits</title>
	<meta name="description" content="Discover powerful AI tools and resources to boost productivity and automate workflows. Free and premium options for businesses of all sizes." />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 overflow-hidden">
	<div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center">
			<div class="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
				<Bot class="w-4 h-4 mr-2" />
				AI Tools & Resources
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
				Powerful AI Tools for
				<span class="text-blue-700">
					Productivity
				</span>
			</h1>
			
			<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
				Discover curated AI tools and resources to streamline your workflow, boost productivity, and automate repetitive tasks.
			</p>
			
			<!-- CTA Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
				<a href="#tools" class="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 ">
					Explore Tools
				</a>
				<a href="/contact" class="border-2 border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-300">
					Get Consultation
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Search and Filter Section -->
<section class="py-12 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
			<!-- Search Bar -->
			<div class="w-full lg:w-1/3">
				<input 
					bind:value={searchTerm}
					type="text" 
					placeholder="Search tools, categories, or features..."
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>
			
			<!-- View Toggle -->
			<div class="flex items-center gap-2 bg-white rounded-lg border border-gray-300 p-1">
				<button 
					on:click={() => viewMode = 'grid'}
					class="p-2 rounded-md transition-colors {viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}"
					title="Grid View"
				>
					<Grid class="w-4 h-4" />
				</button>
				<button 
					on:click={() => viewMode = 'list'}
					class="p-2 rounded-md transition-colors {viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}"
					title="List View"
				>
					<List class="w-4 h-4" />
				</button>
			</div>
			
			<!-- Category Filter -->
			<div class="flex flex-wrap gap-2">
				{#each categories as category}
					<button 
						on:click={() => selectedCategory = category}
						class="px-4 py-2 rounded-lg font-medium transition-colors {selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-blue-50'}"
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
<section id="tools" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Tools & Development Resources</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Comprehensive collection of AI tools, development platforms, and infrastructure solutions to boost your productivity.
			</p>
		</div>

		<!-- Grid View -->
		{#if viewMode === 'grid'}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each filteredTools as tool}
					<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
						<div class="flex items-start justify-between mb-4">
							<div class="flex items-center">
								<div class="p-3 bg-blue-100 rounded-lg mr-4">
									<svelte:component this={iconMap[tool.icon]} class="w-6 h-6 text-blue-600" />
								</div>
								<div>
									<h3 class="text-xl font-semibold text-gray-900 mb-1">{tool.name}</h3>
									<span class="text-sm text-blue-600 font-medium">{tool.category}</span>
								</div>
							</div>
							<a href={tool.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-600 transition-colors">
								<ExternalLink class="w-5 h-5" />
							</a>
						</div>
						
						<p class="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
						
						<div class="mb-4">
							<h4 class="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
							<ul class="text-sm text-gray-600 space-y-1">
								{#each tool.features as feature}
									<li class="flex items-center">
										<div class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
										{feature}
									</li>
								{/each}
							</ul>
						</div>
						
						<div class="flex items-center justify-between pt-4 border-t border-gray-100">
							<span class="text-sm font-medium text-green-600">{tool.price}</span>
							<a href={tool.url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
								Try Now
								<ArrowRight class="w-4 h-4 ml-1" />
							</a>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- List View -->
			<div class="space-y-4">
				{#each filteredTools as tool}
					<div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
						<div class="flex items-start justify-between">
							<div class="flex items-start space-x-4 flex-1">
								<div class="p-2 bg-blue-100 rounded-lg">
									<svelte:component this={iconMap[tool.icon]} class="w-5 h-5 text-blue-600" />
								</div>
								<div class="flex-1">
									<div class="flex items-center gap-3 mb-2">
										<h3 class="text-lg font-semibold text-gray-900">{tool.name}</h3>
										<span class="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded">{tool.category}</span>
										<span class="text-xs font-medium text-green-600">{tool.price}</span>
									</div>
									<p class="text-gray-600 mb-3">{tool.description}</p>
									<div class="flex flex-wrap gap-2">
										{#each tool.features as feature}
											<span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{feature}</span>
										{/each}
									</div>
								</div>
							</div>
							<div class="flex items-center gap-2">
								<a href={tool.url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
									Try Now
									<ArrowRight class="w-4 h-4 ml-1" />
								</a>
								<a href={tool.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-600 transition-colors">
									<ExternalLink class="w-4 h-4" />
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
		
		{#if filteredTools.length === 0}
			<div class="text-center py-12">
				<p class="text-gray-500 text-lg">No tools found matching your criteria.</p>
				<button 
					on:click={() => { selectedCategory = 'All'; searchTerm = ''; }}
					class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					Clear Filters
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- FOSS Tools Section -->
<section class="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<div class="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
				<Github class="w-4 h-4 mr-2" />
				Open Source Tools
			</div>
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our FOSS Tools</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Explore our collection of free and open-source tools, frameworks, and resources that we use and develop in production.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each fossTools as tool}
				<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 {tool.comingSoon ? 'opacity-75' : ''}">
					<div class="flex items-start justify-between mb-4">
						<div class="flex items-center">
							<div class="p-3 bg-green-100 rounded-lg mr-4">
								<Github class="w-6 h-6 text-green-600" />
							</div>
							<div>
								<h3 class="text-xl font-semibold text-gray-900 mb-1">{tool.name}</h3>
								{#if tool.comingSoon}
									<span class="text-sm text-orange-600 font-medium bg-orange-50 px-2 py-1 rounded">Coming Soon</span>
								{:else}
									<span class="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded">Open Source</span>
								{/if}
							</div>
						</div>
						{#if !tool.comingSoon}
							<a href={tool.url} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-green-600 transition-colors">
								<ExternalLink class="w-5 h-5" />
							</a>
						{/if}
					</div>
					
					<p class="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
					
					<div class="mb-4">
						<h4 class="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
						<ul class="text-sm text-gray-600 space-y-1">
							{#each tool.features as feature}
								<li class="flex items-center">
									<div class="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
									{feature}
								</li>
							{/each}
						</ul>
					</div>
					
					<div class="flex items-center justify-between pt-4 border-t border-gray-100">
						<span class="text-sm font-medium text-green-600">Free & Open Source</span>
						{#if tool.comingSoon}
							<span class="inline-flex items-center text-orange-600 font-medium">
								Coming Soon
							</span>
						{:else}
							<a href={tool.url} target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
								Explore
								<ArrowRight class="w-4 h-4 ml-1" />
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl md:text-4xl font-bol mb-6">
			Ready to Transform Your Workflow?
		</h2>
		<p class="text-xl text-gray-500 mb-8 max-w-3xl mx-auto">
			Let our experts help you choose and implement the right AI tools for your business needs.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/quick-assessment" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
				Start Assessment
			</a>
			<a href="/contact" class="border-2 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
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