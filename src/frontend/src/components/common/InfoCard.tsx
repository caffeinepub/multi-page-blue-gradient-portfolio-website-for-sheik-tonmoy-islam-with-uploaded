import { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function InfoCard({ title, description, children, className, icon }: InfoCardProps) {
  return (
    <Card className={cn('h-full transition-all hover:shadow-lg hover:scale-[1.02]', className)}>
      <CardHeader>
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}
