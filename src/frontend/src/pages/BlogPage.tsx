import { useEffect } from 'react';
import { setSEO } from '../lib/seo';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogSections = [
  {
    title: 'Digital Marketing',
    description:
      'Explore strategies and insights for effective digital marketing campaigns, SEO optimization, social media management, and content marketing to grow your online presence and reach your target audience.',
    image: '/assets/generated/blog-digital-marketing.dim_1200x800.png',
    alt: 'Digital Marketing strategies and tools illustration',
  },
  {
    title: 'Graphic Design',
    description:
      'Discover the art of visual communication through graphic design. Learn about branding, logo design, typography, color theory, and creating compelling visuals that capture attention and convey your message effectively.',
    image: '/assets/generated/blog-graphic-design.dim_1200x800.png',
    alt: 'Graphic Design creative workspace and tools',
  },
  {
    title: 'Video Editing',
    description:
      'Master the craft of video editing with tips on storytelling, transitions, color grading, audio mixing, and post-production techniques. Create engaging video content that resonates with your audience across all platforms.',
    image: '/assets/generated/blog-video-editing.dim_1200x800.png',
    alt: 'Video Editing timeline and production setup',
  },
  {
    title: 'Website Design & Web Development',
    description:
      'Dive into modern web design and development practices. Learn about responsive design, user experience, frontend frameworks, backend integration, and building fast, accessible, and beautiful websites that deliver results.',
    image: '/assets/generated/blog-web-design-dev.dim_1200x800.png',
    alt: 'Website Design and Web Development workspace',
  },
  {
    title: 'Law',
    description:
      'Navigate the complexities of legal practice with insights on legal research, case analysis, contract drafting, compliance, and regulatory frameworks. Stay informed about legal trends, best practices, and professional development in the legal field.',
    image: '/assets/generated/blog-law-legal.dim_1200x800.png',
    alt: 'Law and legal practice resources illustration',
  },
];

export default function BlogPage() {
  useEffect(() => {
    setSEO({
      title: 'Blog - Sheik Tonmoy Islam',
      description:
        'Insights and articles on Digital Marketing, Graphic Design, Video Editing, Website Design & Web Development, and Law by Sheik Tonmoy Islam.',
      ogTitle: 'Blog - Sheik Tonmoy Islam',
      ogDescription:
        'Expert insights on digital marketing, design, video editing, web development, and legal practice.',
      ogType: 'website',
    });
  }, []);

  return (
    <GradientBackground>
      <Container>
        <div className="py-16 space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-lg text-yellow-400 max-w-2xl mx-auto">
              Insights, tips, and expertise across digital marketing, design, video production, web development, and legal practice
            </p>
          </div>

          {/* Blog Sections */}
          <div className="space-y-12">
            {blogSections.map((section, index) => (
              <Card
                key={section.title}
                className="overflow-hidden bg-background/80 backdrop-blur-md border-border/40"
              >
                <div
                  className={`grid grid-cols-1 ${
                    index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                  } gap-0`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} relative`}>
                    <img
                      src={section.image}
                      alt={section.alt}
                      loading="lazy"
                      className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                    />
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-yellow-400 leading-relaxed">{section.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </GradientBackground>
  );
}
