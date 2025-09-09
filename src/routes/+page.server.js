/** @type {import('./$types').PageServerLoad} */
import directus from '$lib/server/db';
import { readItems } from '@directus/sdk';

// @ts-ignore - Directus typing issue with global collection
const typedDirectus = /** @type {any} */ (directus);

export async function load() {
    
    try {
        // Example: Fetch from a global collection (you'll need to create this in Directus)
		const global = await typedDirectus.request(readItems('global'));
        
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