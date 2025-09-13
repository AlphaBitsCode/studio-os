<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	export let content: string | null | undefined;
	export let contentElement: HTMLElement | undefined = undefined;
	export let delay: number = 400;
	export let duration: number = 600;

	interface Heading {
		id: string;
		text: string;
		level: number;
		element?: HTMLElement;
	}

	let headings: Heading[] = [];
	let activeHeading: string = '';
	let observer: IntersectionObserver;
	let stickyHeaders: { h1?: Heading; h2?: Heading; h3?: Heading } = {};

	function extractHeadings() {
		if (!contentElement || !content) return;

		// Parse the HTML content to extract headings
		const parser = new DOMParser();
		const doc = parser.parseFromString(content, 'text/html');
		const headingElements = doc.querySelectorAll('h1, h2, h3');

		headings = Array.from(headingElements).map((el, index) => {
			const level = parseInt(el.tagName.charAt(1));
			const text = el.textContent || '';
			const id = `heading-${level}-${index}`;
			
			// Add ID to the actual DOM element
			setTimeout(() => {
				const actualElement = contentElement?.querySelector(`${el.tagName.toLowerCase()}:nth-of-type(${Array.from(doc.querySelectorAll(el.tagName.toLowerCase())).indexOf(el) + 1})`);
				if (actualElement) {
					actualElement.id = id;
				}
			}, 100);

			return { id, text, level };
		});

		// Set up intersection observer
		setupIntersectionObserver();
	}

	function setupIntersectionObserver() {
		if (observer) observer.disconnect();

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const headingId = entry.target.id;
						const heading = headings.find(h => h.id === headingId);
						
						if (heading) {
							activeHeading = headingId;
							updateStickyHeaders(heading);
						}
					}
				});
			},
			{
				rootMargin: '-20% 0px -70% 0px',
				threshold: 0
			}
		);

		// Observe all heading elements
		setTimeout(() => {
			headings.forEach(heading => {
				const element = document.getElementById(heading.id);
				if (element) {
					heading.element = element;
					observer.observe(element);
				}
			});
		}, 200);
	}

	function updateStickyHeaders(currentHeading: Heading) {
		const newStickyHeaders: { h1?: Heading; h2?: Heading; h3?: Heading } = {};

		// Find the current hierarchy
		const currentIndex = headings.findIndex(h => h.id === currentHeading.id);
		
		// Look backwards to find parent headings
		for (let i = currentIndex; i >= 0; i--) {
			const heading = headings[i];
			
			if (heading.level === 1 && !newStickyHeaders.h1) {
				newStickyHeaders.h1 = heading;
			} else if (heading.level === 2 && !newStickyHeaders.h2) {
				newStickyHeaders.h2 = heading;
			} else if (heading.level === 3 && !newStickyHeaders.h3) {
				newStickyHeaders.h3 = heading;
			}
		}

		// If current heading is the one we're showing, make sure it's included
		if (currentHeading.level === 1) newStickyHeaders.h1 = currentHeading;
		else if (currentHeading.level === 2) newStickyHeaders.h2 = currentHeading;
		else if (currentHeading.level === 3) newStickyHeaders.h3 = currentHeading;

		stickyHeaders = newStickyHeaders;
	}

	onMount(() => {
		if (content) {
			setTimeout(extractHeadings, 300);
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});

	$: if (content && contentElement) {
		setTimeout(extractHeadings, 100);
	}
</script>

<!-- Sticky Headers -->
{#if Object.keys(stickyHeaders).length > 0}
	<div class="sticky top-27 z-40 bg-green-50/70 backdrop-blur-md border border-t-0 rounded-b-lg">
		<div class="max-w-4xl mx-auto px-4 py-2">
			<!-- {#if stickyHeaders.h1}
				<div class="text-md font-semibold text-gray-900 truncate">
					{stickyHeaders.h1.text}
				</div>
			{/if} -->
			{#if stickyHeaders.h2}
				<span class="text-sm font-medium text-gray-700 truncate py-2" class:ml-4={stickyHeaders.h1}>
					{stickyHeaders.h2.text} 
				</span>
			{/if}
			{#if stickyHeaders.h3}
				<span class="text-sm font-light text-gray-500 truncate">
					‣ {stickyHeaders.h3.text}
				</span>
			{/if}
		</div>
	</div>
{/if}

<article 
	class="prose prose-lg prose-gray max-w-none"
	bind:this={contentElement}
	in:fly={{ y: 50, delay, duration }}
>
	{#if content}
		{@html content}
	{:else}
		<p class="text-gray-600 italic">Content not available.</p>
	{/if}
</article>