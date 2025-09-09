<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>{data.global.title}</h1>
<p>{data.global.description}</p>

<div class="mt-8">
    <h2>Demo Links</h2>
    <ul class="space-y-2">
        <li><a href="/demo/lucia/login" class="text-blue-600 hover:underline">Authentication Demo (Directus Login)</a></li>
        <li><a href="/demo/paraglide" class="text-blue-600 hover:underline">Paraglide Demo</a></li>
    </ul>
</div>

<div class="mt-8 p-4 bg-gray-100 rounded">
    <h3>Directus Integration Status</h3>
    <p>✅ Directus SDK configured</p>
    <p>✅ Authentication with Directus backend</p>
    <p>✅ Server-side rendering support</p>
    <p>✅ Environment variables configured</p>
</div>
