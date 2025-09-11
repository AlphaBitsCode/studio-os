<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    
    interface Props {
        images: string[];
        size?: 'small' | 'medium' | 'large';
        interval?: number;
        alt?: string;
    }
    
    let { 
        images, 
        size = 'medium', 
        interval = 4000,
        alt = 'Slideshow image'
    }: Props = $props();
    
    let currentIndex = $state(0);
    let intervalId: NodeJS.Timeout | null = null;
    let mounted = $state(false);
    
    // Size configurations
    const sizeClasses = {
        small: 'h-64 md:h-80',
        medium: 'h-80 md:h-96',
        large: 'h-96 md:h-[32rem]'
    };
    
    onMount(() => {
        mounted = true;
        startSlideshow();
    });
    
    onDestroy(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
    
    function startSlideshow() {
        if (images.length <= 1) return;
        
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
        }, interval);
    }
    
    function goToSlide(index: number) {
        currentIndex = index;
        // Restart the interval
        if (intervalId) {
            clearInterval(intervalId);
            startSlideshow();
        }
    }
</script>

<div class="relative w-full {sizeClasses[size]} rounded-lg overflow-hidden bg-gray-100">
    <!-- Images -->
    {#each images as image, index}
        <div 
            class="absolute inset-0 transition-opacity duration-1000 ease-in-out {index === currentIndex ? 'opacity-100' : 'opacity-0'}"
        >
            <img 
                src={image} 
                alt="{alt} {index + 1}"
                class="w-full h-full object-cover ken-burns {mounted && index === currentIndex ? 'ken-burns-active' : ''}"
                loading={index === 0 ? 'eager' : 'lazy'}
            />
        </div>
    {/each}
    
    <!-- Navigation dots -->
    {#if images.length > 1}
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {#each images as _, index}
                <button
                    class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 {index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}"
                    onclick={() => goToSlide(index)}
                    aria-label="Go to slide {index + 1}"
                ></button>
            {/each}
        </div>
    {/if}
    
    <!-- Loading indicator -->
    {#if !mounted}
        <div class="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div class="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    {/if}
</div>

<style>
    .ken-burns {
        transform: scale(1);
        transition: transform 4s ease-in-out;
    }
    
    .ken-burns-active {
        transform: scale(1.1);
    }
    
    /* Ensure smooth transitions on mobile */
    @media (max-width: 768px) {
        .ken-burns {
            transition: transform 3s ease-in-out;
        }
        
        .ken-burns-active {
            transform: scale(1.05);
        }
    }
</style>