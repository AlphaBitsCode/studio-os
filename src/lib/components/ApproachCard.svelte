<script lang="ts">
	export interface Approach {
		title: string;
		description: string;
		icon: string;
		iconColor: 'blue' | 'green' | 'purple' | 'orange' | 'indigo';
	}

	export let approach: Approach;
	export let className: string = '';

	const iconColors = {
		blue: 'bg-blue-100 text-blue-600',
		green: 'bg-green-100 text-green-600',
		purple: 'bg-purple-100 text-purple-600',
		orange: 'bg-orange-100 text-orange-600',
		indigo: 'bg-indigo-100 text-indigo-600'
	};

	const iconClass = iconColors[approach.iconColor];
</script>

<div class="text-center {className}">
	<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full {iconClass}">
		{@html approach.icon}
	</div>
	<h3 class="mb-3 text-xl font-semibold">{approach.title}</h3>
	<p class="text-gray-600">{approach.description}</p>
</div>
