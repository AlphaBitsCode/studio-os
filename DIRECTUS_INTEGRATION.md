# Directus Integration with SvelteKit

This project has been configured to use Directus as a headless CMS backend following the official [Directus SvelteKit tutorial](https://directus.io/docs/tutorials/getting-started/fetch-data-from-directus-with-sveltekit).

## Features Implemented

### ✅ Authentication System
- **Login**: Users can authenticate using their Directus credentials
- **Registration**: New users are created directly in Directus
- **Session Management**: Custom session handling with Directus user data
- **Server-Side Rendering**: Full SSR support for authentication

### ✅ Directus SDK Integration
- **Client Wrapper**: Proper Directus SDK wrapper with fetch support for SSR
- **Server Integration**: Server-side Directus client with static token authentication
- **Type Safety**: TypeScript interfaces for Directus collections

### ✅ Dynamic Content
- **Global Collection**: Site-wide metadata (title, description)
- **Dynamic Pages**: Pages created from Directus items with slug-based routing
- **Content Management**: WYSIWYG content support

## File Structure

```
src/
├── lib/
│   ├── directus.js                 # Client-side Directus wrapper
│   └── server/
│       ├── auth.ts                 # Authentication logic
│       └── db/
│           ├── index.ts            # Server-side Directus client
│           └── schema.ts           # TypeScript interfaces
├── routes/
│   ├── +page.js                    # Global data loading
│   ├── +page.svelte                # Homepage with Directus data
│   ├── pages/[slug]/               # Dynamic pages from Directus
│   │   ├── +page.js                # Page data loading by slug
│   │   └── +page.svelte            # Page template
│   └── demo/lucia/
│       ├── +page.server.ts         # Protected page
│       ├── +page.svelte            # User dashboard
│       └── login/
│           ├── +page.server.ts     # Login/register actions
│           └── +page.svelte        # Login form
└── hooks.server.ts                 # Server hooks with auth middleware
```

## Environment Variables

Make sure your `.env` file contains:

```env
# Server-side Directus connection
DIRECTUS_URL="http://localhost:11111"
DIRECTUS_SERVER_TOKEN="your-server-token"

# Client-side Directus connection
PUBLIC_DIRECTUS_URL="http://localhost:11111"

# Site configuration
PUBLIC_SITE_URL="http://localhost:5173"
```

## Required Directus Collections

To fully utilize this integration, create these collections in your Directus instance:

### 1. Global Collection (Singleton)
- **Collection Name**: `global`
- **Type**: Singleton (single object)
- **Fields**:
  - `title` (Text Input)
  - `description` (Text Input)
- **Permissions**: Public read access

### 2. Pages Collection
- **Collection Name**: `pages`
- **Fields**:
  - `slug` (Text Input) - URL slug for the page
  - `title` (Text Input) - Page title
  - `content` (WYSIWYG) - Page content
  - `description` (Text Input, Optional) - Meta description
- **Permissions**: Public read access

### 3. User Sessions Collection
- **Collection Name**: `user_sessions`
- **Fields**:
  - `id` (UUID, Primary Key)
  - `user_id` (UUID) - Reference to directus_users
  - `token` (Text)
  - `expires_at` (DateTime)
  - `created_at` (DateTime, Auto-generated)
- **Permissions**: No public access (server-only)

## How It Works

### Authentication Flow
1. User submits login form
2. Server validates credentials with Directus authentication API
3. On success, creates custom session in `user_sessions` collection
4. Session cookie is set for subsequent requests
5. Server middleware validates session on each request

### Data Fetching
1. **Server-Side**: Uses static token for full access to Directus API
2. **Client-Side**: Uses public API endpoints with proper fetch integration
3. **SSR Support**: Fetch function passed to Directus client for server-side rendering

### Dynamic Routing
- Pages are created dynamically based on `slug` field in Directus
- URL `/pages/about` fetches item with `slug: "about"` from `pages` collection
- 404 error thrown if page not found

## Usage Examples

### Fetching Data in a Route

```javascript
// src/routes/blog/+page.js
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    
    const posts = await directus.request(
        readItems('blog_posts', {
            sort: ['-date_created'],
            limit: 10
        })
    );
    
    return { posts };
}
```

### Using Data in Components

```svelte
<!-- src/routes/blog/+page.svelte -->
<script>
    export let data;
</script>

<h1>Blog Posts</h1>
{#each data.posts as post}
    <article>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
    </article>
{/each}
```

## Development

1. **Start Directus**: Make sure your Directus instance is running on the configured URL
2. **Configure Collections**: Create the required collections and set permissions
3. **Start SvelteKit**: Run `npm run dev` to start the development server
4. **Test Authentication**: Visit `/demo/lucia/login` to test login/registration
5. **Test Content**: Visit `/` to see global data, create pages in Directus and visit `/pages/[slug]`

## Security Notes

- Server token is kept private and only used server-side
- Public API only has read access to designated collections
- Session management is handled separately from Directus built-in sessions
- All user input is validated before processing

## Next Steps

- Add more collections (blog posts, products, etc.)
- Implement file uploads and media management
- Add user roles and permissions
- Set up email notifications
- Configure production deployment