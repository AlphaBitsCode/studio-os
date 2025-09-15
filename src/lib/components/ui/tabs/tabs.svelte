<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';
	import { setContext } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		children,
		defaultValue,
		value = $bindable(),
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		defaultValue?: string;
		value?: string;
	} = $props();

	// Initialize value if not provided
	if (value === undefined && defaultValue) {
		value = defaultValue;
	}

	// Set context for child components
	setContext('tabs', {
		get value() { return value || ''; },
		setValue: (newValue: string) => { value = newValue; }
	});
</script>

<div
	bind:this={ref}
	class={cn('', className)}
	{...restProps}
>
	{@render children?.()}
</div>