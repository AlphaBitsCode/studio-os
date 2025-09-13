<script lang="ts">
	import '../app.css';
	import { page, navigating } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import BlogHeader from '$lib/components/BlogHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { setLoading } from '$lib/stores/loading';
	import type { LayoutData } from './$types';

	let { children, data }: { children: any; data: LayoutData } = $props();

	// Check if we're on a blog route
	let isBlogRoute = $derived($page.route.id?.startsWith('/(blog)'));
	
	// Show loading indicator during navigation
	$effect(() => {
		setLoading(!!$navigating);
	});
</script>

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="min-h-screen flex flex-col bg-white text-gray-900 transition-colors">
	{#if isBlogRoute}
		<BlogHeader user={data.user} />
	{:else}
		<Header user={data.user} />
	{/if}
	
	<main class="flex-1 pt-14">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
