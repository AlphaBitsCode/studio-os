import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Get initial theme from localStorage or default to light
function getInitialTheme(): Theme {
	if (!browser) return 'light';
	
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}
	
	// Check system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	
	return 'light';
}

// Create the theme store
export const theme = writable<Theme>(getInitialTheme());

// Theme toggle function
export function toggleTheme() {
	theme.update(current => {
		const newTheme = current === 'light' ? 'dark' : 'light';
		
		if (browser) {
			localStorage.setItem('theme', newTheme);
			// Apply theme to document
			document.documentElement.classList.toggle('dark', newTheme === 'dark');
		}
		
		return newTheme;
	});
}

// Initialize theme on client side
if (browser) {
	theme.subscribe(value => {
		localStorage.setItem('theme', value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	});
	
	// Apply initial theme
	const initialTheme = getInitialTheme();
	document.documentElement.classList.toggle('dark', initialTheme === 'dark');
}