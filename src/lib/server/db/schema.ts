// Directus User Types
export interface DirectusUser {
	id: string;
	first_name?: string;
	last_name?: string;
	email: string;
	status: 'active' | 'invited' | 'draft' | 'suspended' | 'deleted';
	role?: string;
	date_created?: string;
	date_updated?: string;
}

// Session management for Directus authentication
export interface DirectusSession {
	id: string;
	user_id: string;
	token: string;
	expires_at: Date;
	created_at: Date;
}

// Export types for compatibility with existing code
export type User = DirectusUser;
export type Session = DirectusSession;

// Directus collection names
export const COLLECTIONS = {
	USERS: 'directus_users',
	SESSIONS: 'user_sessions' // Custom collection for session management
} as const;
