import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { setSEO } from '../lib/seo';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogArticles } from '../data/blogArticles';
import { ArrowRight } from 'lucide-react';
import { normalizeAssetPath, getFallbackImagePath } from '../lib/assetPaths';

export default function BlogPage() {
  useEffect(() => {
    setSEO({
      title: 'Blog - Sheik Tonmoy Islam',
      description:
        'Insights and articles on legal topics, business strategies, digital marketing, design, video editing, and web development.',
    });
  }, []);

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (articleId: string) => {
    setImageErrors((prev) => ({ ...prev, [articleId]: true }));
  };

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Blog &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto lg:mx-0">
            Exploring topics across law, business, marketing, design, and technology
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => {
            const imageSrc = imageErrors[article.id]
              ? getFallbackImagePath()
              : normalizeAssetPath(article.image);

            // Map article IDs to proper route paths
            const routePath = `/blog/${article.id}` as 
              | '/blog/digital-marketing'
              | '/blog/graphic-design'
              | '/blog/video-editing'
              | '/blog/web-design-dev'
              | '/blog/law-legal';

            return (
              <Card
                key={article.id}
                className="overflow-hidden bg-background/80 backdrop-blur-md border-border/40 hover:border-border/60 transition-all duration-300 hover:shadow-xl flex flex-col"
              >
                <div className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center">
                  <img
                    src={imageSrc}
                    alt={article.title}
                    className="w-full h-full object-contain"
                    onError={() => handleImageError(article.id)}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {article.subtitle}
                  </p>
                  <div className="mt-auto">
                    <Link to={routePath}>
                      <Button
                        variant="default"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white"
                      >
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </GradientBackground>
  );
}
