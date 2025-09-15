<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { getContext } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		value: triggerValue,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		value: string;
	} = $props();

	const tabsContext = getContext<{
		value: string;
		setValue: (newValue: string) => void;
	}>('tabs');

	let isActive = $derived(tabsContext?.value === triggerValue);

	function handleClick() {
		if (tabsContext) {
			tabsContext.setValue(triggerValue);
		}
	}
</script>

<button
	bind:this={ref}
	type="button"
	class={cn(
		'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		isActive
			? 'bg-background text-foreground shadow'
			: 'text-muted-foreground hover:text-foreground',
		className
	)}
	onclick={handleClick}
	{...restProps}
>
	{@render children?.()}
</button>