import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import type { BlogArticle } from '../../data/blogArticles';
import { normalizeAssetPath } from '../../lib/assetPaths';

interface ArticleSideBySideLayoutProps {
  article: BlogArticle;
}

export default function ArticleSideBySideLayout({ article }: ArticleSideBySideLayoutProps) {
  return (
    <div className="space-y-12">
      {/* Article Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-foreground">
          {article.title}
        </h1>
        <p className="text-xl text-muted-foreground">{article.subtitle}</p>
      </div>

      {/* Featured Image */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <img
            src={normalizeAssetPath(article.image)}
            alt={article.imageAlt}
            className="h-full w-full object-contain"
            loading="eager"
          />
        </div>
      </div>

      {/* Article Content */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Introduction</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.intro.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground mb-4">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>

      {/* Article Sections */}
      {article.content.sections.map((section, index) => (
        <Card key={index} className="max-w-5xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">{section.heading}</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg dark:prose-invert max-w-none">
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="text-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      ))}

      {/* Conclusion */}
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Conclusion</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.conclusion.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-foreground mb-4">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
