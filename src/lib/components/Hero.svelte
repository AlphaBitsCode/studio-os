<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let variant: 'default' | 'services' | 'contact' | 'about' = 'default';
</script>

<!-- Hero Section with Modern Subtle Gradient -->
<section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-30">
		<div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgba(15,23,42,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
	</div>
	
	<!-- Gradient Overlay -->
	<div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-indigo-600/5"></div>
	
	<!-- Content -->
	<div class="relative py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
					{title}
				</h1>
				<p class="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
					{subtitle}
				</p>
			</div>
		</div>
	</div>
	
	<!-- Bottom fade -->
	<div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
</section>