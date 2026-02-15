import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ArticleSideBySideLayoutProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  onImageError: () => void;
  children: ReactNode;
}

export default function ArticleSideBySideLayout({
  imageSrc,
  imageAlt,
  imagePosition,
  onImageError,
  children,
}: ArticleSideBySideLayoutProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Image Column */}
      <div
        className={`${
          imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
        } order-1`}
      >
        <Card className="overflow-hidden bg-background/80 backdrop-blur-md border-border/40 sticky top-24">
          <div className="w-full aspect-video flex items-center justify-center bg-muted">
            {imageSrc && (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-contain"
                onError={onImageError}
              />
            )}
          </div>
        </Card>
      </div>

      {/* Content Column */}
      <div
        className={`${
          imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
        } order-2`}
      >
        {children}
      </div>
    </div>
  );
}
