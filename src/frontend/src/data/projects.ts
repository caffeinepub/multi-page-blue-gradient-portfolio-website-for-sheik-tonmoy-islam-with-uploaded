export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  category: string;
  tools: string[];
  link: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  // LEGAL CATEGORY (10 projects)
  {
    title: 'Corporate Legal Compliance Audit',
    description:
      'Conducted comprehensive legal compliance review for multinational corporation, identifying regulatory gaps and implementing corrective measures across multiple jurisdictions.',
    category: 'legal',
    tools: ['Corporate Law', 'Compliance', 'Risk Management', 'Regulatory Analysis'],
    link: 'https://www.legalzoom.com/business/business-operations/compliance',
    images: [
      {
        src: '/assets/generated/portfolio-legal-01.dim_1600x1000.png',
        alt: 'Corporate legal compliance audit dashboard showing regulatory framework analysis',
      },
    ],
  },
  {
    title: 'Intellectual Property Portfolio Management',
    description:
      'Managed comprehensive IP portfolio for technology startup including patent applications, trademark registrations, licensing agreements, and IP strategy development across multiple markets.',
    category: 'legal',
    tools: ['IP Law', 'Patent Research', 'Trademark Law', 'Licensing', 'Legal Documentation'],
    link: 'https://www.wipo.int/portal/en/',
    images: [
      {
        src: '/assets/generated/portfolio-legal-02.dim_1600x1000.png',
        alt: 'Intellectual property portfolio management system with patent applications',
      },
    ],
  },
  {
    title: 'Contract Negotiation & Drafting',
    description:
      'Drafted and negotiated complex commercial contracts including vendor agreements, partnership deals, and service contracts ensuring legal protection and favorable terms for clients.',
    category: 'legal',
    tools: ['Contract Law', 'Negotiation', 'Legal Writing', 'Risk Assessment'],
    link: 'https://www.americanbar.org/groups/business_law/resources/contracts/',
    images: [
      {
        src: '/assets/generated/portfolio-legal-03.dim_1600x1000.png',
        alt: 'Contract negotiation and drafting workspace with legal documentation',
      },
    ],
  },
  {
    title: 'Employment Law Advisory Services',
    description:
      'Provided employment law guidance for growing companies including policy development, dispute resolution, termination procedures, and compliance with labor regulations.',
    category: 'legal',
    tools: ['Employment Law', 'HR Compliance', 'Policy Development', 'Dispute Resolution'],
    link: 'https://www.dol.gov/general/topics/employment-law',
    images: [
      {
        src: '/assets/generated/portfolio-legal-04.dim_1600x1000.png',
        alt: 'Employment law advisory dashboard with policy development framework',
      },
    ],
  },
  {
    title: 'Mergers & Acquisitions Due Diligence',
    description:
      'Conducted thorough legal due diligence for M&A transactions including document review, risk assessment, regulatory compliance verification, and transaction structuring support.',
    category: 'legal',
    tools: ['M&A Law', 'Due Diligence', 'Corporate Finance', 'Transaction Advisory'],
    link: 'https://www.investopedia.com/terms/d/duediligence.asp',
    images: [
      {
        src: '/assets/generated/portfolio-legal-05.dim_1600x1000.png',
        alt: 'Mergers and acquisitions due diligence process with document review',
      },
    ],
  },
  {
    title: 'Data Privacy & GDPR Compliance',
    description:
      'Implemented comprehensive data privacy program ensuring GDPR compliance including privacy policy development, data mapping, consent management, and breach response procedures.',
    category: 'legal',
    tools: ['Data Privacy Law', 'GDPR', 'Compliance Management', 'Privacy Policy'],
    link: 'https://gdpr.eu/',
    images: [
      {
        src: '/assets/generated/portfolio-legal-06.dim_1600x1000.png',
        alt: 'Data privacy and GDPR compliance management system',
      },
    ],
  },
  {
    title: 'Litigation Support & Case Management',
    description:
      'Provided litigation support services including case research, document preparation, evidence organization, and trial preparation for complex commercial disputes.',
    category: 'legal',
    tools: ['Litigation', 'Legal Research', 'Case Management', 'Trial Preparation'],
    link: 'https://www.uscourts.gov/',
    images: [
      {
        src: '/assets/generated/portfolio-legal-07.dim_1600x1000.png',
        alt: 'Litigation support and case management system with document organization',
      },
    ],
  },
  {
    title: 'Real Estate Transaction Advisory',
    description:
      'Advised on commercial real estate transactions including property acquisitions, lease negotiations, title review, and closing coordination for multi-million dollar deals.',
    category: 'legal',
    tools: ['Real Estate Law', 'Property Law', 'Title Review', 'Transaction Coordination'],
    link: 'https://www.nar.realtor/legal',
    images: [
      {
        src: '/assets/generated/portfolio-legal-08.dim_1600x1000.png',
        alt: 'Real estate transaction advisory with property acquisition documentation',
      },
    ],
  },
  {
    title: 'Corporate Governance Framework',
    description:
      'Developed comprehensive corporate governance framework including board policies, shareholder agreements, compliance procedures, and ethical guidelines for public company.',
    category: 'legal',
    tools: ['Corporate Governance', 'Board Advisory', 'Compliance', 'Ethics'],
    link: 'https://www.sec.gov/spotlight/corporate-governance.shtml',
    images: [
      {
        src: '/assets/generated/portfolio-legal-09.dim_1600x1000.png',
        alt: 'Corporate governance framework with board policies and compliance procedures',
      },
    ],
  },
  {
    title: 'Regulatory Compliance Program',
    description:
      'Established enterprise-wide regulatory compliance program including policy creation, training development, monitoring systems, and audit procedures for financial services firm.',
    category: 'legal',
    tools: ['Regulatory Compliance', 'Financial Regulation', 'Audit', 'Training'],
    link: 'https://www.finra.org/rules-guidance/key-topics/compliance',
    images: [
      {
        src: '/assets/generated/portfolio-legal-10.dim_1600x1000.png',
        alt: 'Regulatory compliance program with monitoring and audit systems',
      },
    ],
  },

  // BUSINESS CATEGORY (10 projects)
  {
    title: 'Strategic Business Transformation',
    description:
      'Led complete business transformation initiative for mid-sized enterprise, including operational restructuring, digital adoption strategy, and performance optimization resulting in 40% efficiency gains.',
    category: 'business',
    tools: ['Strategic Planning', 'Change Management', 'Process Optimization', 'KPI Development'],
    link: 'https://www.mckinsey.com/capabilities/transformation/how-we-help-clients',
    images: [
      {
        src: '/assets/generated/portfolio-business-01.dim_1600x1000.png',
        alt: 'Strategic business transformation roadmap with operational restructuring phases',
      },
    ],
  },
  {
    title: 'Market Entry Strategy Development',
    description:
      'Developed comprehensive market entry strategy for international expansion including competitive analysis, market sizing, go-to-market planning, and partnership identification.',
    category: 'business',
    tools: ['Market Research', 'Competitive Analysis', 'Strategy Development', 'Business Planning'],
    link: 'https://www.bcg.com/capabilities/strategy/market-entry',
    images: [
      {
        src: '/assets/generated/portfolio-business-02.dim_1600x1000.png',
        alt: 'Market entry strategy with competitive analysis and expansion planning',
      },
    ],
  },
  {
    title: 'Business Process Reengineering',
    description:
      'Redesigned core business processes for manufacturing company achieving 35% cost reduction and 50% improvement in cycle time through automation and workflow optimization.',
    category: 'business',
    tools: ['Process Mapping', 'Lean Six Sigma', 'Automation', 'Workflow Design'],
    link: 'https://www.lean.org/lexicon-terms/business-process-reengineering/',
    images: [
      {
        src: '/assets/generated/portfolio-business-03.dim_1600x1000.png',
        alt: 'Business process reengineering with workflow optimization and automation',
      },
    ],
  },
  {
    title: 'Financial Planning & Analysis',
    description:
      'Implemented comprehensive FP&A framework including budgeting processes, financial modeling, variance analysis, and executive reporting for $50M revenue company.',
    category: 'business',
    tools: ['Financial Modeling', 'Budgeting', 'Forecasting', 'Business Intelligence'],
    link: 'https://www.investopedia.com/terms/f/financial-planning-analysis.asp',
    images: [
      {
        src: '/assets/generated/portfolio-business-04.dim_1600x1000.png',
        alt: 'Financial planning and analysis dashboard with budgeting and forecasting',
      },
    ],
  },
  {
    title: 'Supply Chain Optimization',
    description:
      'Optimized end-to-end supply chain operations including vendor management, inventory optimization, logistics planning, and demand forecasting reducing costs by 25%.',
    category: 'business',
    tools: ['Supply Chain Management', 'Logistics', 'Inventory Optimization', 'Vendor Management'],
    link: 'https://www.supplychainbrain.com/',
    images: [
      {
        src: '/assets/generated/portfolio-business-05.dim_1600x1000.png',
        alt: 'Supply chain optimization with inventory management and logistics planning',
      },
    ],
  },
  {
    title: 'Product Launch Strategy',
    description:
      'Orchestrated successful product launch for SaaS startup including positioning strategy, pricing model, channel strategy, and launch campaign achieving 150% of first-year targets.',
    category: 'business',
    tools: ['Product Management', 'Go-to-Market Strategy', 'Pricing Strategy', 'Launch Planning'],
    link: 'https://www.productplan.com/learn/product-launch-strategy/',
    images: [
      {
        src: '/assets/generated/portfolio-business-06.dim_1600x1000.png',
        alt: 'Product launch strategy with go-to-market planning and positioning',
      },
    ],
  },
  {
    title: 'Customer Experience Transformation',
    description:
      'Redesigned customer journey and experience touchpoints resulting in 45% improvement in customer satisfaction scores and 30% increase in customer lifetime value.',
    category: 'business',
    tools: ['Customer Experience', 'Journey Mapping', 'Service Design', 'CX Analytics'],
    link: 'https://www.forrester.com/what-we-do/customer-experience/',
    images: [
      {
        src: '/assets/generated/portfolio-business-07.dim_1600x1000.png',
        alt: 'Customer experience transformation with journey mapping and touchpoint design',
      },
    ],
  },
  {
    title: 'Business Intelligence Implementation',
    description:
      'Deployed enterprise BI solution with data warehousing, automated reporting, predictive analytics, and executive dashboards enabling data-driven decision making.',
    category: 'business',
    tools: ['Business Intelligence', 'Data Analytics', 'Tableau', 'Data Warehousing'],
    link: 'https://www.tableau.com/learn/articles/business-intelligence',
    images: [
      {
        src: '/assets/generated/portfolio-business-08.dim_1600x1000.png',
        alt: 'Business intelligence implementation with analytics dashboards and reporting',
      },
    ],
  },
  {
    title: 'Organizational Restructuring',
    description:
      'Led organizational restructuring initiative including role redesign, team realignment, reporting structure optimization, and change management for 200+ employee company.',
    category: 'business',
    tools: ['Organizational Design', 'Change Management', 'HR Strategy', 'Leadership Development'],
    link: 'https://www.shrm.org/topics-tools/tools/toolkits/managing-organizational-change',
    images: [
      {
        src: '/assets/generated/portfolio-business-09.dim_1600x1000.png',
        alt: 'Organizational restructuring with team realignment and role redesign',
      },
    ],
  },
  {
    title: 'Strategic Partnership Development',
    description:
      'Identified and negotiated strategic partnerships generating $5M in new revenue including alliance agreements, joint ventures, and channel partnerships.',
    category: 'business',
    tools: ['Partnership Strategy', 'Business Development', 'Negotiation', 'Alliance Management'],
    link: 'https://www.forbes.com/sites/forbesbusinesscouncil/strategic-partnerships/',
    images: [
      {
        src: '/assets/generated/portfolio-business-10.dim_1600x1000.png',
        alt: 'Strategic partnership development with alliance agreements and joint ventures',
      },
    ],
  },

  // MARKETING CATEGORY (10 projects)
  {
    title: 'Multi-Channel Digital Marketing Campaign',
    description:
      'Designed and executed integrated digital marketing campaign across social media, email, and paid advertising channels, achieving 250% ROI and 180% increase in qualified leads.',
    category: 'marketing',
    tools: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Marketing Automation', 'Analytics'],
    link: 'https://www.hubspot.com/marketing',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-01.dim_1600x1000.png',
        alt: 'Multi-channel digital marketing campaign dashboard with integrated analytics',
      },
    ],
  },
  {
    title: 'Content Marketing Strategy',
    description:
      'Developed and executed comprehensive content marketing strategy including blog content, whitepapers, case studies, and video content driving 300% increase in organic traffic.',
    category: 'marketing',
    tools: ['Content Strategy', 'SEO', 'Copywriting', 'Content Management', 'Analytics'],
    link: 'https://contentmarketinginstitute.com/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-02.dim_1600x1000.png',
        alt: 'Content marketing strategy with SEO optimization and content calendar',
      },
    ],
  },
  {
    title: 'Social Media Brand Building',
    description:
      'Built social media presence from zero to 100K+ followers across platforms with engaging content strategy, influencer partnerships, and community management.',
    category: 'marketing',
    tools: ['Social Media Marketing', 'Community Management', 'Influencer Marketing', 'Content Creation'],
    link: 'https://www.socialmediaexaminer.com/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-03.dim_1600x1000.png',
        alt: 'Social media brand building with engagement metrics and content strategy',
      },
    ],
  },
  {
    title: 'Email Marketing Automation',
    description:
      'Implemented sophisticated email marketing automation including segmentation, personalization, drip campaigns, and behavioral triggers achieving 45% open rate and 12% CTR.',
    category: 'marketing',
    tools: ['Email Marketing', 'Marketing Automation', 'Segmentation', 'A/B Testing'],
    link: 'https://mailchimp.com/marketing-glossary/email-marketing/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-04.dim_1600x1000.png',
        alt: 'Email marketing automation with segmentation and personalization workflows',
      },
    ],
  },
  {
    title: 'SEO & Organic Growth Strategy',
    description:
      'Executed comprehensive SEO strategy including technical optimization, content optimization, link building, and local SEO achieving first-page rankings for 50+ keywords.',
    category: 'marketing',
    tools: ['SEO', 'Keyword Research', 'Technical SEO', 'Link Building', 'Google Analytics'],
    link: 'https://moz.com/beginners-guide-to-seo',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-05.dim_1600x1000.png',
        alt: 'SEO and organic growth strategy with keyword rankings and traffic analytics',
      },
    ],
  },
  {
    title: 'PPC Campaign Management',
    description:
      'Managed multi-platform PPC campaigns with budget optimization, ad creative testing, landing page optimization, and conversion tracking delivering 320% ROAS.',
    category: 'marketing',
    tools: ['Google Ads', 'PPC Management', 'Conversion Optimization', 'Ad Copywriting'],
    link: 'https://ads.google.com/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-06.dim_1600x1000.png',
        alt: 'PPC campaign management with ad performance and conversion tracking',
      },
    ],
  },
  {
    title: 'Brand Positioning & Messaging',
    description:
      'Developed comprehensive brand positioning strategy including value proposition, messaging framework, brand voice guidelines, and competitive differentiation.',
    category: 'marketing',
    tools: ['Brand Strategy', 'Positioning', 'Messaging', 'Market Research'],
    link: 'https://www.ama.org/topics/branding/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-07.dim_1600x1000.png',
        alt: 'Brand positioning and messaging framework with value proposition',
      },
    ],
  },
  {
    title: 'Marketing Analytics & Attribution',
    description:
      'Implemented marketing analytics framework with multi-touch attribution, customer journey tracking, ROI measurement, and predictive modeling for data-driven decisions.',
    category: 'marketing',
    tools: ['Marketing Analytics', 'Attribution Modeling', 'Google Analytics', 'Data Visualization'],
    link: 'https://www.google.com/analytics/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-08.dim_1600x1000.png',
        alt: 'Marketing analytics dashboard with attribution modeling and ROI tracking',
      },
    ],
  },
  {
    title: 'Influencer Marketing Campaign',
    description:
      'Orchestrated influencer marketing campaign with 20+ influencers across niches generating 5M+ impressions and 50K+ conversions with authentic brand partnerships.',
    category: 'marketing',
    tools: ['Influencer Marketing', 'Partnership Management', 'Campaign Management', 'Analytics'],
    link: 'https://influencermarketinghub.com/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-09.dim_1600x1000.png',
        alt: 'Influencer marketing campaign with partnership metrics and engagement data',
      },
    ],
  },
  {
    title: 'Marketing Automation Platform',
    description:
      'Deployed enterprise marketing automation platform with lead scoring, nurture campaigns, CRM integration, and advanced segmentation improving conversion rates by 65%.',
    category: 'marketing',
    tools: ['Marketing Automation', 'Lead Scoring', 'CRM Integration', 'Campaign Management'],
    link: 'https://www.marketo.com/',
    images: [
      {
        src: '/assets/generated/portfolio-marketing-10.dim_1600x1000.png',
        alt: 'Marketing automation platform with lead scoring and nurture campaigns',
      },
    ],
  },

  // DESIGN CATEGORY (10 projects)
  {
    title: 'Enterprise Brand Identity System',
    description:
      'Created comprehensive brand identity system for Fortune 500 company including logo suite, visual guidelines, typography system, and digital asset library used across 15 countries.',
    category: 'design',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Brand Strategy', 'Design Systems'],
    link: 'https://www.behance.net/galleries/graphic-design',
    images: [
      {
        src: '/assets/generated/portfolio-design-01.dim_1600x1000.png',
        alt: 'Enterprise brand identity system with logo suite and visual guidelines',
      },
    ],
  },
  {
    title: 'Mobile App UI/UX Design',
    description:
      'Designed intuitive mobile app interface with user research, wireframing, prototyping, and usability testing resulting in 4.8-star rating and 85% user retention.',
    category: 'design',
    tools: ['Figma', 'UI Design', 'UX Research', 'Prototyping', 'User Testing'],
    link: 'https://www.uxdesign.cc/',
    images: [
      {
        src: '/assets/generated/portfolio-design-02.dim_1600x1000.png',
        alt: 'Mobile app UI/UX design with wireframes and interactive prototypes',
      },
    ],
  },
  {
    title: 'Print Marketing Collateral',
    description:
      'Designed comprehensive print marketing suite including brochures, business cards, posters, and trade show materials maintaining brand consistency across all touchpoints.',
    category: 'design',
    tools: ['Adobe InDesign', 'Illustrator', 'Print Design', 'Typography', 'Layout Design'],
    link: 'https://www.printmag.com/',
    images: [
      {
        src: '/assets/generated/portfolio-design-03.dim_1600x1000.png',
        alt: 'Print marketing collateral with brochures and business card designs',
      },
    ],
  },
  {
    title: 'Social Media Graphics Suite',
    description:
      'Created cohesive social media graphics library with templates, icons, illustrations, and branded content for consistent multi-platform presence.',
    category: 'design',
    tools: ['Adobe Photoshop', 'Illustrator', 'Canva', 'Social Media Design'],
    link: 'https://www.canva.com/learn/social-media-design/',
    images: [
      {
        src: '/assets/generated/portfolio-design-04.dim_1600x1000.png',
        alt: 'Social media graphics suite with templates and branded content',
      },
    ],
  },
  {
    title: 'Packaging Design System',
    description:
      'Developed product packaging design system for consumer goods brand including structural design, label design, and retail display considerations.',
    category: 'design',
    tools: ['Packaging Design', 'Adobe Illustrator', '3D Mockups', 'Print Production'],
    link: 'https://www.packagingoftheworld.com/',
    images: [
      {
        src: '/assets/generated/portfolio-design-05.dim_1600x1000.png',
        alt: 'Packaging design system with structural design and label mockups',
      },
    ],
  },
  {
    title: 'Infographic Design Series',
    description:
      'Designed data visualization and infographic series transforming complex information into engaging visual stories for marketing and educational purposes.',
    category: 'design',
    tools: ['Data Visualization', 'Adobe Illustrator', 'Infographic Design', 'Visual Storytelling'],
    link: 'https://venngage.com/blog/what-is-an-infographic/',
    images: [
      {
        src: '/assets/generated/portfolio-design-06.dim_1600x1000.png',
        alt: 'Infographic design series with data visualization and visual storytelling',
      },
    ],
  },
  {
    title: 'Logo Design Portfolio',
    description:
      'Created distinctive logo designs for diverse clients across industries with comprehensive brand mark development, variations, and usage guidelines.',
    category: 'design',
    tools: ['Logo Design', 'Adobe Illustrator', 'Brand Identity', 'Vector Graphics'],
    link: 'https://www.logodesignlove.com/',
    images: [
      {
        src: '/assets/generated/portfolio-design-07.dim_1600x1000.png',
        alt: 'Logo design portfolio with brand marks and usage guidelines',
      },
    ],
  },
  {
    title: 'Website Design & Prototyping',
    description:
      'Designed modern responsive website with user-centered approach including wireframes, high-fidelity mockups, and interactive prototypes for seamless development handoff.',
    category: 'design',
    tools: ['Figma', 'Web Design', 'Responsive Design', 'Prototyping', 'Design Systems'],
    link: 'https://www.awwwards.com/',
    images: [
      {
        src: '/assets/generated/portfolio-design-08.dim_1600x1000.png',
        alt: 'Website design and prototyping with responsive layouts and mockups',
      },
    ],
  },
  {
    title: 'Illustration & Icon Design',
    description:
      'Created custom illustration library and icon set with consistent style, scalable vectors, and multiple variations for digital and print applications.',
    category: 'design',
    tools: ['Adobe Illustrator', 'Illustration', 'Icon Design', 'Vector Graphics'],
    link: 'https://www.iconfinder.com/',
    images: [
      {
        src: '/assets/generated/portfolio-design-09.dim_1600x1000.png',
        alt: 'Illustration and icon design library with custom graphics',
      },
    ],
  },
  {
    title: 'Motion Graphics & Animation',
    description:
      'Designed animated graphics and motion design elements for video content, social media, and digital advertising with smooth transitions and engaging effects.',
    category: 'design',
    tools: ['After Effects', 'Motion Design', 'Animation', 'Video Graphics'],
    link: 'https://www.motiondesign.school/',
    images: [
      {
        src: '/assets/generated/portfolio-design-10.dim_1600x1000.png',
        alt: 'Motion graphics and animation design with animated elements',
      },
    ],
  },

  // VIDEO CATEGORY (10 projects)
  {
    title: 'Documentary Film Production',
    description:
      'Produced and edited award-winning 45-minute documentary film featuring interviews, b-roll footage, motion graphics, and professional color grading for international film festival circuit.',
    category: 'video',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Sound Design', 'Storytelling'],
    link: 'https://www.adobe.com/products/premiere.html',
    images: [
      {
        src: '/assets/generated/portfolio-video-01.dim_1600x1000.png',
        alt: 'Documentary film production with interview footage and professional editing',
      },
    ],
  },
  {
    title: 'Corporate Video Production',
    description:
      'Created professional corporate video series including company overview, product demos, testimonials, and training videos with cinematic quality and brand consistency.',
    category: 'video',
    tools: ['Video Production', 'Premiere Pro', 'Cinematography', 'Corporate Video'],
    link: 'https://www.wistia.com/learn/production',
    images: [
      {
        src: '/assets/generated/portfolio-video-02.dim_1600x1000.png',
        alt: 'Corporate video production with product demos and testimonials',
      },
    ],
  },
  {
    title: 'Social Media Video Content',
    description:
      'Produced engaging short-form video content optimized for social platforms including Instagram Reels, TikTok, and YouTube Shorts achieving millions of views.',
    category: 'video',
    tools: ['Mobile Video', 'Premiere Pro', 'Social Media', 'Short-Form Content'],
    link: 'https://www.tiktok.com/business/en/blog/video-marketing-guide',
    images: [
      {
        src: '/assets/generated/portfolio-video-03.dim_1600x1000.png',
        alt: 'Social media video content with short-form videos and engagement metrics',
      },
    ],
  },
  {
    title: 'Promotional Video Campaign',
    description:
      'Developed multi-video promotional campaign with concept development, scripting, filming, and post-production delivering compelling brand story across channels.',
    category: 'video',
    tools: ['Video Marketing', 'Premiere Pro', 'Storytelling', 'Brand Video'],
    link: 'https://www.vidyard.com/blog/promotional-video/',
    images: [
      {
        src: '/assets/generated/portfolio-video-04.dim_1600x1000.png',
        alt: 'Promotional video campaign with brand storytelling and marketing content',
      },
    ],
  },
  {
    title: 'Event Coverage & Highlights',
    description:
      'Captured and edited comprehensive event coverage including keynote speeches, panel discussions, and networking moments creating engaging highlight reels.',
    category: 'video',
    tools: ['Event Videography', 'Multi-Camera', 'Live Editing', 'Premiere Pro'],
    link: 'https://www.eventbrite.com/blog/event-video-production/',
    images: [
      {
        src: '/assets/generated/portfolio-video-05.dim_1600x1000.png',
        alt: 'Event coverage and highlights with multi-camera production',
      },
    ],
  },
  {
    title: 'Explainer Video Series',
    description:
      'Created animated explainer video series simplifying complex concepts with engaging visuals, clear narration, and professional animation for educational content.',
    category: 'video',
    tools: ['After Effects', 'Animation', 'Explainer Videos', 'Motion Graphics'],
    link: 'https://www.explainervideo.com/',
    images: [
      {
        src: '/assets/generated/portfolio-video-06.dim_1600x1000.png',
        alt: 'Explainer video series with animated graphics and educational content',
      },
    ],
  },
  {
    title: 'Music Video Production',
    description:
      'Directed and edited creative music video with artistic cinematography, color grading, visual effects, and synchronized editing achieving 500K+ views.',
    category: 'video',
    tools: ['Music Video', 'Premiere Pro', 'Color Grading', 'Visual Effects'],
    link: 'https://www.musicvideopromotion.com/',
    images: [
      {
        src: '/assets/generated/portfolio-video-07.dim_1600x1000.png',
        alt: 'Music video production with artistic cinematography and visual effects',
      },
    ],
  },
  {
    title: 'Product Demo Videos',
    description:
      'Produced professional product demonstration videos showcasing features, benefits, and use cases with clear visuals and compelling storytelling.',
    category: 'video',
    tools: ['Product Video', 'Premiere Pro', 'Screen Recording', 'Demo Production'],
    link: 'https://www.loom.com/use-cases/product-demos',
    images: [
      {
        src: '/assets/generated/portfolio-video-08.dim_1600x1000.png',
        alt: 'Product demo videos with feature showcases and use case demonstrations',
      },
    ],
  },
  {
    title: 'YouTube Channel Content',
    description:
      'Managed complete YouTube content production including filming, editing, thumbnails, SEO optimization, and channel growth strategy achieving 50K+ subscribers.',
    category: 'video',
    tools: ['YouTube', 'Premiere Pro', 'Content Strategy', 'Video SEO'],
    link: 'https://www.youtube.com/creators/',
    images: [
      {
        src: '/assets/generated/portfolio-video-09.dim_1600x1000.png',
        alt: 'YouTube channel content with video production and growth strategy',
      },
    ],
  },
  {
    title: 'Commercial Advertisement',
    description:
      'Produced high-quality commercial advertisement with professional cinematography, talent direction, post-production, and broadcast-ready delivery.',
    category: 'video',
    tools: ['Commercial Production', 'Premiere Pro', 'Cinematography', 'Advertising'],
    link: 'https://www.shootingpeople.org/wiki/Commercial_Production',
    images: [
      {
        src: '/assets/generated/portfolio-video-10.dim_1600x1000.png',
        alt: 'Commercial advertisement with professional cinematography and production',
      },
    ],
  },

  // WEB CATEGORY (10 projects)
  {
    title: 'Enterprise SaaS Web Application',
    description:
      'Architected and developed full-stack SaaS platform with React frontend, Node.js backend, real-time collaboration features, and scalable cloud infrastructure serving 10,000+ users.',
    category: 'web',
    tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    link: 'https://www.netlify.com/blog/enterprise-web-applications/',
    images: [
      {
        src: '/assets/generated/portfolio-web-01.dim_1600x1000.png',
        alt: 'Enterprise SaaS web application with React frontend and scalable architecture',
      },
    ],
  },
  {
    title: 'E-Commerce Platform Development',
    description:
      'Built custom e-commerce platform with product catalog, shopping cart, payment integration, order management, and admin dashboard processing $1M+ in transactions.',
    category: 'web',
    tools: ['React', 'Next.js', 'Stripe', 'MongoDB', 'E-Commerce'],
    link: 'https://www.shopify.com/enterprise/ecommerce-platform',
    images: [
      {
        src: '/assets/generated/portfolio-web-02.dim_1600x1000.png',
        alt: 'E-commerce platform with shopping cart and payment integration',
      },
    ],
  },
  {
    title: 'WordPress Custom Theme Development',
    description:
      'Designed and developed custom WordPress theme with page builder integration, responsive design, SEO optimization, and performance tuning for corporate website.',
    category: 'web',
    tools: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'Theme Development'],
    link: 'https://wordpress.org/themes/',
    images: [
      {
        src: '/assets/generated/portfolio-web-03.dim_1600x1000.png',
        alt: 'WordPress custom theme with responsive design and page builder',
      },
    ],
  },
  {
    title: 'Progressive Web App (PWA)',
    description:
      'Developed progressive web application with offline functionality, push notifications, app-like experience, and cross-platform compatibility.',
    category: 'web',
    tools: ['React', 'Service Workers', 'PWA', 'Web APIs', 'Mobile Web'],
    link: 'https://web.dev/progressive-web-apps/',
    images: [
      {
        src: '/assets/generated/portfolio-web-04.dim_1600x1000.png',
        alt: 'Progressive web app with offline functionality and mobile experience',
      },
    ],
  },
  {
    title: 'Real Estate Listing Platform',
    description:
      'Created comprehensive real estate platform with property listings, advanced search, map integration, virtual tours, and lead management system.',
    category: 'web',
    tools: ['React', 'Google Maps API', 'Node.js', 'Real Estate Tech'],
    link: 'https://www.zillow.com/',
    images: [
      {
        src: '/assets/generated/portfolio-web-05.dim_1600x1000.png',
        alt: 'Real estate listing platform with property search and map integration',
      },
    ],
  },
  {
    title: 'Learning Management System',
    description:
      'Built educational LMS platform with course management, video streaming, progress tracking, assessments, and student-teacher interaction features.',
    category: 'web',
    tools: ['React', 'Video Streaming', 'LMS', 'Education Tech', 'Database Design'],
    link: 'https://www.moodle.org/',
    images: [
      {
        src: '/assets/generated/portfolio-web-06.dim_1600x1000.png',
        alt: 'Learning management system with course management and video streaming',
      },
    ],
  },
  {
    title: 'Restaurant Booking System',
    description:
      'Developed online reservation system with table management, booking calendar, customer notifications, and integration with POS systems for restaurant chain.',
    category: 'web',
    tools: ['React', 'Booking System', 'Calendar Integration', 'Restaurant Tech'],
    link: 'https://www.opentable.com/',
    images: [
      {
        src: '/assets/generated/portfolio-web-07.dim_1600x1000.png',
        alt: 'Restaurant booking system with table management and reservations',
      },
    ],
  },
  {
    title: 'Portfolio Website Design',
    description:
      'Designed and developed stunning portfolio website with animations, case studies, contact forms, and CMS integration showcasing creative work professionally.',
    category: 'web',
    tools: ['React', 'Framer Motion', 'Tailwind CSS', 'Portfolio Design'],
    link: 'https://www.awwwards.com/websites/portfolio/',
    images: [
      {
        src: '/assets/generated/portfolio-web-08.dim_1600x1000.png',
        alt: 'Portfolio website design with animations and case study showcases',
      },
    ],
  },
  {
    title: 'Healthcare Patient Portal',
    description:
      'Created secure patient portal with appointment scheduling, medical records access, telemedicine integration, and HIPAA-compliant data handling.',
    category: 'web',
    tools: ['React', 'Healthcare Tech', 'Security', 'HIPAA Compliance'],
    link: 'https://www.healthit.gov/topic/health-it-basics/patient-portals',
    images: [
      {
        src: '/assets/generated/portfolio-web-09.dim_1600x1000.png',
        alt: 'Healthcare patient portal with appointment scheduling and medical records',
      },
    ],
  },
  {
    title: 'Social Networking Platform',
    description:
      'Built social networking platform with user profiles, news feed, messaging, notifications, and content sharing features supporting thousands of active users.',
    category: 'web',
    tools: ['React', 'WebSockets', 'Social Features', 'Real-Time', 'Scalability'],
    link: 'https://www.facebook.com/',
    images: [
      {
        src: '/assets/generated/portfolio-web-10.dim_1600x1000.png',
        alt: 'Social networking platform with user profiles and real-time messaging',
      },
    ],
  },
];
