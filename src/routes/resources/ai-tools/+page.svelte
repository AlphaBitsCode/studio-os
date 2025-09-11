<script lang="ts">
	import { onMount } from 'svelte';
	import { Bot, Zap, Brain, Workflow, ArrowRight, ExternalLink } from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	const aiTools = [
		{
			name: "ChatGPT",
			category: "Conversational AI",
			description: "Advanced language model for content creation, coding assistance, and problem-solving.",
			features: ["Natural language processing", "Code generation", "Content writing", "Data analysis"],
			price: "Free tier available",
			url: "https://chat.openai.com",
			icon: Bot
		},
		{
			name: "Claude",
			category: "AI Assistant",
			description: "Anthropic's AI assistant for analysis, writing, math, coding, and creative tasks.",
			features: ["Document analysis", "Code review", "Research assistance", "Creative writing"],
			price: "Free tier available",
			url: "https://claude.ai",
			icon: Brain
		},
		{
			name: "Zapier",
			category: "Workflow Automation",
			description: "Connect your apps and automate workflows without coding.",
			features: ["App integrations", "Automated workflows", "Trigger-based actions", "Multi-step automation"],
			price: "Free tier available",
			url: "https://zapier.com",
			icon: Workflow
		},
		{
			name: "Make (Integromat)",
			category: "Automation Platform",
			description: "Visual platform for creating, building and automating anything.",
			features: ["Visual automation builder", "Advanced logic", "Data transformation", "Real-time monitoring"],
			price: "Free tier available",
			url: "https://make.com",
			icon: Zap
		},
		{
			name: "Notion AI",
			category: "Productivity",
			description: "AI-powered writing assistant integrated into your workspace.",
			features: ["Content generation", "Summarization", "Translation", "Brainstorming"],
			price: "Paid add-on",
			url: "https://notion.so",
			icon: Bot
		},
		{
			name: "GitHub Copilot",
			category: "Development",
			description: "AI pair programmer that helps you write code faster.",
			features: ["Code completion", "Function generation", "Documentation", "Test writing"],
			price: "Subscription required",
			url: "https://github.com/features/copilot",
			icon: Brain
		}
	];

	const categories = [...new Set(aiTools.map(tool => tool.category))];
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

<!-- Tools Grid Section -->
<section id="tools" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured AI Tools</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Handpicked selection of AI tools that can transform your business operations and boost productivity.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each aiTools as tool}
				<div class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
					<div class="flex items-start justify-between mb-4">
						<div class="flex items-center">
							<div class="p-3 bg-blue-100 rounded-lg mr-4">
								<svelte:component this={tool.icon} class="w-6 h-6 text-blue-600" />
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
	</div>
</section>

<!-- Categories Section -->
<section class="py-20 bg-gray-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tool Categories</h2>
			<p class="text-lg text-gray-600 max-w-3xl mx-auto">
				Explore AI tools organized by category to find the perfect solution for your specific needs.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each categories as category}
				<div class="bg-white rounded-lg p-6  hover:transition-shadow">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
					<p class="text-gray-600 text-sm mb-4">
						{aiTools.filter(tool => tool.category === category).length} tools available
					</p>
					<div class="flex flex-wrap gap-2">
						{#each aiTools.filter(tool => tool.category === category) as tool}
							<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{tool.name}</span>
						{/each}
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