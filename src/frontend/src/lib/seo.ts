interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export function setSEO(config: SEOConfig) {
  // Always set document title to exactly "Sheik Tonmoy Islam"
  document.title = "Sheik Tonmoy Islam";

  // Set or update meta description
  setMetaTag('name', 'description', config.description);

  // Set Open Graph tags
  if (config.ogTitle) {
    setMetaTag('property', 'og:title', config.ogTitle);
  }
  if (config.ogDescription) {
    setMetaTag('property', 'og:description', config.ogDescription);
  }
  if (config.ogType) {
    setMetaTag('property', 'og:type', config.ogType);
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
