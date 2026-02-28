import { useEffect } from 'react';
import Container from '../components/common/Container';
import GradientBackground from '../components/common/GradientBackground';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { setSEO } from '../lib/seo';
import { getCanonicalSiteUrl } from '../lib/siteUrl';
import { blogArticles } from '../data/blogArticles';
import { normalizeAssetPath } from '../lib/assetPaths';

export default function BlogPage() {
  useEffect(() => {
    setSEO({
      title: 'Blog - Sheik Tonmoy Islam',
      description:
        'Insights and expertise on legal consulting, business strategy, digital marketing, graphic design, video editing, and web development. Professional articles and industry knowledge.',
      keywords: 'blog, legal articles, business articles, digital marketing blog, design blog, video editing blog, web development blog',
      ogTitle: 'Blog - Sheik Tonmoy Islam',
      ogDescription: 'Professional insights across legal, business, marketing, design, and development.',
      canonicalUrl: getCanonicalSiteUrl() + '/blog',
    });
  }, []);

  return (
    <GradientBackground variant="subtle">
      <Container className="py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Insights and expertise across multiple professional disciplines
          </p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <a
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group block transition-transform hover:scale-[1.02]"
            >
              <Card className="h-full overflow-hidden border-2 hover:border-blue-500 transition-colors">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={normalizeAssetPath(article.image)}
                    alt={article.imageAlt}
                    className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{article.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.content.intro}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </GradientBackground>
  );
}
