import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { normalizeAssetPath, getFallbackImagePath } from '@/lib/assetPaths';
import type { ProjectImage } from '@/data/projects';

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ProjectImageGallery({ images, projectTitle }: ProjectImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [imageSources, setImageSources] = useState<Map<number, string>>(new Map());

  // Reset currentIndex when images prop changes to prevent out-of-bounds errors
  useEffect(() => {
    if (images && images.length > 0) {
      setCurrentIndex((prev) => Math.min(prev, images.length - 1));
    }
  }, [images]);

  // Initialize image sources
  useEffect(() => {
    const sources = new Map<number, string>();
    images.forEach((image, index) => {
      sources.set(index, normalizeAssetPath(image.src));
    });
    setImageSources(sources);
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageError = (index: number, imgElement: HTMLImageElement) => {
    // Immediately swap to fallback to avoid blank image area
    const fallbackSrc = getFallbackImagePath();
    imgElement.src = fallbackSrc;
    
    // Track error state
    setImageErrors((prev) => new Set(prev).add(index));
    
    // Update the source map so subsequent renders use fallback
    setImageSources((prev) => {
      const updated = new Map(prev);
      updated.set(index, fallbackSrc);
      return updated;
    });
  };

  const currentImage = images[currentIndex];
  const imageSrc = imageSources.get(currentIndex) || normalizeAssetPath(currentImage.src);

  return (
    <div className="relative w-full">
      {/* Main image container with fixed aspect ratio */}
      <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img
          src={imageSrc}
          alt={currentImage.alt}
          className="w-full h-full object-contain"
          onError={(e) => handleImageError(currentIndex, e.currentTarget)}
          loading="lazy"
        />

        {/* Navigation controls - only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Image counter */}
            <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-foreground">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail navigation - only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const thumbSrc = imageSources.get(index) || normalizeAssetPath(image.src);
            
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-10 rounded overflow-hidden border-2 transition-all bg-muted/20 ${
                  index === currentIndex
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-transparent hover:border-muted-foreground/30'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={thumbSrc}
                  alt={`${projectTitle} thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                  onError={(e) => handleImageError(index, e.currentTarget)}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
