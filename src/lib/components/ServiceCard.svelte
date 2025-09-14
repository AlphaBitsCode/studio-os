<script lang="ts">
	export interface Service {
		title: string;
		description: string;
		href: string;
		icon: string;
		badge?: {
			text: string;
			variant: 'secondary' | 'outline' | 'default';
			class?: string;
		};
		colorTheme: 'blue' | 'emerald' | 'purple' | 'orange' | 'teal';
	}

	export let service: Service;
	export let className: string = '';

	const colorThemes = {
		blue: {
			border: 'border-blue-200',
			hoverBorder: 'hover:border-blue-400',
			shadow: 'hover:shadow-blue-100/50',
			bg: 'from-blue-50/50 to-indigo-50/30',
			iconBg: 'from-blue-500 to-indigo-600',
			buttonText: 'text-blue-600 hover:text-blue-800'
		},
		emerald: {
			border: 'border-emerald-200',
			hoverBorder: 'hover:border-emerald-400',
			shadow: 'hover:shadow-emerald-100/50',
			bg: 'from-emerald-50/50 to-teal-50/30',
			iconBg: 'from-emerald-500 to-teal-600',
			buttonText: 'text-emerald-600 hover:text-emerald-800'
		},
		purple: {
			border: 'border-purple-200',
			hoverBorder: 'hover:border-purple-400',
			shadow: 'hover:shadow-purple-100/50',
			bg: 'from-purple-50/50 to-pink-50/30',
			iconBg: 'from-purple-500 to-pink-600',
			buttonText: 'text-purple-600 hover:text-purple-800'
		},
		orange: {
			border: 'border-orange-200',
			hoverBorder: 'hover:border-orange-400',
			shadow: 'hover:shadow-orange-100/50',
			bg: 'from-orange-50/50 to-amber-50/30',
			iconBg: 'from-orange-500 to-amber-600',
			buttonText: 'text-orange-600 hover:text-orange-800'
		},
		teal: {
			border: 'border-teal-200',
			hoverBorder: 'hover:border-teal-400',
			shadow: 'hover:shadow-teal-100/50',
			bg: 'from-teal-50/50 to-cyan-50/30',
			iconBg: 'from-teal-500 to-cyan-600',
			buttonText: 'text-teal-600 hover:text-teal-800'
		}
	};

	const theme = colorThemes[service.colorTheme];
</script>

<Card
	class="group relative border-4 {theme.border} bg-white/90 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 {theme.hoverBorder} hover:shadow-2xl {theme.shadow} {className}"
>
	<div class="absolute inset-0 -z-10 rounded-lg bg-gradient-to-br {theme.bg}"></div>
	<div
		class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br {theme.iconBg} transition-transform duration-300 group-hover:scale-110"
	>
		{@html service.icon}
	</div>
	<div class="mb-4 flex items-center gap-3">
		<h3 class="text-2xl font-bold text-slate-900">{service.title}</h3>
		{#if service.badge}
			<Badge variant={service.badge.variant} class={service.badge.class || ''}>
				{service.badge.text}
			</Badge>
		{/if}
	</div>
	<p class="mb-6 text-lg leading-relaxed text-slate-600">
		{service.description}
	</p>
	<Button
		href={service.href}
		variant="link"
		class="h-auto p-0 text-lg font-bold {theme.buttonText} transition-transform duration-300 group-hover:translate-x-2"
	>
		Learn More →
	</Button>
</Card>
