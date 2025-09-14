<script lang="ts">
	export interface Feature {
		title: string;
		description: string;
		icon: string;
		iconColor: 'medium-teal' | 'dark-teal' | 'light-mint' | 'cyan-accent';
	}

	export let feature: Feature;
	export let className: string = '';

	const iconColors = {
		'medium-teal': 'text-medium-teal',
		'dark-teal': 'text-dark-teal',
		'light-mint': 'text-light-mint',
		'cyan-accent': 'text-cyan-accent'
	};

	const bgColors = {
		'medium-teal': 'bg-light-mint/20',
		'dark-teal': 'bg-light-mint/20',
		'light-mint': 'bg-light-mint/20',
		'cyan-accent': 'bg-cyan-accent/20'
	};

	const iconColorClass = iconColors[feature.iconColor];
	const bgColorClass = bgColors[feature.iconColor];
</script>

<div class="text-center {className}">
	<div class="{bgColorClass} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
		{@html feature.icon}
	</div>
	<h3 class="mb-2 text-lg font-semibold">{feature.title}</h3>
	<p class="text-gray-600">{feature.description}</p>
</div>
