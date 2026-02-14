export interface Project {
  title: string;
  description: string;
  category: string;
  tools: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Contract Analysis System',
    description:
      'Developed a systematic approach for reviewing and analyzing commercial contracts, ensuring compliance and identifying key risk factors.',
    category: 'legal',
    tools: ['Legal Research', 'Contract Law', 'Risk Analysis'],
  },
  {
    title: 'Business Growth Strategy',
    description:
      'Created comprehensive business development plan for a startup, including market analysis, competitive positioning, and growth roadmap.',
    category: 'business',
    tools: ['Strategic Planning', 'Market Research', 'Financial Modeling'],
  },
  {
    title: 'Social Media Campaign',
    description:
      'Designed and executed multi-platform social media marketing campaign that increased engagement by 150% and grew follower base significantly.',
    category: 'marketing',
    tools: ['Social Media', 'Content Strategy', 'Analytics'],
  },
  {
    title: 'Brand Identity Design',
    description:
      'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a professional services firm.',
    category: 'design',
    tools: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy'],
  },
  {
    title: 'Corporate Video Production',
    description:
      'Produced and edited professional corporate video showcasing company culture, values, and services with dynamic visuals and storytelling.',
    category: 'video',
    tools: ['Premiere Pro', 'After Effects', 'Color Grading'],
  },
  {
    title: 'E-Commerce Website',
    description:
      'Designed and developed responsive e-commerce website with modern UI, seamless checkout process, and mobile-first approach.',
    category: 'web',
    tools: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Legal Documentation Portal',
    description:
      'Created organized digital system for managing legal documents, templates, and research materials with easy search and retrieval.',
    category: 'legal',
    tools: ['Document Management', 'Organization', 'Workflow'],
  },
  {
    title: 'SEO Optimization Project',
    description:
      'Comprehensive SEO audit and optimization that improved organic search rankings and increased website traffic by 200%.',
    category: 'marketing',
    tools: ['SEO', 'Google Analytics', 'Keyword Research'],
  },
  {
    title: 'Marketing Collateral Suite',
    description:
      'Designed complete set of marketing materials including brochures, flyers, business cards, and digital assets with cohesive branding.',
    category: 'design',
    tools: ['InDesign', 'Illustrator', 'Print Design'],
  },
];
