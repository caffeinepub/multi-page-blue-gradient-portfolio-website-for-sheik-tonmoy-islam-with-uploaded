import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { setSEO } from '../../lib/seo';
import Container from '../../components/common/Container';
import GradientBackground from '../../components/common/GradientBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getArticleBySlug } from '../../data/blogArticles';
import { ArrowLeft } from 'lucide-react';
import { normalizeAssetPath, getFallbackImagePath } from '../../lib/assetPaths';
import ArticleSideBySideLayout from '../../components/blog/ArticleSideBySideLayout';

export default function BlogVideoEditingArticlePage() {
  const article = getArticleBySlug('video-editing');
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    if (article) {
      setSEO({
        title: article.seoTitle,
        description: article.seoDescription,
        ogTitle: article.seoTitle,
        ogDescription: article.seoDescription,
        ogType: 'article',
      });
      setImageSrc(normalizeAssetPath(article.image));
    }
  }, [article]);

  const handleImageError = () => {
    console.warn('Failed to load article image, using fallback');
    setImageSrc(getFallbackImagePath());
  };

  if (!article) {
    return (
      <GradientBackground>
        <Container>
          <div className="py-16 text-center">
            <p className="text-muted-foreground">Article not found</p>
          </div>
        </Container>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <Container>
        <div className="py-16 space-y-8">
          {/* Back Button */}
          <Link to="/blog">
            <Button variant="ghost" className="text-foreground hover:text-foreground/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {article.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              {article.subtitle}
            </h2>
          </div>

          {/* Side-by-Side Layout: Image LEFT, Content RIGHT */}
          <ArticleSideBySideLayout
            imageSrc={imageSrc}
            imageAlt={article.imageAlt}
            imagePosition="left"
            onImageError={handleImageError}
          >
            {/* Article Content */}
            <Card className="bg-background/80 backdrop-blur-md border-border/40">
              <CardContent className="p-8 space-y-8">
                {/* Intro */}
                <div className="prose prose-lg max-w-none">
                  {article.content.intro.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Sections */}
                <div className="space-y-8">
                  {article.content.sections.map((section, i) => (
                    <div key={i} className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{section.heading}</h3>
                      <div className="prose prose-lg max-w-none">
                        {section.content.split('\n\n').map((paragraph, j) => (
                          <p key={j} className="text-foreground leading-relaxed mb-4">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="prose prose-lg max-w-none border-t border-border/40 pt-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Verdict</h3>
                  {article.content.conclusion.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-foreground leading-relaxed mb-4 font-medium">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ArticleSideBySideLayout>

          {/* Back to Blog CTA */}
          <div className="text-center pt-8">
            <Link to="/blog">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </GradientBackground>
  );
}
