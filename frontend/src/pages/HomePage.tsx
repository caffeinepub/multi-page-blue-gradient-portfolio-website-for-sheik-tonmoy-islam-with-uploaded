import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import { setSEO } from '../lib/seo';
import { getCanonicalSiteUrl } from '../lib/siteUrl';

export default function HomePage() {
  useEffect(() => {
    setSEO({
      title: 'Sheik Tonmoy Islam - Multi-Disciplinary Professional',
      description:
        'Sheik Tonmoy Islam - Legal Consultant, Business Consultant, Digital Marketing Expert, Graphic Designer, Video Editor, Website Designer & Developer. Professional services for national and international clients.',
      keywords: 'legal consultant, business consultant, digital marketing, graphic design, video editing, web development, website design, Sheik Tonmoy Islam',
      ogTitle: 'Sheik Tonmoy Islam - Legal, Business, Marketing, Design & Development Services',
      ogDescription:
        'Multi-disciplinary professional offering Legal Consulting, Business Consulting, Digital Marketing, Graphic Design, Video Editing, and Web Development services worldwide.',
      ogType: 'website',
      ogImage: '/assets/generated/logo-sti.dim_512x512.png',
      canonicalUrl: getCanonicalSiteUrl() + '/',
    });
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  );
}
