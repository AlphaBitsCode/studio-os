<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';
	import TechHotpotIcon from './TechHotpotIcon.svelte';
	import * as NavigationMenu from './ui/navigation-menu/index.js';
	import { BookOpen } from 'lucide-svelte';
	import { isLoading } from '$lib/stores/loading';
	import {
		aiWorkflowItems,
		servicesItems,
		caseStudyItems,
		freeResourcesItems,
		iotProjects
	} from '$lib/data/navigation';

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

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		document.body.style.overflow = '';
	}

	// Handle escape key to close mobile menu
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			closeMobileMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header
	class="fixed top-0 right-0 left-0 z-90 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
>
	<!-- Loading Bar -->
	{#if $isLoading}
		<div
			class="absolute top-0 right-0 left-0 h-0.5 animate-pulse bg-gradient-to-r from-blue-300 via-blue-600 to-teal-700"
		>
			<div
				class="h-full animate-bounce bg-gradient-to-r from-blue-300 via-blue-600 to-teal-600"
				style="animation-duration: 1.5s;"
			></div>
		</div>
	{/if}
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-14 items-center justify-between">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center space-x-2">
					<Logo size="header" variant="default" alt="AlphaBits" />
					{#if $isLoading}
						<div class="flex items-center space-x-1">
							<div
								class="h-4 w-4 animate-spin rounded-full border-2 border-blue-300 border-t-transparent"
							></div>
						</div>
					{/if}
				</a>
			</div>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:flex" aria-label="Main navigation">
				<NavigationMenu.Root
					class="relative z-100 flex max-w-max flex-1 items-center justify-center"
				>
					<NavigationMenu.List
						class="group flex flex-1 list-none items-center justify-center space-x-6"
					>
						<!-- Team -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/about">
								{#snippet child()}
									<a
										href="/about"
										class="hover:text-medium-teal text-sm font-medium whitespace-nowrap text-gray-700 transition-colors"
										>Team</a
									>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>

						<!-- AI Workflow with Dropdown -->
						<NavigationMenu.Item>
							<NavigationMenu.Trigger
								class="hover:text-medium-teal text-sm font-medium whitespace-nowrap text-gray-700 transition-colors"
							>
								<a
									href="/services/ai-workflow-automation"
									class="hover:text-medium-teal transition-colors">AI Workflow</a
								>
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div
									class="grid w-[500px] gap-3 rounded-md border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm"
								>
									{#each aiWorkflowItems as item}
										<NavigationMenu.Link href={item.href}>
											{#snippet child()}
												<a
													href={item.href}
													class="hover:text-medium-teal focus:text-medium-teal block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100"
												>
													<div class="text-sm leading-none font-medium text-gray-900">
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
							<NavigationMenu.Trigger
								class="hover:text-medium-teal text-sm font-medium whitespace-nowrap text-gray-700 transition-colors"
							>
								<a href="/services" class="hover:text-medium-teal transition-colors">Services</a>
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div
									class="z-90 grid w-[600px] gap-3 rounded-md border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm md:grid-cols-2"
								>
									{#each servicesItems as service}
										<NavigationMenu.Link href={service.href}>
											{#snippet child()}
												<a
													href={service.href}
													class="hover:text-medium-teal focus:text-medium-teal block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100"
												>
													<div class="text-sm leading-none font-medium text-gray-900">
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
							<NavigationMenu.Trigger
								class="hover:text-medium-teal text-sm font-medium whitespace-nowrap text-gray-700 transition-colors"
							>
								Case Studies
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div
									class="z-90 grid w-[700px] gap-6 rounded-md border border-gray-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm"
								>
									<!-- Main Case Studies Link -->
									<NavigationMenu.Link href="/case-studies">
										{#snippet child()}
											<a
												href="/case-studies"
												class="flex items-center space-x-3 rounded-md border-2 border-blue-200 bg-blue-50/50 p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
											>
												<div
													class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100"
												>
													<svg
														class="h-6 w-6 text-blue-600"
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
												<div class="flex-1 space-y-1">
													<div class="text-sm leading-none font-bold text-blue-900">
														View All Case Studies
													</div>
													<p class="text-sm leading-snug text-blue-700">
														Explore our complete portfolio including IoT projects and digital
														transformations
													</p>
												</div>
											</a>
										{/snippet}
									</NavigationMenu.Link>

									<div class="grid gap-6 md:grid-cols-2">
										<!-- Technology Consulting Section -->
										<div>
											<h4 class="mb-3 px-3 text-sm font-bold text-gray-900">
												Technology Consulting
											</h4>
											<div class="space-y-2">
												<NavigationMenu.Link href="/case-studies/coffee-chain-transformation">
													{#snippet child()}
														<a
															href="/case-studies/coffee-chain-transformation"
															class="flex items-start space-x-3 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-blue-50 hover:text-blue-700 focus:bg-blue-50 focus:text-blue-700"
														>
															<div class="h-10 w-12 flex-shrink-0 overflow-hidden rounded-md">
																<img
																	src="/case-studies/coffee-background.jpg"
																	alt="Coffee Chain"
																	class="h-full w-full object-cover"
																/>
															</div>
															<div class="flex-1">
																<div class="text-sm leading-tight font-medium text-gray-900">
																	Coffee Chain Digital Transformation
																</div>
																<p class="mt-1 text-xs leading-snug text-gray-600">
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
															class="flex items-start space-x-3 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700"
														>
															<div class="h-10 w-12 flex-shrink-0 overflow-hidden rounded-md">
																<img
																	src="/partners/sencar_slide1.jpg"
																	alt="SENCAR"
																	class="h-full w-full object-cover"
																/>
															</div>
															<div class="flex-1">
																<div class="text-sm leading-tight font-medium text-gray-900">
																	SENCAR Smoke Detection AIoT
																</div>
																<p class="mt-1 text-xs leading-snug text-gray-600">
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
											<h4 class="mb-3 px-3 text-sm font-bold text-gray-900">IoT Solutions</h4>
											<div class="space-y-2">
												<NavigationMenu.Link href="/case-studies#iot-projects">
													{#snippet child()}
														<a
															href="/case-studies#iot-projects"
															class="flex items-start space-x-3 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700"
														>
															<div class="h-10 w-12 flex-shrink-0 overflow-hidden rounded-md">
																<img
																	src="/office/teamwork_1.jpg"
																	alt="Alpha Block"
																	class="h-full w-full object-cover"
																/>
															</div>
															<div class="flex-1">
																<div class="text-sm leading-tight font-medium text-gray-900">
																	Alpha Block
																</div>
																<p class="mt-1 text-xs leading-snug text-gray-600">
																	Mushroom growing automation system
																</p>
															</div>
														</a>
													{/snippet}
												</NavigationMenu.Link>

												<div class="px-3 py-2">
													<div class="mb-2 text-xs font-medium text-gray-700">Other Projects:</div>
													<div class="space-y-1">
														{#each iotProjects.slice(1) as project}
															<a
																href={project.href}
																class="block text-xs text-gray-600 transition-colors hover:text-green-600"
															>
																• {project.title}
															</a>
														{/each}
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
							<NavigationMenu.Trigger
								class="hover:text-medium-teal rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100"
								title="Learning Materials"
							>
								<BookOpen class="h-5 w-5" />
							</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<div
									class="grid w-[400px] gap-3 rounded-md border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm"
								>
									{#each freeResourcesItems as resource}
										<NavigationMenu.Link href={resource.href}>
											{#snippet child()}
												<a
													href={resource.href}
													class="hover:text-medium-teal focus:text-medium-teal block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100"
												>
													<div class="text-sm leading-none font-medium text-gray-900">
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
									<TechHotpotIcon
										size="small"
										href="/tech-hotpot"
										title="Tech Hotpot"
										className="p-2 rounded-md text-gray-700 hover:text-medium-teal hover:bg-gray-100 transition-colors"
									/>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</nav>

			<!-- Right side actions -->
			<div class="flex items-center space-x-2">
				<!-- Mobile menu button -->
				<button
					class="hover:text-medium-teal focus:ring-medium-teal inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:outline-none focus:ring-inset lg:hidden"
					aria-expanded={mobileMenuOpen}
					aria-controls="mobile-menu"
					aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
					onclick={toggleMobileMenu}
				>
					<span class="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
					{#if !mobileMenuOpen}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{:else}
						<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div id="mobile-menu" class="lg:hidden" role="navigation" aria-label="Mobile navigation">
			<div class="max-h-[calc(100vh-4rem)] space-y-3 overflow-y-auto px-4 pt-4 pb-6">
				<!-- Tech Hotpot - Featured First -->
				<a
					href="/tech-hotpot"
					class="flex items-center rounded-lg border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-4 text-base font-semibold text-orange-600 shadow-sm transition-all duration-200 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100"
					onclick={closeMobileMenu}
				>
					<TechHotpotIcon
						size="medium"
						href="/tech-hotpot"
						title="Tech Hotpot"
						showLabel={false}
						className="mr-3 flex-shrink-0"
					/>
					<div class="flex-1">
						<div class="font-bold text-orange-700">Tech Hotpot</div>
						<div class="mt-1 text-xs text-orange-600">Latest Tech Insights & Tutorials</div>
					</div>
					<svg
						class="h-5 w-5 text-orange-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</a>

				<!-- Team -->
				<a
					href="/about"
					class="hover:text-medium-teal block rounded-md px-3 py-3 text-sm font-medium text-blue-900 transition-colors hover:bg-gray-50"
					onclick={closeMobileMenu}
				>
					TEAM
				</a>

				<!-- AI Workflow -->
				<div class="space-y-2">
					<a
						href="/services/ai-workflow-automation"
						class="border-gray-250 hover:text-medium-teal block border-b px-3 py-2 text-xs font-bold tracking-wider text-blue-900 uppercase transition-colors"
						onclick={closeMobileMenu}>AI Workflow</a
					>
					{#each aiWorkflowItems as item}
						<a
							href={item.href}
							class="hover:text-medium-teal block rounded-md px-6 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
							onclick={closeMobileMenu}
						>
							{item.title}
						</a>
					{/each}
				</div>

				<!-- Services -->
				<div class="space-y-2">
					<a
						href="/services"
						class="border-gray-250 hover:text-medium-teal block border-b px-3 py-2 text-xs font-bold tracking-wider text-blue-900 uppercase transition-colors"
						onclick={closeMobileMenu}>Services</a
					>
					{#each servicesItems as service}
						<a
							href={service.href}
							class="hover:text-medium-teal block rounded-md px-6 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50"
							onclick={closeMobileMenu}
						>
							{service.title}
						</a>
					{/each}
				</div>

				<!-- Case Studies -->
				<div class="space-y-2">
					<a
						href="/case-studies"
						class="border-gray-250 hover:text-medium-teal block border-b px-3 py-2 text-xs font-bold tracking-wider text-blue-900 uppercase transition-colors"
						onclick={closeMobileMenu}>Case Studies</a
					>

					<!-- Technology Consulting Section -->
					<div class="px-3 py-2">
						<div class="mb-2 text-xs font-semibold text-blue-700">Technology Consulting</div>
						<div class="space-y-2">
							<a
								href="/case-studies/coffee-chain-transformation"
								class="flex items-start space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
								onclick={closeMobileMenu}
							>
								<div class="h-8 w-10 flex-shrink-0 overflow-hidden rounded">
									<img
										src="/case-studies/coffee-background.jpg"
										alt="Coffee Chain"
										class="h-full w-full object-cover"
									/>
								</div>
								<div class="flex-1">
									<div class="text-sm font-medium text-gray-900">
										Coffee Chain Digital Transformation
									</div>
									<div class="mt-1 text-xs text-gray-500">
										Unifying 200+ outlets with BigQuery analytics
									</div>
								</div>
							</a>

							<a
								href="/case-studies/sencar-smoke-detection"
								class="flex items-start space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-red-50 hover:text-red-700"
								onclick={closeMobileMenu}
							>
								<div class="h-8 w-10 flex-shrink-0 overflow-hidden rounded">
									<img
										src="/partners/sencar_slide1.jpg"
										alt="SENCAR"
										class="h-full w-full object-cover"
									/>
								</div>
								<div class="flex-1">
									<div class="text-sm font-medium text-gray-900">SENCAR Smoke Detection AIoT</div>
									<div class="mt-1 text-xs text-gray-500">
										AI-powered detection for rental car fleets
									</div>
								</div>
							</a>
						</div>
					</div>

					<!-- IoT Solutions Section -->
					<div class="px-3 py-2">
						<div class="mb-2 text-xs font-semibold text-green-700">IoT Solutions</div>
						<div class="space-y-2">
							<a
								href="/case-studies#iot-projects"
								class="flex items-start space-x-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700"
								onclick={closeMobileMenu}
							>
								<div class="h-8 w-10 flex-shrink-0 overflow-hidden rounded">
									<img
										src="/alphablock/mushroombox1.png"
										alt="Alpha Block"
										class="h-full w-full object-cover"
									/>
								</div>
								<div class="flex-1">
									<div class="text-sm font-medium text-gray-900">Alpha Block</div>
									<div class="mt-1 text-xs text-gray-500">Mushroom growing automation system</div>
								</div>
							</a>

							<div class="px-3 py-1">
								<div class="mb-1 text-xs font-medium text-gray-600">Other Projects:</div>
								<div class="space-y-1 pl-2">
									{#each iotProjects.slice(1) as project}
										<a
											href={project.href}
											class="block py-1 text-xs text-gray-500 transition-colors hover:text-green-600"
											onclick={closeMobileMenu}
										>
											• {project.title}
										</a>
									{/each}
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Learning Materials -->
				<div class="space-y-2">
					<div
						class="border-gray-250 flex items-center border-b px-3 py-2 text-xs font-bold tracking-wider text-blue-900 uppercase"
					>
						<BookOpen class="mr-2 h-4 w-4" />
						Learning Materials
					</div>
					{#each freeResourcesItems as resource}
						<a
							href={resource.href}
							class="hover:text-medium-teal block rounded-md px-6 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
							onclick={closeMobileMenu}
						>
							{resource.title}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</header>

<style>
	/* Additional custom styles if needed */
</style>
