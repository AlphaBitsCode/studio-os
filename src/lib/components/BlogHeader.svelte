<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from './Logo.svelte';
	import * as NavigationMenu from './ui/navigation-menu/index.js';
	import { navigationMenuTriggerStyle } from './ui/navigation-menu/navigation-menu-trigger.svelte';
	import { cn } from '$lib/utils.js';

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

<header class="bg-white dark:bg-deep-navy border-b border-gray-200 dark:border-dark-teal">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center">
					<Logo size="header" variant="default" alt="AlphaBits" />
				</a>
			</div>

			<!-- Simple Navigation for Blog -->
			<nav class="hidden md:flex">
				<NavigationMenu.Root class="relative z-10 flex max-w-max flex-1 items-center justify-center">
					<NavigationMenu.List class="group flex flex-1 list-none items-center justify-center space-x-1">
						<!-- Back to Main Site -->
						<NavigationMenu.Item>
							<NavigationMenu.Link href="/">
								{#snippet child()}
									<a href="/" class={navigationMenuTriggerStyle()}>Back to Main Site</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>

					</NavigationMenu.List>
				</NavigationMenu.Root>
			</nav>

			<!-- User Actions -->
			<div class="flex items-center space-x-2">
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
					<div class="flex items-center space-x-2">
						<a
							href="/auth/register"
							class="bg-medium-teal text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-dark-teal transition-colors"
						>
							Register
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>