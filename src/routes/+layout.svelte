<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { theme } from '$lib/stores/theme';
	import type { LayoutData } from './$types';

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
	<Header user={data.user} />
	
	<main class="flex-1">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
