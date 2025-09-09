import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type ThemeMode = 'light' | 'dark' | 'auto';
type ResolvedTheme = 'light' | 'dark';

// Get system theme preference
function getSystemTheme(): ResolvedTheme {
	if (!browser) return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Get initial theme mode from localStorage or default to auto
function getInitialThemeMode(): ThemeMode {
	if (!browser) return 'auto';
	
	const stored = localStorage.getItem('theme-mode');
	if (stored === 'light' || stored === 'dark' || stored === 'auto') {
		return stored;
	}
	
	return 'auto';
}

// Resolve theme mode to actual theme
function resolveTheme(mode: ThemeMode): ResolvedTheme {
	if (mode === 'auto') {
		return getSystemTheme();
	}
	return mode;
}

// Create the theme stores
export const themeMode = writable<ThemeMode>(getInitialThemeMode());
export const resolvedTheme = writable<ResolvedTheme>(resolveTheme(getInitialThemeMode()));

// Theme toggle function - cycles through light -> dark -> auto
export function toggleTheme() {
	themeMode.update(current => {
		let newMode: ThemeMode;
		switch (current) {
			case 'light':
				newMode = 'dark';
				break;
			case 'dark':
				newMode = 'auto';
				break;
			case 'auto':
				newMode = 'light';
				break;
		}
		
		if (browser) {
			localStorage.setItem('theme-mode', newMode);
			const resolved = resolveTheme(newMode);
			document.documentElement.classList.toggle('dark', resolved === 'dark');
			resolvedTheme.set(resolved);
		}
		
		return newMode;
	});
}

// Set specific theme mode
export function setThemeMode(mode: ThemeMode) {
	themeMode.set(mode);
	if (browser) {
		localStorage.setItem('theme-mode', mode);
		const resolved = resolveTheme(mode);
		document.documentElement.classList.toggle('dark', resolved === 'dark');
		resolvedTheme.set(resolved);
	}
}

// Initialize theme on client side
if (browser) {
	// Listen for system theme changes
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQuery.addEventListener('change', () => {
		themeMode.update(current => {
			if (current === 'auto') {
				const resolved = getSystemTheme();
				document.documentElement.classList.toggle('dark', resolved === 'dark');
				resolvedTheme.set(resolved);
			}
			return current;
		});
	});
	
	// Apply initial theme
	const initialMode = getInitialThemeMode();
	const initialResolved = resolveTheme(initialMode);
	document.documentElement.classList.toggle('dark', initialResolved === 'dark');
	resolvedTheme.set(initialResolved);
	
	// Subscribe to theme mode changes
	themeMode.subscribe(mode => {
		if (browser) {
			localStorage.setItem('theme-mode', mode);
			const resolved = resolveTheme(mode);
			document.documentElement.classList.toggle('dark', resolved === 'dark');
			resolvedTheme.set(resolved);
		}
	});
}

// Legacy export for backward compatibility
export const theme = resolvedTheme;