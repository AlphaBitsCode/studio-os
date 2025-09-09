/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    
    try {
        // Example: Fetch from a global collection (you'll need to create this in Directus)
        const global = await directus.request(readItems('global'));
        
        return {
            global: global?.[0] || { title: 'Welcome to SvelteKit with Directus', description: 'This is a demo site powered by Directus CMS' }
        };
    } catch (error) {
        console.error('Failed to fetch global data:', error);
        // Return fallback data if Directus is not available
        return {
            global: { 
                title: 'Welcome to SvelteKit with Directus', 
                description: 'This is a demo site powered by Directus CMS (fallback data)' 
            }
        };
    }
}