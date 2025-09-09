<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		href,
		children,
		...restProps
	}: NavigationMenuPrimitive.LinkProps & {
		href?: string;
	} = $props();
</script>

<NavigationMenuPrimitive.Link
	bind:ref
	class={cn(
		"",
		"justify-start",
		className
	)}
	{href}
	{...restProps}
>
	{@render children?.()}
</NavigationMenuPrimitive.Link>