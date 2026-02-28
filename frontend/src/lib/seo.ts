interface SEOConfig {
  title: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export function setSEO(config: SEOConfig) {
  // Always set document title to exactly "Sheik Tonmoy Islam"
  document.title = "Sheik Tonmoy Islam";

  // Set or update meta description
  if (config.description) {
    setMetaTag('name', 'description', config.description);
  }

  // Set or update meta keywords
  if (config.keywords) {
    setMetaTag('name', 'keywords', config.keywords);
  }

  // Set Open Graph tags
  if (config.ogTitle) {
    setMetaTag('property', 'og:title', config.ogTitle);
  }
  if (config.ogDescription) {
    setMetaTag('property', 'og:description', config.ogDescription);
  }
  if (config.ogImage) {
    setMetaTag('property', 'og:image', config.ogImage);
  }
  if (config.ogType) {
    setMetaTag('property', 'og:type', config.ogType);
  }

  // Set canonical URL
  if (config.canonicalUrl) {
    setCanonicalLink(config.canonicalUrl);
  }
}

function setMetaTag(attribute: string, attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setCanonicalLink(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}
