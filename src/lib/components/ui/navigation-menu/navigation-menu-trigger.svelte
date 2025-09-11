<script lang="ts">
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	import ChevronDownIcon from "lucide-svelte/icons/chevron-down";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: NavigationMenuPrimitive.TriggerProps = $props();
</script>

<NavigationMenuPrimitive.Trigger
	bind:ref
	class={cn("flex items-center whitespace-nowrap", "group", className)}
	{...restProps}
>
	{@render children?.()}
	<ChevronDownIcon
		class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180 flex-shrink-0"
		aria-hidden="true"
	/>
</NavigationMenuPrimitive.Trigger>