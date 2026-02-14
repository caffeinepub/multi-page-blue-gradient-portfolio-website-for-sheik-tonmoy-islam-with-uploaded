import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import { setSEO } from '../lib/seo';
import SkillsDetailsSection from '../components/skills/SkillsDetailsSection';

export default function SkillsPage() {
  useEffect(() => {
    setSEO({
      title: 'Skills - Sheik Tonmoy Islam',
      description:
        'Comprehensive skill set spanning law, business, digital marketing, design, video editing, and web development.',
    });
  }, []);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto lg:mx-0">
            A comprehensive skill set across multiple disciplines
          </p>
        </div>

        {/* Skills Details */}
        <SkillsDetailsSection showHeading={false} />
      </Container>
    </GradientBackground>
  );
}
