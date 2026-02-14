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
  const variants = {
    default: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-background dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-background',
    subtle: 'bg-gradient-to-b from-background to-muted/20',
    hero: 'bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-background',
  };

  return <div className={cn(variants[variant], className)}>{children}</div>;
}
