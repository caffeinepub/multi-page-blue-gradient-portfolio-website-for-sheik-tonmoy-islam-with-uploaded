import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { normalizeAssetPath, getFallbackImagePath } from '../../lib/assetPaths';
import type { ProjectImage } from '../../data/projects';

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  title: string;
}

export default function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  // Clamp currentIndex to valid range
  const safeCurrentIndex = Math.max(0, Math.min(currentIndex, images.length - 1));

  useEffect(() => {
    // Reset when images change
    setCurrentIndex(0);
    setErrorImages(new Set());
  }, [images]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleImageError = (imagePath: string) => {
    setErrorImages((prev) => new Set(prev).add(imagePath));
  };

  const getImageSrc = (imagePath: string) => {
    return errorImages.has(imagePath) ? getFallbackImagePath() : normalizeAssetPath(imagePath);
  };

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video w-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  const currentImage = images[safeCurrentIndex];

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img
          src={getImageSrc(currentImage.src)}
          alt={currentImage.alt}
          className="h-full w-full object-contain"
          onError={() => handleImageError(currentImage.src)}
          loading="lazy"
        />
      </div>

      {/* Navigation Buttons - Only show if multiple images */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {safeCurrentIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-2 left-2 right-12 flex gap-2 overflow-x-auto opacity-0 group-hover:opacity-100 transition-opacity">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all ${
                  index === safeCurrentIndex
                    ? 'border-blue-500 scale-110'
                    : 'border-white/50 hover:border-white'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={getImageSrc(image.src)}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-black/50"
                  onError={() => handleImageError(image.src)}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
