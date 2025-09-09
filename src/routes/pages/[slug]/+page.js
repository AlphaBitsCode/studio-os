/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const directus = getDirectusInstance(fetch);
    
    try {
        // Fetch page by slug from Directus pages collection
        const pages = await directus.request(
            readItems('pages', {
                filter: { slug: { _eq: params.slug } },
                limit: 1
            })
        );
        
        if (!pages || pages.length === 0) {
            throw error(404, 'Page not found');
        }
        
        return {
            page: pages[0]
        };
    } catch (err) {
        console.error('Failed to fetch page:', err);
        throw error(404, 'Page not found');
    }
}