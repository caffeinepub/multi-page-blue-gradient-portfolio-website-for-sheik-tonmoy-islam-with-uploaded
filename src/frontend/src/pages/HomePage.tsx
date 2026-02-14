import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import { setSEO } from '../lib/seo';

export default function HomePage() {
  useEffect(() => {
    setSEO({
      title: 'Sheik Tonmoy Islam - Multi-Disciplinary Professional',
      description:
        'Portfolio of Sheik Tonmoy Islam: Internship Junior Lawyer, Business Professional, Digital Marketer, Graphics Designer, Video Editor, and Website Designer.',
      ogTitle: 'Sheik Tonmoy Islam - Multi-Disciplinary Professional',
      ogDescription:
        'Combining legal expertise with creative and technical skills to deliver comprehensive solutions.',
      ogType: 'website',
    });
  }, []);

  return (
    <div>
      <HeroSection />
    </div>
  );
}
