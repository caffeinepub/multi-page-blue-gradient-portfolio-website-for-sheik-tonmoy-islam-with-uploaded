import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://sheik-tonmoy-islam.com/#legal-service",
          "name": "Legal Consulting Services",
          "description": "Professional legal consulting, research, document preparation, contract review, and compliance support for businesses and individuals.",
          "provider": {
            "@type": "Person",
            "name": "Sheik Tonmoy Islam",
            "jobTitle": "Legal Consultant & Multi-Disciplinary Professional"
          },
          "serviceType": "Legal Consulting",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://sheik-tonmoy-islam.com/#business-service",
          "name": "Business Consulting Services",
          "description": "Strategic business consulting, market analysis, business planning, operational optimization, and growth strategies for enterprises.",
          "provider": {
            "@type": "Person",
            "name": "Sheik Tonmoy Islam",
            "jobTitle": "Business Consultant"
          },
          "serviceType": "Business Consulting",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://sheik-tonmoy-islam.com/#digital-marketing-service",
          "name": "Digital Marketing Services",
          "description": "Comprehensive digital marketing strategies including SEO, social media marketing, content creation, email campaigns, and brand development.",
          "provider": {
            "@type": "Person",
            "name": "Sheik Tonmoy Islam",
            "jobTitle": "Digital Marketing Expert"
          },
          "serviceType": "Digital Marketing",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://sheik-tonmoy-islam.com/#graphic-design-service",
          "name": "Graphic Design Services",
          "description": "Professional graphic design for logos, branding materials, social media graphics, marketing collateral, and visual identity development.",
          "provider": {
            "@type": "Person",
            "name": "Sheik Tonmoy Islam",
            "jobTitle": "Graphic Designer"
          },
          "serviceType": "Graphic Design",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://sheik-tonmoy-islam.com/#video-editing-service",
          "name": "Video Editing Services",
          "description": "Expert video editing for promotional videos, social media content, corporate presentations, documentaries, and creative projects.",
          "provider": {
            "@type": "Person",
            "name": "Sheik Tonmoy Islam",
            "jobTitle": "Video Editor"
          },
          "serviceType": "Video Editing",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://sheik-tonmoy-islam.com/#web-development-service",
          "name": "Website Design & Development Services",
          "description": "Modern, responsive website design and development creating user-friendly, visually appealing websites that drive engagement and conversions.",
          "provider": {
            "@type": "Person",
            "name": "Sheik Tonmoy Islam",
            "jobTitle": "Website Designer & Developer"
          },
          "serviceType": "Web Development",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        },
        {
          "@type": "Person",
          "@id": "https://sheik-tonmoy-islam.com/#person",
          "name": "Sheik Tonmoy Islam",
          "jobTitle": "Legal Consultant, Business Consultant, Digital Marketer, Graphic Designer, Video Editor, Website Designer & Developer",
          "description": "Multi-disciplinary professional combining legal expertise, business acumen, creative design skills, and technical development capabilities.",
          "url": "https://sheik-tonmoy-islam.com",
          "sameAs": []
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
