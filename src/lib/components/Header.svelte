<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';
	import * as NavigationMenu from './ui/navigation-menu/index.js';

	let mobileMenuOpen = $state(false);

	async function handleLogout() {
		try {
			const response = await fetch('/auth/logout', {
				method: 'POST'
			});
			if (response.ok) {
				goto('/');
			}
		} catch (error) {
			console.error('Logout failed:', error);
		}
	}

	const aiWorkflowItems = [
		{
			title: "What is AI Workflow Automation?",
			href: "/services/ai-workflow-automation",
			description: "Learn the fundamentals of AI workflow automation and its benefits."
		},
		{
			title: "Getting Started",
			href: "/quick-assessment",
			description: "Step-by-step guide to implementing AI workflows in your business."
		},
		{
			title: "AI Tools",
			href: "/resources/ai-tools",
			description: "Discover the best AI tools for workflow automation."
		}
	];

	const servicesItems = [
		{
			title: "Digital Transformation & Digital Infrastructure",
			href: "/services/digital-transformation",
			description: "Complete digital infrastructure and transformation solutions."
		},
		{
			title: "Fractional CTO",
			href: "/services/fractional-cto",
			description: "Strategic technology leadership for growing businesses."
		},
		{
			title: "AI Workflow Automation",
			href: "/services/ai-workflow-automation",
			description: "Intelligent automation solutions for business processes."
		},
		{
			title: "Data Analytics",
			href: "/services/data-ai-solutions",
			description: "Transform your data into actionable insights with AI-powered analytics."
		},
		{
			title: "IoT Solutions for Energy Management",
			href: "/services/iot-infrastructure",
			description: "Smart IoT solutions for efficient energy management and monitoring."
		}
	];

	const freeResourcesItems = [
		{
			title: "AI Tools",
			href: "/resources/ai-tools",
			description: "Free AI tools and resources for productivity and automation."
		},
		{
			title: "Productivity Tips",
			href: "/resources/productivity-tips",
			description: "Expert tips and strategies to boost your productivity."
		},
		{
			title: "NodeRED Learning Materials",
			href: "/resources/nodered-learning",
			description: "Comprehensive guides and tutorials for NodeRED automation."
		}
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-14">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center">
					<Logo size="header" variant="default" alt="AlphaBits" />
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex">
				<NavigationMenu.Root class="relative z-10 flex max-w-max flex-1 items-center justify-center">
					<NavigationMenu.List class="group flex flex-1 list-none items-center justify-center space-x-6">
						<!-- Team -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/about">
								{#snippet child()}
									<a href="/about" class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap">Team</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						
						<!-- AI Workflow -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap flex items-center">
							AI Workflow
						</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[500px] gap-3 p-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
									{#each aiWorkflowItems as item}
										<NavigationMenu.Link href={item.href}>
											{#snippet child()}
												<a
											href={item.href}
											class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-medium-teal focus:bg-gray-100 focus:text-medium-teal"
										>
											<div class="text-sm font-medium leading-none text-gray-900">
												{item.title}
											</div>
											<p class="line-clamp-2 text-sm leading-snug text-gray-600">
												{item.description}
											</p>
										</a>
											{/snippet}
										</NavigationMenu.Link>
									{/each}
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<!-- Services -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap flex items-center">
							Services
						</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
									{#each servicesItems as service}
										<NavigationMenu.Link href={service.href}>
											{#snippet child()}
												<a
											href={service.href}
											class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-medium-teal focus:bg-gray-100 focus:text-medium-teal"
										>
											<div class="text-sm font-medium leading-none text-gray-900">
												{service.title}
											</div>
											<p class="line-clamp-2 text-sm leading-snug text-gray-600">
												{service.description}
											</p>
										</a>
											{/snippet}
										</NavigationMenu.Link>
									{/each}
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<!-- Free Resources -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap flex items-center">
							Free Resources
						</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[500px] gap-3 p-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
									{#each freeResourcesItems as resource}
										<NavigationMenu.Link href={resource.href}>
											{#snippet child()}
												<a
											href={resource.href}
											class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-medium-teal focus:bg-gray-100 focus:text-medium-teal"
										>
											<div class="text-sm font-medium leading-none text-gray-900">
												{resource.title}
											</div>
											<p class="line-clamp-2 text-sm leading-snug text-gray-600">
												{resource.description}
											</p>
										</a>
											{/snippet}
										</NavigationMenu.Link>
									{/each}
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<!-- Tech Blog -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/blog">
								{#snippet child()}
									<a href="/blog" class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap">Tech Blog</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</nav>

			<!-- Right side actions -->
			<div class="flex items-center space-x-2">
				<a
					href="/quick-assessment"
					class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-medium-teal text-white hover:bg-dark-teal transition-colors"
					title="Start Quick Assessment"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</a>

				<!-- Mobile menu button -->
				<button
					class="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medium-teal hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-medium-teal"
					aria-expanded="false"
					onclick={toggleMobileMenu}
				>
					<span class="sr-only">Open main menu</span>
					{#if !mobileMenuOpen}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{:else}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden">
			<div class="px-4 pt-4 pb-6 space-y-3 bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
				<!-- Team -->
				<a href="/about" class="block px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-medium-teal hover:bg-gray-50 transition-colors" onclick={closeMobileMenu}>
					Team
				</a>

				<!-- AI Workflow -->
				<div class="space-y-2">
					<div class="px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100">AI Workflow</div>
					{#each aiWorkflowItems as item}
						<a href={item.href} class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-medium-teal hover:bg-gray-50 transition-colors rounded-md" onclick={closeMobileMenu}>
							{item.title}
						</a>
					{/each}
				</div>

				<!-- Services -->
				<div class="space-y-2">
					<div class="px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100">Services</div>
					{#each servicesItems as service}
						<a href={service.href} class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-medium-teal hover:bg-gray-50 transition-colors rounded-md" onclick={closeMobileMenu}>
							{service.title}
						</a>
					{/each}
				</div>

				<!-- Free Resources -->
				<div class="space-y-2">
					<div class="px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100">Free Resources</div>
					{#each freeResourcesItems as resource}
						<a href={resource.href} class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-medium-teal hover:bg-gray-50 transition-colors rounded-md" onclick={closeMobileMenu}>
							{resource.title}
						</a>
					{/each}
				</div>

				<!-- Tech Blog -->
				<a href="/blog" class="block px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-medium-teal hover:bg-gray-50 transition-colors" onclick={closeMobileMenu}>
					Tech Blog
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	/* Additional custom styles if needed */
</style>