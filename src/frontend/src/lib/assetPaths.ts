/**
 * Utility functions for handling static asset paths in a production-safe manner
 */

/**
 * Gets the runtime base path for the application
 * In production, this ensures assets resolve correctly even with non-root base paths
 */
function getBasePath(): string {
  // In Vite, import.meta.env.BASE_URL provides the base path
  // This is set during build and defaults to '/' for root deployments
  return import.meta.env.BASE_URL || '/';
}

/**
 * Normalizes an asset path to be production-safe and base-path-aware
 * Handles absolute URLs, data URLs, blob URLs, and relative/absolute asset paths
 */
export function normalizeAssetPath(path: string): string {
  // Leave absolute URLs unchanged (http://, https://)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Leave data URLs unchanged (data:)
  if (path.startsWith('data:')) {
    return path;
  }
  
  // Leave blob URLs unchanged (blob:)
  if (path.startsWith('blob:')) {
    return path;
  }
  
  // For asset paths, ensure they work with the app's base path
  const basePath = getBasePath();
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Combine base path with clean path
  // If basePath is '/', result is '/cleanPath'
  // If basePath is '/some-path/', result is '/some-path/cleanPath'
  return basePath + cleanPath;
}

/**
 * Gets a fallback image path for when an asset fails to load
 * Uses the STI logo which is guaranteed to exist in production
 * Also applies base-path-aware normalization for production safety
 */
export function getFallbackImagePath(): string {
  return normalizeAssetPath('/assets/generated/logo-sti.dim_512x512.png');
}
