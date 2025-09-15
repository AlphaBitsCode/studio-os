<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
	} = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>