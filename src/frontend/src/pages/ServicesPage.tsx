import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import InfoCard from '../components/common/InfoCard';
import { setSEO } from '../lib/seo';
import { Scale, Briefcase, TrendingUp, Palette, Video, Globe } from 'lucide-react';

export default function ServicesPage() {
  useEffect(() => {
    setSEO({
      title: 'Services - Sheik Tonmoy Islam',
      description:
        'Professional services including legal support, business consulting, digital marketing, graphics design, video editing, and website design.',
    });
  }, []);

  const services = [
    {
      icon: <Scale className="h-12 w-12 text-blue-600" />,
      title: 'Legal Internship Support',
      description:
        'Assistance with legal research, document preparation, contract review, and compliance matters. Supporting legal teams with thorough analysis and attention to detail.',
    },
    {
      icon: <Briefcase className="h-12 w-12 text-cyan-600" />,
      title: 'Business Services',
      description:
        'Strategic business consulting, market analysis, business planning, and operational optimization. Helping businesses grow and achieve their objectives.',
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies including SEO, social media marketing, content creation, email campaigns, and brand development to boost online presence.',
    },
    {
      icon: <Palette className="h-12 w-12 text-cyan-600" />,
      title: 'Graphics Design',
      description:
        'Professional graphic design services for logos, branding materials, social media graphics, marketing collateral, and visual identity development.',
    },
    {
      icon: <Video className="h-12 w-12 text-blue-600" />,
      title: 'Video Editing',
      description:
        'Expert video editing for promotional videos, social media content, corporate presentations, and creative projects. Bringing your vision to life with professional polish.',
    },
    {
      icon: <Globe className="h-12 w-12 text-cyan-600" />,
      title: 'Website Design',
      description:
        'Modern, responsive website design and development. Creating user-friendly, visually appealing websites that drive engagement and conversions.',
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
              Services
            </span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto lg:mx-0">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid - Black text override for this section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16 [&_*]:!text-black [&_h3]:!text-black [&_p]:!text-black">
          {services.map((service, index) => (
            <InfoCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl p-12 border border-border text-center lg:text-left shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Let's discuss how I can help bring your project to life with my diverse skill set and
            professional expertise.
          </p>
          <a href="/contact">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 h-11 px-8 text-lg">
              Contact Me Today
            </button>
          </a>
        </div>
      </Container>
    </GradientBackground>
  );
}
