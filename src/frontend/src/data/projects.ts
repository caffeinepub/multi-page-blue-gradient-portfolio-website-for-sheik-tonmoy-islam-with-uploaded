export interface Project {
  title: string;
  description: string;
  category: string;
  tools: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Corporate Legal Compliance Audit',
    description:
      'Conducted comprehensive legal compliance review for multinational corporation, identifying regulatory gaps and implementing corrective measures across multiple jurisdictions.',
    category: 'legal',
    tools: ['Corporate Law', 'Compliance', 'Risk Management', 'Regulatory Analysis'],
    link: 'https://www.legalzoom.com/business/business-operations/compliance',
  },
  {
    title: 'Strategic Business Transformation',
    description:
      'Led complete business transformation initiative for mid-sized enterprise, including operational restructuring, digital adoption strategy, and performance optimization resulting in 40% efficiency gains.',
    category: 'business',
    tools: ['Strategic Planning', 'Change Management', 'Process Optimization', 'KPI Development'],
    link: 'https://www.mckinsey.com/capabilities/transformation/how-we-help-clients',
  },
  {
    title: 'Multi-Channel Digital Marketing Campaign',
    description:
      'Designed and executed integrated digital marketing campaign across social media, email, and paid advertising channels, achieving 250% ROI and 180% increase in qualified leads.',
    category: 'marketing',
    tools: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Marketing Automation', 'Analytics'],
    link: 'https://www.hubspot.com/marketing',
  },
  {
    title: 'Enterprise Brand Identity System',
    description:
      'Created comprehensive brand identity system for Fortune 500 company including logo suite, visual guidelines, typography system, and digital asset library used across 15 countries.',
    category: 'design',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Brand Strategy', 'Design Systems'],
    link: 'https://www.behance.net/galleries/graphic-design',
  },
  {
    title: 'Documentary Film Production',
    description:
      'Produced and edited award-winning 45-minute documentary film featuring interviews, b-roll footage, motion graphics, and professional color grading for international film festival circuit.',
    category: 'video',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound Design', 'Storytelling'],
    link: 'https://www.adobe.com/products/premiere.html',
  },
  {
    title: 'Enterprise SaaS Web Application',
    description:
      'Architected and developed full-stack SaaS platform with React frontend, Node.js backend, real-time collaboration features, and scalable cloud infrastructure serving 10,000+ users.',
    category: 'web',
    tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    link: 'https://www.netlify.com/blog/enterprise-web-applications/',
  },
  {
    title: 'Intellectual Property Portfolio Management',
    description:
      'Managed comprehensive IP portfolio for technology startup including patent applications, trademark registrations, licensing agreements, and IP strategy development across multiple markets.',
    category: 'legal',
    tools: ['IP Law', 'Patent Research', 'Trademark Law', 'Licensing', 'Legal Documentation'],
    link: 'https://www.wipo.int/portal/en/',
  },
  {
    title: 'Market Entry Strategy Consulting',
    description:
      'Developed detailed market entry strategy for international expansion including competitive analysis, regulatory assessment, partnership identification, and go-to-market roadmap for Asian markets.',
    category: 'business',
    tools: ['Market Research', 'Competitive Analysis', 'Financial Modeling', 'Partnership Development'],
    link: 'https://www.bain.com/consulting-services/strategy/',
  },
  {
    title: 'Content Marketing & SEO Overhaul',
    description:
      'Executed complete content marketing transformation including SEO audit, content strategy development, blog creation, and link building campaign that increased organic traffic by 400% in 6 months.',
    category: 'marketing',
    tools: ['SEO', 'Content Strategy', 'Google Analytics', 'Ahrefs', 'WordPress', 'Copywriting'],
    link: 'https://moz.com/beginners-guide-to-seo',
  },
  {
    title: 'Motion Graphics Explainer Video Series',
    description:
      'Created series of 10 professional motion graphics explainer videos for SaaS product launch, featuring custom animations, kinetic typography, and engaging visual storytelling that boosted conversion rates by 65%.',
    category: 'video',
    tools: ['After Effects', 'Cinema 4D', 'Illustrator', 'Animation', 'Motion Design'],
    link: 'https://www.motionarray.com/learn/after-effects/motion-graphics/',
  },
];
