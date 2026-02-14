import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import InfoCard from '../components/common/InfoCard';
import { setSEO } from '../lib/seo';
import { Scale, Briefcase, TrendingUp, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    setSEO({
      title: 'About - Sheik Tonmoy Islam',
      description:
        'Learn more about Sheik Tonmoy Islam, a multi-disciplinary professional combining legal expertise with creative and technical skills.',
    });
  }, []);

  const highlights = [
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: 'Legal Foundation',
      description:
        'Building a strong foundation in law through internship experience, understanding compliance, contracts, and business regulations.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-cyan-600" />,
      title: 'Business Acumen',
      description:
        'Entrepreneurial mindset with practical business experience, strategic thinking, and market understanding.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Digital Marketing',
      description:
        'Expertise in modern marketing strategies, SEO, social media, content creation, and brand development.',
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-600" />,
      title: 'Creative Services',
      description:
        'Professional graphics design and video editing skills to bring visual concepts to life with impact.',
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Technical Skills',
      description:
        'Website design and development capabilities to create modern, responsive, and user-friendly digital experiences.',
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-600" />,
      title: 'Commitment to Excellence',
      description:
        'Dedicated to delivering high-quality work, continuous learning, and exceeding client expectations.',
    },
  ];

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto lg:mx-0">
            A unique blend of legal knowledge, business insight, and creative technical expertise
          </p>
        </div>

        {/* Bio Section */}
        <div className="max-w-4xl mb-20 mx-auto lg:mx-0">
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am <strong>Sheik Tonmoy Islam</strong>, a multi-disciplinary professional who brings
              together diverse skill sets to solve complex challenges. As an{' '}
              <strong>Internship Junior Lawyer</strong>, I understand the legal frameworks that
              govern business operations. As a <strong>Business Professional</strong>, I apply
              strategic thinking to drive growth and innovation.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My expertise extends into the digital realm as a <strong>Digital Marketer</strong>,
              where I craft compelling campaigns that resonate with audiences. As a{' '}
              <strong>Graphics Designer</strong> and <strong>Video Editor</strong>, I create visual
              content that tells stories and captures attention. My skills as a{' '}
              <strong>Website Designer</strong> enable me to build digital experiences that are both
              beautiful and functional.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              This unique combination of legal, business, creative, and technical skills allows me to
              approach projects from multiple angles, delivering comprehensive solutions that address
              both the strategic and tactical needs of modern businesses.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-12">
            What Sets Me <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Apart</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <InfoCard
                key={index}
                title={highlight.title}
                description={highlight.description}
                icon={highlight.icon}
              />
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-12">
            Core <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                Upholding the highest ethical standards in all professional endeavors
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing new technologies and creative approaches to problem-solving
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Striving for the highest quality in every project and interaction
              </p>
            </div>
          </div>
        </div>
      </Container>
    </GradientBackground>
  );
}
