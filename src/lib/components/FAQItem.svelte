<script lang="ts">
	import type { FAQItem } from '$lib/data/contact';

	export let faq: FAQItem;
	export let className: string = '';
</script>

<div class="rounded-lg bg-white p-6 shadow-sm {className}">
	<h3 class="mb-2 text-lg font-semibold">{faq.question}</h3>
	<p class="text-gray-600">{faq.answer}</p>
</div>
