import { useEffect, useState } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import ProjectFilter from '../components/portfolio/ProjectFilter';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import SkillsDetailsSection from '../components/skills/SkillsDetailsSection';
import { setSEO } from '../lib/seo';
import { getCanonicalSiteUrl } from '../lib/siteUrl';
import { projects } from '../data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setSEO({
      title: 'Portfolio - Sheik Tonmoy Islam',
      description:
        'Explore the professional portfolio of Sheik Tonmoy Islam showcasing legal projects, business consulting work, digital marketing campaigns, graphic design, video editing, and web development projects.',
      keywords: 'portfolio, legal projects, business projects, marketing campaigns, design portfolio, video portfolio, web development portfolio',
      ogTitle: 'Portfolio - Sheik Tonmoy Islam',
      ogDescription: 'Professional work across legal, business, marketing, design, video, and web development.',
      canonicalUrl: getCanonicalSiteUrl() + '/portfolio',
    });
  }, []);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header - White text */}
        <div className="text-center mb-16 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A showcase of professional projects across multiple disciplines
          </p>
        </div>

        {/* Filter and Projects Grid - Black text override */}
        <div className="[&_*]:!text-black [&_h3]:!text-black [&_p]:!text-black [&_button]:!text-black">
          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProjectsGrid projects={filteredProjects} />
        </div>

        {/* Skills Details Section - Normal styling */}
        <div className="mt-24">
          <SkillsDetailsSection />
        </div>
      </Container>
    </GradientBackground>
  );
}
