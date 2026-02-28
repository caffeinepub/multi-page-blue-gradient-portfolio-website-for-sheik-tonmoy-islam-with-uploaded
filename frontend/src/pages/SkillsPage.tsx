import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import SkillsDetailsSection from '../components/skills/SkillsDetailsSection';
import { setSEO } from '../lib/seo';
import { getCanonicalSiteUrl } from '../lib/siteUrl';

export default function SkillsPage() {
  useEffect(() => {
    setSEO({
      title: 'Skills - Sheik Tonmoy Islam',
      description:
        'Comprehensive expertise across legal consulting, business strategy, digital marketing, graphic design, video editing, and web development. Multi-disciplinary skills for complete project solutions.',
      keywords: 'legal skills, business consulting skills, digital marketing expertise, graphic design skills, video editing skills, web development skills, professional expertise',
      ogTitle: 'Professional Skills - Sheik Tonmoy Islam',
      ogDescription: 'Expertise across legal, business, marketing, creative, and technical domains.',
      canonicalUrl: getCanonicalSiteUrl() + '/skills',
    });
  }, []);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            A comprehensive skill set spanning legal, business, creative, and technical domains
          </p>
        </div>

        {/* Skills Details Section */}
        <SkillsDetailsSection />
      </Container>
    </GradientBackground>
  );
}
