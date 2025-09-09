<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.page.title}</title>
    <meta name="description" content={data.page.description || data.page.title} />
</svelte:head>

<article class="max-w-4xl mx-auto px-4 py-8">
    <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4">{data.page.title}</h1>
        {#if data.page.description}
            <p class="text-xl text-gray-600">{data.page.description}</p>
        {/if}
    </header>
    
    <main class="prose prose-lg max-w-none">
        {#if data.page.content}
            {@html data.page.content}
        {:else}
            <p>No content available for this page.</p>
        {/if}
    </main>
    
    <footer class="mt-12 pt-8 border-t border-gray-200">
        <a href="/" class="text-blue-600 hover:underline">← Back to Home</a>
    </footer>
</article>

<style>
    :global(.prose h1) {
        @apply text-3xl font-bold mb-4;
    }
    
    :global(.prose h2) {
        @apply text-2xl font-semibold mb-3 mt-8;
    }
    
    :global(.prose h3) {
        @apply text-xl font-semibold mb-2 mt-6;
    }
    
    :global(.prose p) {
        @apply mb-4 leading-relaxed;
    }
    
    :global(.prose ul, .prose ol) {
        @apply mb-4 pl-6;
    }
    
    :global(.prose li) {
        @apply mb-2;
    }
</style>