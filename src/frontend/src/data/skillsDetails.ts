export interface SkillDetail {
  id: string;
  title: string;
  description: string;
  categories: string[];
  imagePath: string;
  imageAlt: string;
}

export const skillsDetails: SkillDetail[] = [
  {
    id: 'legal',
    title: 'Legal Skills',
    description:
      'Modern legal practice requires a mix of technical, interpersonal, and business abilities. My legal expertise spans multiple practice areas with a focus on practical application and client service.',
    categories: [
      'Legal Research & Analysis: Navigating databases and case law to find relevant precedents',
      'Legal Writing: Drafting contracts, pleadings, briefs, and legal memorandums',
      'Land Law: Property transactions, title examination, and real estate matters',
      'Criminal Law: Defense strategies, case analysis, and courtroom advocacy',
      'Tax Law: Tax planning, compliance, and dispute resolution',
      'Contract Law: Agreement drafting, review, and negotiation',
      'Client Counseling: Explaining legal risks and options in plain language',
      'Negotiation: Finding middle ground to resolve disputes efficiently',
    ],
    imagePath: '/assets/generated/skills-legal.dim_1200x800.png',
    imageAlt: 'Legal skills and law practice illustration',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Digital marketing expertise across multiple channels and platforms, leveraging modern tools and strategies to drive measurable results and brand growth.',
    categories: [
      'Facebook Page Creation & Optimization: Building and optimizing business pages for maximum reach',
      'Post Scheduling: Strategic content calendar management and automated posting',
      'Ad Campaign Management: Running targeted Facebook and Instagram ad campaigns',
      'Social Media Management: Managing brand presence across multiple platforms',
      'SEO Expert: Search engine optimization for Google and other discovery engines',
      'SMM (Social Media Marketing): Organic growth strategies and engagement tactics',
      'Content Marketing: Creating blogs, guides, and valuable content',
      'Email Marketing: Personalized, automated email campaigns',
      'Analytics & Reporting: Data-driven decision making and performance tracking',
    ],
    imagePath: '/assets/generated/skills-digital-marketing.dim_1200x800.png',
    imageAlt: 'Digital marketing and social media management illustration',
  },
  {
    id: 'graphic-design',
    title: 'Graphics Design',
    description:
      'Comprehensive graphic design services creating visual identities and marketing materials that communicate brand messages effectively across all media.',
    categories: [
      'Logo Design: Creating memorable brand marks and complete logo systems',
      'Banner Design: Eye-catching web banners, social media covers, and display ads',
      'Flyer Design: Print and digital flyers for events, promotions, and announcements',
      'T-Shirt Design: Custom apparel graphics for merchandise and promotional wear',
      'Business Card Design: Professional cards that make lasting impressions',
      'Brochure Design: Multi-page marketing materials and product catalogs',
      'Poster Design: Large format designs for events and advertising',
      'Social Media Graphics: Platform-optimized visuals for posts and stories',
      'Brand Identity: Complete visual identity systems including color palettes and typography',
      'Packaging Design: Product packaging that stands out on shelves',
      'Infographic Design: Data visualization and information graphics',
      'Adobe Photoshop: Advanced photo editing and manipulation',
      'Adobe Illustrator: Vector graphics and scalable artwork creation',
    ],
    imagePath: '/assets/generated/skills-graphic-design.dim_1200x800.png',
    imageAlt: 'Graphic design tools and creative work illustration',
  },
  {
    id: 'video-editing',
    title: 'Video Editing (Basic)',
    description:
      'Essential video editing capabilities for creating engaging content, including fundamental techniques for social media, marketing, and presentation videos.',
    categories: [
      'Image Integration: Adding and animating still images within video projects',
      'Text & Titles: Creating on-screen text, lower thirds, and title sequences',
      'Basic Cuts & Transitions: Trimming clips and smooth scene transitions',
      'Audio Editing: Basic sound mixing, background music, and voiceover integration',
      'Color Correction: Adjusting brightness, contrast, and basic color grading',
      'Export Optimization: Rendering videos for different platforms and formats',
      'Video Trimming: Cutting and arranging footage for optimal pacing',
      'Simple Effects: Applying basic visual effects and filters',
      'Subtitle Addition: Adding captions and subtitles for accessibility',
    ],
    imagePath: '/assets/generated/skills-video-editing.dim_1200x800.png',
    imageAlt: 'Video editing software and timeline illustration',
  },
  {
    id: 'wordpress-webdesign',
    title: 'WordPress Website Design',
    description:
      'Complete WordPress website solutions from design to deployment, specializing in user-friendly, responsive websites that drive business results.',
    categories: [
      'WordPress Installation & Setup: Complete site configuration and hosting setup',
      'Theme Customization: Tailoring WordPress themes to match brand identity',
      'Page Builder Expertise: Elementor, WPBakery, and Gutenberg proficiency',
      'Responsive Design: Mobile-first websites that work on all devices',
      'Plugin Integration: Installing and configuring essential WordPress plugins',
      'E-commerce Setup: WooCommerce store creation and product management',
      'SEO Optimization: On-page SEO and WordPress SEO plugin configuration',
      'Website Security: Implementing security best practices and backup solutions',
      'Performance Optimization: Speed optimization and caching configuration',
      'Content Management: Training clients on WordPress content updates',
      'Custom Post Types: Creating specialized content structures',
      'Contact Forms: Building and integrating contact and lead capture forms',
      'Website Maintenance: Ongoing updates, backups, and technical support',
    ],
    imagePath: '/assets/generated/skills-wordpress-webdesign.dim_1200x800.png',
    imageAlt: 'WordPress website design and development illustration',
  },
];
