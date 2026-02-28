/**
 * Computes the canonical shareable URL for the deployed site.
 * Includes the app base path (deployment identifier) when hosted under a subpath.
 */
export function getCanonicalSiteUrl(): string {
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  
  // Extract base path (e.g., "/sheik-tonmoy-islam" from "/sheik-tonmoy-islam/about")
  // If pathname is "/" or empty, basePath is empty
  const pathSegments = pathname.split('/').filter(Boolean);
  const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
  
  // Normalize: remove trailing slash
  const fullUrl = `${origin}${basePath}`;
  return fullUrl.endsWith('/') && fullUrl !== origin ? fullUrl.slice(0, -1) : fullUrl;
}
