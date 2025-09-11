<svelte:head>
    <title>SVG Test Page</title>
</svelte:head>

<div class="p-8">
    <h1 class="text-2xl font-bold mb-8">SVG Animation Test</h1>
    
    <div class="space-y-8">
        <div>
            <h2 class="text-xl font-semibold mb-4">Services Hero Animation</h2>
            <img src="/animations/services-hero-animation.svg?v=1" alt="Services Hero" class="w-full max-w-2xl border" />
        </div>
        
        <div>
            <h2 class="text-xl font-semibold mb-4">AI Workflow Animation</h2>
            <img src="/animations/ai-workflow-animation.svg?v=1" alt="AI Workflow" class="w-full max-w-md border" />
        </div>
        
        <div>
            <h2 class="text-xl font-semibold mb-4">Data AI Animation</h2>
            <img src="/animations/data-ai-animation.svg?v=1" alt="Data AI" class="w-full max-w-md border" />
        </div>
        
        <div>
            <h2 class="text-xl font-semibold mb-4">Direct SVG Embed Test</h2>
            <div class="border p-4">
                <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" fill="#3B82F6">
                        <animate attributeName="r" values="30;40;30" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="100" y="55" font-family="Arial" font-size="16" fill="#1F2937">Test SVG</text>
                </svg>
            </div>
        </div>
    </div>
</div>