<script lang="ts">
	export interface Expertise {
		title: string;
		description: string;
	}

	export let expertise: Expertise;
	export let className: string = '';
</script>

<div class="rounded-lg bg-white p-6 text-center {className}">
	<h3 class="mb-2 text-lg font-semibold">{expertise.title}</h3>
	<p class="text-sm text-gray-600">{expertise.description}</p>
</div>
