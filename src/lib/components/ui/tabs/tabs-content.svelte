<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		value: contentValue,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		value: string;
	} = $props();

	const tabsContext = getContext<{
		value: string;
		setValue: (newValue: string) => void;
	}>('tabs');

	let isActive = $derived(tabsContext?.value === contentValue);
</script>

{#if isActive}
	<div
		bind:this={ref}
		class={cn(
			'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}