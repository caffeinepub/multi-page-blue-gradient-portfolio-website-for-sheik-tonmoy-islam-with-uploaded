import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'hero';
}

export default function GradientBackground({
  children,
  className,
  variant = 'default',
}: GradientBackgroundProps) {
  // No longer applying gradient backgrounds - just a transparent wrapper
  // that preserves structure and spacing
  return <div className={cn('relative', className)}>{children}</div>;
}
