import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function InfoCard({ 
  title, 
  description, 
  children, 
  className, 
  icon,
  titleClassName,
  descriptionClassName 
}: InfoCardProps) {
  return (
    <Card className={cn('h-full transition-all hover:shadow-lg hover:scale-[1.02]', className)}>
      <CardHeader>
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className={cn('text-xl', titleClassName)}>{title}</CardTitle>
        {description && (
          <CardDescription className={descriptionClassName}>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
