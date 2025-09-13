<script lang="ts">
	import { fly } from 'svelte/transition';

	export let content: string | null | undefined;
	export let contentElement: HTMLElement | undefined = undefined;
	export let delay: number = 400;
	export let duration: number = 600;
</script>

<article 
	class="prose prose-lg prose-gray max-w-none"
	bind:this={contentElement}
	in:fly={{ y: 50, delay, duration }}
>
	{#if content}
		{@html content}
	{:else}
		<p class="text-gray-600 italic">Content not available.</p>
	{/if}
</article>