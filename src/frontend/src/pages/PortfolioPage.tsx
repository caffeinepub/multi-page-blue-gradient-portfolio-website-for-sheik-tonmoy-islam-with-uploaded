import { useEffect, useState } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import { setSEO } from '../lib/seo';
import ProjectsGrid from '../components/portfolio/ProjectsGrid';
import ProjectFilter from '../components/portfolio/ProjectFilter';
import SkillsDetailsSection from '../components/skills/SkillsDetailsSection';
import { projects } from '../data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    setSEO({
      title: 'Portfolio - Sheik Tonmoy Islam',
      description:
        'Explore my portfolio of projects spanning legal work, business consulting, digital marketing, design, video editing, and web development.',
    });
  }, []);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header + Filter + Projects Grid - Black text override for this section */}
        <div className="[&_*]:!text-black [&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_p]:!text-black [&_button]:!text-black">
          {/* Header */}
          <div className="text-center lg:text-left mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto lg:mx-0">
              A showcase of projects demonstrating my diverse capabilities
            </p>
          </div>

          {/* Filter */}
          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {/* Projects Grid */}
          <ProjectsGrid projects={filteredProjects} />
        </div>

        {/* Skills Details Section */}
        <div className="mt-24">
          <SkillsDetailsSection showHeading={true} />
        </div>
      </Container>
    </GradientBackground>
  );
}
