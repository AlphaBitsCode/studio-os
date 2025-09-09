<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';
	import * as NavigationMenu from './ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from './ui/navigation-menu/navigation-menu-trigger.svelte';

	let { user = null } = $props();

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

	const services = [
		{
			title: "AI Workflow Automation",
			href: "/services/ai-workflow-automation",
			description: "Streamline your business processes with intelligent automation solutions."
		},
		{
			title: "Fractional CTO & Tech Leadership",
			href: "/services/fractional-cto",
			description: "Strategic technology leadership and guidance for growing businesses."
		},
		{
			title: "Data & AI Solutions",
			href: "/services/data-ai-solutions",
			description: "Transform your data into actionable insights with AI-powered analytics."
		},
		{
			title: "Digital Transformation",
			href: "/services/digital-transformation",
			description: "Modernize your business operations with cutting-edge digital solutions."
		},
		{
			title: "IoT Infrastructure",
			href: "/services/iot-infrastructure",
			description: "Build connected ecosystems with robust IoT infrastructure solutions."
		}
	];

	const resources = [
		{
			title: "SecondBrains Framework",
			href: "/resources/secondbrains-framework",
			description: "Our proprietary methodology for building intelligent business systems."
		},
		{
			title: "Courses",
			href: "/resources/courses",
			description: "Learn cutting-edge technologies and methodologies through our courses."
		},
		{
			title: "Blog / Insights",
			href: "/resources/blog",
			description: "Stay updated with the latest trends and insights in technology."
		},
		{
			title: "Notion Wiki",
			href: "/resources/notion-wiki",
			description: "Comprehensive knowledge base and documentation resources."
		}
	];
</script>

<header class="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-deep-navy/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-dark-teal">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-14">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center">
					<Logo size="header" variant="default" alt="AlphaBits" />
				</a>
			</div>

			<!-- Navigation -->
			<nav class="hidden md:flex">
				<NavigationMenu.Root class="relative z-10 flex max-w-max flex-1 items-center justify-center">
					<NavigationMenu.List class="group flex flex-1 list-none items-center justify-center space-x-1">
						<!-- About -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/about">
								{#snippet child()}
									<a href="/about" class={navigationMenuTriggerStyle()}>About</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						
						<!-- Services -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint">
								Services
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white/95 dark:bg-deep-navy/95 backdrop-blur-sm border border-gray-200 dark:border-dark-teal rounded-md shadow-lg">
									{#each services as service}
										<NavigationMenu.Link href={service.href}>
											{#snippet child()}
												<a
													href={service.href}
													class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div class="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
														{service.title}
													</div>
													<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
														{service.description}
													</p>
												</a>
											{/snippet}
										</NavigationMenu.Link>
									{/each}
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<!-- Case Studies -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/case-studies">
								{#snippet child()}
									<a href="/case-studies" class={navigationMenuTriggerStyle()}>Case Studies</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>

						<!-- Resources -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint">
								Resources
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[500px] gap-3 p-4 bg-white/95 dark:bg-deep-navy/95 backdrop-blur-sm border border-gray-200 dark:border-dark-teal rounded-md shadow-lg">
									{#each resources as resource}
										<NavigationMenu.Link href={resource.href}>
											{#snippet child()}
												<a
													href={resource.href}
													class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
												>
													<div class="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">
														{resource.title}
													</div>
													<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
														{resource.description}
													</p>
												</a>
											{/snippet}
										</NavigationMenu.Link>
									{/each}
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						

						<!-- Blog -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/blog">
								{#snippet child()}
									<a href="/blog" class={navigationMenuTriggerStyle()}>Blog</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</nav>

			<div class="flex items-center space-x-2">
				<a
					href="/quick-assessment"
					class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-medium-teal text-foreground hover:bg-dark-teal transition-colors"
					title="Start Quick Assessment"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</header>

<style>
	/* Additional custom styles if needed */
</style>