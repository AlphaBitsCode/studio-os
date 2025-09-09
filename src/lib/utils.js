import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * @param {...any} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/**
 * Type helper for components with element refs
 * @typedef {Object} WithElementRef
 * @template T
 */
export const WithElementRef = {};