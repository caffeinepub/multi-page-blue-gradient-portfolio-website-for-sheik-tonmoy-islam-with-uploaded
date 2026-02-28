import { useEffect } from 'react';
import type { BlogArticle } from '../../data/blogArticles';

interface ArticleStructuredDataProps {
  article: BlogArticle;
}

export default function ArticleStructuredData({ article }: ArticleStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "alternativeHeadline": article.subtitle,
      "image": `https://sheik-tonmoy-islam.com${article.image}`,
      "author": {
        "@type": "Person",
        "name": "Sheik Tonmoy Islam",
        "jobTitle": "Legal Consultant, Business Consultant, Digital Marketer, Graphic Designer, Video Editor, Website Designer & Developer",
        "url": "https://sheik-tonmoy-islam.com"
      },
      "publisher": {
        "@type": "Person",
        "name": "Sheik Tonmoy Islam",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sheik-tonmoy-islam.com/assets/generated/logo-sti.dim_512x512.png"
        }
      },
      "datePublished": "2026-02-01",
      "dateModified": "2026-02-21",
      "description": article.seoDescription,
      "articleBody": `${article.content.intro}\n\n${article.content.sections.map(s => `${s.heading}\n${s.content}`).join('\n\n')}\n\n${article.content.conclusion}`,
      "keywords": article.category,
      "articleSection": article.category,
      "inLanguage": "en-US"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  return null;
}
