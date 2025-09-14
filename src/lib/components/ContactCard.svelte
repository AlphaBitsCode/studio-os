<script lang="ts">
	import type { ContactMethod } from '$lib/data/contact';

	export let method: ContactMethod;
	export let className: string = '';

	const iconColors = {
		blue: 'bg-blue-100 text-blue-600',
		green: 'bg-green-100 text-green-600',
		purple: 'bg-purple-100 text-purple-600',
		orange: 'bg-orange-100 text-orange-600',
		indigo: 'bg-indigo-100 text-indigo-600'
	};

	const iconClass = iconColors[method.iconColor as keyof typeof iconColors] || iconColors.blue;
</script>

<div class="flex items-start space-x-4">
	<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg {iconClass}">
		{@html method.icon}
	</div>
	<div>
		<h4 class="mb-1 text-lg font-semibold text-gray-800">{method.title}</h4>
		{#each method.description as line}
			<p class="text-gray-600">{@html line}</p>
		{/each}
		{#if method.note}
			<p class="text-sm text-gray-500">{method.note}</p>
		{/if}
	</div>
</div>
