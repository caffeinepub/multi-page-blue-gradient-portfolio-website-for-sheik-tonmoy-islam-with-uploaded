import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import { setSEO } from '../lib/seo';
import SkillCategory from '../components/skills/SkillCategory';

export default function SkillsPage() {
  useEffect(() => {
    setSEO({
      title: 'Skills - Sheik Tonmoy Islam',
      description:
        'Comprehensive skill set spanning law, business, digital marketing, design, video editing, and web development.',
    });
  }, []);

  const skillCategories = [
    {
      title: 'Law & Compliance',
      skills: [
        { name: 'Legal Research', level: 85 },
        { name: 'Contract Review', level: 80 },
        { name: 'Compliance Analysis', level: 75 },
        { name: 'Document Preparation', level: 85 },
      ],
    },
    {
      title: 'Business & Strategy',
      skills: [
        { name: 'Business Planning', level: 90 },
        { name: 'Market Analysis', level: 85 },
        { name: 'Strategic Thinking', level: 88 },
        { name: 'Project Management', level: 82 },
      ],
    },
    {
      title: 'Digital Marketing',
      skills: [
        { name: 'SEO Optimization', level: 90 },
        { name: 'Social Media Marketing', level: 92 },
        { name: 'Content Strategy', level: 88 },
        { name: 'Email Marketing', level: 85 },
        { name: 'Brand Development', level: 87 },
      ],
    },
    {
      title: 'Design & Creative',
      skills: [
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe Illustrator', level: 88 },
        { name: 'Logo Design', level: 92 },
        { name: 'Brand Identity', level: 85 },
        { name: 'UI/UX Design', level: 80 },
      ],
    },
    {
      title: 'Video Production',
      skills: [
        { name: 'Adobe Premiere Pro', level: 88 },
        { name: 'Video Editing', level: 90 },
        { name: 'Motion Graphics', level: 82 },
        { name: 'Color Grading', level: 85 },
      ],
    },
    {
      title: 'Web & Technology',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'Responsive Design', level: 92 },
        { name: 'WordPress', level: 88 },
        { name: 'Web Design', level: 90 },
        { name: 'User Experience', level: 85 },
      ],
    },
  ];

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0">
            A comprehensive skill set across multiple disciplines
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </Container>
    </GradientBackground>
  );
}
