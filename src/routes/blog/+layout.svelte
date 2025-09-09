<script lang="ts">
	import '../../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';
	import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
	import { cn } from "$lib/utils.js";
	import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<svelte:head>
	<link rel="icon" href='https://alphabits.team/favicon.ico' type="image/x-icon" />
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-deep-navy text-gray-900 dark:text-white transition-colors">
	<header class="py-4 bg-medium-teal dark:bg-dark-teal">
		<NavigationMenu.Root viewport={false} class="justify-center">
			<NavigationMenu.List class="flex items-center justify-center">
				<NavigationMenu.Item>
					<NavigationMenu.Link>
						{#snippet child()}
							<a href="/" class={cn(navigationMenuTriggerStyle(), 'text-white')}>Back to Main Site</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<img src="/logos/logo_header.png" alt="Alpha Bits Logo" class="h-10 mx-4" />
				</NavigationMenu.Item>
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</header>
	
	<main class="flex-1 pt-16">
		{@render children?.()}
	</main>
	
	<Footer />
</div>