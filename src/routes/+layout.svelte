<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<svelte:head>
	<link rel="icon" href='https://alphabits.team/favicon.ico' type="image/x-icon" />
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-deep-navy text-gray-900 dark:text-white transition-colors">
	<Header user={data.user} />
	
	<main class="flex-1 pt-16">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
