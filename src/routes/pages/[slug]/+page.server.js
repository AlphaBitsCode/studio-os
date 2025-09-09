/** @type {import('./$types').PageServerLoad} */
import directus from '$lib/server/db';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

// @ts-ignore - Directus typing issue with pages collection
const typedDirectus = /** @type {any} */ (directus);

export async function load({ params }) {
    
    try {
        // Fetch page by slug from Directus pages collection
		const pages = await typedDirectus.request(
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