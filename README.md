# LYRS LABS — Standalone API Workspace

Standalone deployment package for LYRS LABS. This is separate from `space.rayyy.my.id`; deploying this folder does not require changing the existing LYRS SPACE site.

## Deploy to GitHub Pages
1. Create a new repository (for example `lyrs-labs`).
2. Upload all files in this folder to the repository root.
3. In **Settings → Pages**, choose the branch and root folder.
4. If using a custom domain, configure it in **Settings → Pages** and add the DNS records requested by GitHub. No domain is preconfigured in this package.

## Deploy to Netlify or Vercel
Import the new repository. No build command is needed; this is a static site.

## Features
- Searchable Jaky API route catalog (routes included are the documented/known routes currently curated in `labs.js`).
- Category filters, query parameters, optional JSON body, custom `/v1/` path, request headers, response display and copy controls.
- API key is prefilled by default in `labs.js` and used with the `x-jaky-key` header. The key is embedded in client-side code and is visible to anyone who can access the deployed JavaScript.
- Official API documentation: https://api.jaky.dev/playground

## Important notes
- The Jaky API homepage advertises 140+ registered endpoints. This package includes the routes currently catalogued in `labs.js`; do not assume this list is a verified exhaustive mirror of every endpoint. Check the official Playground for the complete current inventory, exact parameters, methods and response types. Add any missing documented route to `endpointData` in `labs.js`.
- SECURITY WARNING: this version intentionally embeds the supplied API key in `labs.js` at the owner's request. It is not secret, even if the source repository is private, because the published JavaScript is delivered to visitors. Rotate the key if it should no longer be considered exposed. For real secrecy, move requests to a backend and store the key in a server environment variable.
- Requests run from the browser and may be blocked by API CORS policies or authentication requirements.
- Some endpoints may return images, files, or asynchronous task IDs rather than ordinary JSON.
