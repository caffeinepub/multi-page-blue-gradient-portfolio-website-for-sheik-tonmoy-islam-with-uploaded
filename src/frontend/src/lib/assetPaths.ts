/**
 * Utility functions for handling static asset paths
 */

/**
 * Normalizes an asset path to ensure it starts with a leading slash
 * and is properly formatted for use in img src attributes
 */
export function normalizeAssetPath(path: string): string {
  // Ensure the path starts with a leading slash
  if (!path.startsWith('/')) {
    return `/${path}`;
  }
  return path;
}

/**
 * Gets a fallback image path for when an asset fails to load
 * Uses the STI logo which is guaranteed to exist in production
 */
export function getFallbackImagePath(): string {
  return '/assets/generated/logo-sti.dim_512x512.png';
}
