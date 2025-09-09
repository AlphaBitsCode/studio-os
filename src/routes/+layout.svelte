<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import BlogHeader from '$lib/components/BlogHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutData } from './$types';

	let { children, data }: { children: any; data: LayoutData } = $props();

	// Check if we're on a blog route
	let isBlogRoute = $derived($page.route.id?.startsWith('/(blog)'));
</script>

<svelte:head>
	<link rel="icon" href='https://alphabits.team/favicon.ico' type="image/x-icon" />
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white dark:bg-deep-navy text-gray-900 dark:text-white transition-colors">
	{#if isBlogRoute}
		<BlogHeader user={data.user} />
	{:else}
		<Header user={data.user} />
	{/if}
	
	<main class="flex-1 pt-16">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
