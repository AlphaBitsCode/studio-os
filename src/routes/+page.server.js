/** @type {import('./$types').PageServerLoad} */
export async function load() {
	// Return fallback data since Directus integration is not configured
	return {
		global: {
			title: 'Welcome to AlphaBits',
			description: 'AI Workflow Automation & Digital Transformation Solutions'
		}
	};
}
