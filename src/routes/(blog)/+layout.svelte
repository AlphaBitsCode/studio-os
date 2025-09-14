<script lang="ts">
	import type { LayoutData } from './$types';

	let { children, data }: { children: any; data: LayoutData } = $props();
</script>

<!-- Blog layout inherits from root layout, so we just render children -->
{@render children?.()}
