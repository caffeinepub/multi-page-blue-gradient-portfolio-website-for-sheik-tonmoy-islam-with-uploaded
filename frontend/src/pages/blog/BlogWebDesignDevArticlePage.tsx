import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import Container from '../../components/common/Container';
import GradientBackground from '../../components/common/GradientBackground';
import ArticleSideBySideLayout from '../../components/blog/ArticleSideBySideLayout';
import ArticleStructuredData from '../../components/blog/ArticleStructuredData';
import { Button } from '../../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { setSEO } from '../../lib/seo';
import { getCanonicalSiteUrl } from '../../lib/siteUrl';
import { blogArticles } from '../../data/blogArticles';

export default function BlogWebDesignDevArticlePage() {
  const navigate = useNavigate();
  const article = blogArticles.find((a) => a.id === 'web-design-dev')!;

  useEffect(() => {
    setSEO({
      title: article.seoTitle,
      description: article.seoDescription,
      keywords: `web design, web development, ${article.category}, website design, responsive design, UX design`,
      ogTitle: article.seoTitle,
      ogDescription: article.seoDescription,
      ogImage: article.image,
      canonicalUrl: getCanonicalSiteUrl() + '/blog/web-design-dev',
    });
  }, [article]);

  return (
    <>
      <ArticleStructuredData article={article} />
      <GradientBackground variant="subtle">
        <Container className="py-16 md:py-24">
          <Button
            variant="ghost"
            onClick={() => navigate({ to: '/blog' })}
            className="mb-8 text-foreground hover:text-foreground/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <ArticleSideBySideLayout article={article} />
        </Container>
      </GradientBackground>
    </>
  );
}
