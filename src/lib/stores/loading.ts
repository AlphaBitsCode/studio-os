import { writable } from 'svelte/store';

// Global loading state store
export const isLoading = writable(false);

// Helper functions to manage loading state
export const setLoading = (loading: boolean) => {
	isLoading.set(loading);
};

export const startLoading = () => {
	isLoading.set(true);
};

export const stopLoading = () => {
	isLoading.set(false);
};