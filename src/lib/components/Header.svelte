<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';

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
</script>

<header class="bg-white dark:bg-deep-navy shadow-sm border-b border-gray-200 dark:border-dark-teal">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center">
					<Logo size="header" variant="default" alt="AlphaBits" />
				</a>
			</div>

			<!-- Navigation -->
			<nav class="hidden md:flex space-x-8">
				<a href="/" class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium">
					Home
				</a>
				<div class="relative group">
					<a href="/services" class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium flex items-center">
						Services
						<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
						</svg>
					</a>
					<div class="absolute left-0 mt-2 w-64 bg-white dark:bg-deep-navy rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-dark-teal">
						<div class="py-2">
							<a href="/services/ai-workflow-automation" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								AI Workflow Automation
							</a>
							<a href="/services/fractional-cto" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								Fractional CTO & Tech Leadership
							</a>
							<a href="/services/data-ai-solutions" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								Data & AI Solutions
							</a>
							<a href="/services/digital-transformation" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								Digital Transformation
							</a>
							<a href="/services/iot-infrastructure" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								IoT Infrastructure
							</a>
						</div>
					</div>
				</div>
				<a href="/case-studies" class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium">
					Case Studies
				</a>
				<div class="relative group">
					<a href="/resources" class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium flex items-center">
						Resources
						<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
						</svg>
					</a>
					<div class="absolute left-0 mt-2 w-56 bg-white dark:bg-deep-navy rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 dark:border-dark-teal">
						<div class="py-2">
							<a href="/resources/secondbrains-framework" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								SecondBrains Framework
							</a>
							<a href="/resources/courses" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								Courses
							</a>
							<a href="/resources/blog" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								Blog / Insights
							</a>
							<a href="/resources/notion-wiki" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-light-mint/10 dark:hover:bg-dark-teal hover:text-medium-teal">
								Notion Wiki
							</a>
						</div>
					</div>
				</div>
				<a href="/about" class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium">
					About
				</a>
				<a href="/contact" class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium">
					Contact
				</a>
			</nav>

			<!-- User Menu -->
			<div class="flex items-center space-x-4">
				{#if user}
					<div class="flex items-center space-x-3">
						<span class="text-sm text-gray-700 dark:text-gray-300">
							Welcome, {user.first_name || user.email}
						</span>
						<button
							on:click={handleLogout}
							class="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
						>
							Logout
						</button>
					</div>
				{:else}
					<div class="flex items-center space-x-3">
						<a
							href="/auth/login"
							class="text-gray-700 dark:text-gray-300 hover:text-medium-teal dark:hover:text-light-mint px-3 py-2 text-sm font-medium"
						>
							Login
						</a>
						<a
							href="/auth/register"
							class="bg-medium-teal text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-dark-teal transition-colors"
						>
							Register
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>

<style>
	/* Additional custom styles if needed */
</style>