<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';
	import * as NavigationMenu from './ui/navigation-menu/index.js';
	import { BookOpen, Zap } from 'lucide-svelte';

	let { user = null }: { user?: any } = $props();
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

	const caseStudyItems = [
		{
			title: "Coffee Chain Digital Transformation",
			href: "/case-studies/coffee-chain-transformation",
			description: "Unifying 200+ outlets by consolidating 5 POS systems into BigQuery with Looker Studio analytics.",
			thumbnail: "/case-studies/coffee-background.jpg"
		},
		{
			title: "SENCAR Smoke Detection AIoT",
			href: "/case-studies/sencar-smoke-detection",
			description: "AI-powered smoke detection system for rental car fleets with 15-30 second accuracy.",
			thumbnail: "/partners/sencar_slide1.jpg"
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

						<!-- AI Workflow with Dropdown -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap">
								<a href="/services/ai-workflow-automation" class="hover:text-medium-teal transition-colors">AI Workflow</a>
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

						<!-- Services with Dropdown -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap">
								<a href="/services" class="hover:text-medium-teal transition-colors">Services</a>
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

						<!-- Case Studies with Thumbnail Preview -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="text-sm font-medium text-gray-700 hover:text-medium-teal transition-colors whitespace-nowrap">
								Case Studies
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[700px] gap-6 p-6 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
									<!-- Main Case Studies Link -->
									<NavigationMenu.Link href="/case-studies">
										{#snippet child()}
											<a
												href="/case-studies"
												class="flex items-center space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700 border-2 border-blue-200 bg-blue-50/50"
											>
												<div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
													<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
													</svg>
												</div>
												<div class="flex-1 space-y-1">
													<div class="text-sm font-bold leading-none text-blue-900">
														View All Case Studies
													</div>
													<p class="text-sm leading-snug text-blue-700">
														Explore our complete portfolio including IoT projects and digital transformations
													</p>
												</div>
											</a>
										{/snippet}
									</NavigationMenu.Link>
									
									<div class="grid md:grid-cols-2 gap-6">
										<!-- Technology Consulting Section -->
										<div>
											<h4 class="text-sm font-bold text-gray-900 mb-3 px-3">Technology Consulting</h4>
											<div class="space-y-2">
												<NavigationMenu.Link href="/case-studies/coffee-chain-transformation">
													{#snippet child()}
														<a
															href="/case-studies/coffee-chain-transformation"
															class="flex items-start space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
														>
															<div class="w-12 h-10 rounded-md overflow-hidden flex-shrink-0">
																<img 
																	src="/case-studies/coffee-background.jpg" 
																	alt="Coffee Chain"
																	class="w-full h-full object-cover"
																/>
															</div>
															<div class="flex-1">
																<div class="text-sm font-medium leading-tight text-gray-900">
																	Coffee Chain Digital Transformation
																</div>
																<p class="text-xs leading-snug text-gray-600 mt-1">
																	Unifying 200+ outlets with BigQuery analytics
																</p>
															</div>
														</a>
													{/snippet}
												</NavigationMenu.Link>
												
												<NavigationMenu.Link href="/case-studies/sencar-smoke-detection">
													{#snippet child()}
														<a
															href="/case-studies/sencar-smoke-detection"
															class="flex items-start space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700"
														>
															<div class="w-12 h-10 rounded-md overflow-hidden flex-shrink-0">
																<img 
																	src="/partners/sencar_slide1.jpg" 
																	alt="SENCAR"
																	class="w-full h-full object-cover"
																/>
															</div>
															<div class="flex-1">
																<div class="text-sm font-medium leading-tight text-gray-900">
																	SENCAR Smoke Detection AIoT
																</div>
																<p class="text-xs leading-snug text-gray-600 mt-1">
																	AI-powered detection for rental car fleets
																</p>
															</div>
														</a>
													{/snippet}
												</NavigationMenu.Link>
											</div>
										</div>
										
										<!-- IoT Solutions Section -->
										<div>
											<h4 class="text-sm font-bold text-gray-900 mb-3 px-3">IoT Solutions</h4>
											<div class="space-y-2">
												<NavigationMenu.Link href="/case-studies#iot-projects">
													{#snippet child()}
														<a
															href="/case-studies#iot-projects"
															class="flex items-start space-x-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700"
														>
															<div class="w-12 h-10 rounded-md overflow-hidden flex-shrink-0">
																<img 
																	src="/alphablock/mushroombox1.png" 
																	alt="Alpha Block"
																	class="w-full h-full object-cover"
																/>
															</div>
															<div class="flex-1">
																<div class="text-sm font-medium leading-tight text-gray-900">
																	Alpha Block
																</div>
																<p class="text-xs leading-snug text-gray-600 mt-1">
																	Mushroom growing automation system
																</p>
															</div>
														</a>
													{/snippet}
												</NavigationMenu.Link>
												
												<div class="px-3 py-2">
													<div class="text-xs font-medium text-gray-700 mb-2">Other Projects:</div>
													<div class="space-y-1">
														<a href="/case-studies#iot-projects" class="block text-xs text-gray-600 hover:text-green-600 transition-colors">• RDX - Remote Driving Experience</a>
														<a href="/case-studies#iot-projects" class="block text-xs text-gray-600 hover:text-green-600 transition-colors">• Energy Management Platform</a>
														<a href="/case-studies#iot-projects" class="block text-xs text-gray-600 hover:text-green-600 transition-colors">• Raspberry Pi & ESP32 Projects</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<!-- Learning Materials Icon -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger class="p-2 rounded-md text-gray-700 hover:text-medium-teal hover:bg-gray-100 transition-colors" title="Learning Materials">
								<BookOpen class="w-5 h-5" />
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div class="grid w-[400px] gap-3 p-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-md shadow-lg">
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

						<!-- Tech Hotpot Icon -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/tech-hotpot">
								{#snippet child()}
									<a href="/tech-hotpot" class="p-2 rounded-md text-gray-700 hover:text-medium-teal hover:bg-gray-100 transition-colors inline-flex items-center justify-center" title="Tech Hotpot">
										<!-- Custom Tech Hotpot Icon with Steam Animation -->
										<div class="relative w-5 h-5">
											<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
												<!-- Pot/Bowl -->
												<path d="M4 10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v6c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-6z" fill="#6B7280"/>
												<!-- Tech Circuit Pattern -->
												<circle cx="8" cy="13" r="1" fill="#10B981"/>
												<circle cx="12" cy="15" r="1" fill="#3B82F6"/>
												<circle cx="16" cy="13" r="1" fill="#F59E0B"/>
												<path d="M8 13h4m0 0h4" stroke="#9CA3AF" stroke-width="0.5"/>
											</svg>
											<!-- Animated Steam -->
											<div class="absolute -top-1 left-1/2 transform -translate-x-1/2">
												<div class="w-0.5 h-2 bg-gray-400 rounded-full opacity-60 animate-pulse" style="animation-delay: 0s;"></div>
											</div>
											<div class="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-x-1">
												<div class="w-0.5 h-1.5 bg-gray-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 0.3s;"></div>
											</div>
											<div class="absolute -top-1 left-1/2 transform -translate-x-1/2 translate-x-1">
												<div class="w-0.5 h-1.5 bg-gray-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 0.6s;"></div>
											</div>
										</div>
									</a>
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
					<a href="/services/ai-workflow-automation" class="block px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 hover:text-medium-teal transition-colors" onclick={closeMobileMenu}>AI Workflow</a>
					{#each aiWorkflowItems as item}
						<a href={item.href} class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-medium-teal hover:bg-gray-50 transition-colors rounded-md" onclick={closeMobileMenu}>
							{item.title}
						</a>
					{/each}
				</div>

				<!-- Services -->
				<div class="space-y-2">
					<a href="/services" class="block px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 hover:text-medium-teal transition-colors" onclick={closeMobileMenu}>Services</a>
					{#each servicesItems as service}
						<a href={service.href} class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-medium-teal hover:bg-gray-50 transition-colors rounded-md" onclick={closeMobileMenu}>
							{service.title}
						</a>
					{/each}
				</div>

				<!-- Case Studies -->
				<div class="space-y-2">
					<a href="/case-studies" class="block px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 hover:text-medium-teal transition-colors" onclick={closeMobileMenu}>Case Studies</a>
					
					<!-- Technology Consulting Section -->
					<div class="px-3 py-2">
						<div class="text-xs font-semibold text-blue-700 mb-2">Technology Consulting</div>
						<div class="space-y-2">
							<a href="/case-studies/coffee-chain-transformation" class="flex items-start space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors rounded-md" onclick={closeMobileMenu}>
								<div class="w-10 h-8 rounded overflow-hidden flex-shrink-0">
									<img 
										src="/case-studies/coffee-background.jpg" 
										alt="Coffee Chain"
										class="w-full h-full object-cover"
									/>
								</div>
								<div class="flex-1">
									<div class="font-medium text-gray-900 text-sm">Coffee Chain Digital Transformation</div>
									<div class="text-xs text-gray-500 mt-1">Unifying 200+ outlets with BigQuery analytics</div>
								</div>
							</a>
							
							<a href="/case-studies/sencar-smoke-detection" class="flex items-start space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors rounded-md" onclick={closeMobileMenu}>
								<div class="w-10 h-8 rounded overflow-hidden flex-shrink-0">
									<img 
										src="/partners/sencar_slide1.jpg" 
										alt="SENCAR"
										class="w-full h-full object-cover"
									/>
								</div>
								<div class="flex-1">
									<div class="font-medium text-gray-900 text-sm">SENCAR Smoke Detection AIoT</div>
									<div class="text-xs text-gray-500 mt-1">AI-powered detection for rental car fleets</div>
								</div>
							</a>
						</div>
					</div>
					
					<!-- IoT Solutions Section -->
					<div class="px-3 py-2">
						<div class="text-xs font-semibold text-green-700 mb-2">IoT Solutions</div>
						<div class="space-y-2">
							<a href="/case-studies#iot-projects" class="flex items-start space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors rounded-md" onclick={closeMobileMenu}>
								<div class="w-10 h-8 rounded overflow-hidden flex-shrink-0">
									<img 
										src="/alphablock/mushroombox1.png" 
										alt="Alpha Block"
										class="w-full h-full object-cover"
									/>
								</div>
								<div class="flex-1">
									<div class="font-medium text-gray-900 text-sm">Alpha Block</div>
									<div class="text-xs text-gray-500 mt-1">Mushroom growing automation system</div>
								</div>
							</a>
							
							<div class="px-3 py-1">
								<div class="text-xs font-medium text-gray-600 mb-1">Other Projects:</div>
								<div class="space-y-1 pl-2">
									<a href="/case-studies#iot-projects" class="block text-xs text-gray-500 hover:text-green-600 transition-colors py-1" onclick={closeMobileMenu}>• RDX - Remote Driving Experience</a>
									<a href="/case-studies#iot-projects" class="block text-xs text-gray-500 hover:text-green-600 transition-colors py-1" onclick={closeMobileMenu}>• Energy Management Platform</a>
									<a href="/case-studies#iot-projects" class="block text-xs text-gray-500 hover:text-green-600 transition-colors py-1" onclick={closeMobileMenu}>• Raspberry Pi & ESP32 Projects</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Learning Materials -->
				<div class="space-y-2">
					<div class="flex items-center px-3 py-2 text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100">
						<BookOpen class="w-4 h-4 mr-2" />
						Learning Materials
					</div>
					{#each freeResourcesItems as resource}
						<a href={resource.href} class="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-medium-teal hover:bg-gray-50 transition-colors rounded-md" onclick={closeMobileMenu}>
							{resource.title}
						</a>
					{/each}
				</div>

				<!-- Tech Hotpot -->
				<a href="/tech-hotpot" class="flex items-center px-3 py-3 rounded-md text-sm font-medium text-gray-700 hover:text-medium-teal hover:bg-gray-50 transition-colors" onclick={closeMobileMenu}>
					<div class="relative w-5 h-5 mr-2">
						<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
							<!-- Pot/Bowl -->
							<path d="M4 10c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v6c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-6z" fill="#6B7280"/>
							<!-- Tech Circuit Pattern -->
							<circle cx="8" cy="13" r="1" fill="#10B981"/>
							<circle cx="12" cy="15" r="1" fill="#3B82F6"/>
							<circle cx="16" cy="13" r="1" fill="#F59E0B"/>
							<path d="M8 13h4m0 0h4" stroke="#9CA3AF" stroke-width="0.5"/>
						</svg>
						<!-- Animated Steam -->
						<div class="absolute -top-1 left-1/2 transform -translate-x-1/2">
							<div class="w-0.5 h-2 bg-gray-400 rounded-full opacity-60 animate-pulse" style="animation-delay: 0s;"></div>
						</div>
						<div class="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-x-1">
							<div class="w-0.5 h-1.5 bg-gray-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 0.3s;"></div>
						</div>
						<div class="absolute -top-1 left-1/2 transform -translate-x-1/2 translate-x-1">
							<div class="w-0.5 h-1.5 bg-gray-400 rounded-full opacity-40 animate-pulse" style="animation-delay: 0.6s;"></div>
						</div>
					</div>
					Tech Hotpot
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	/* Additional custom styles if needed */
</style>