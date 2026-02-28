import { cn } from '../../lib/utils';
import { PORTRAIT_SRC, PORTRAIT_ALT } from '../../lib/portrait';

interface ProfilePortraitProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function ProfilePortrait({ size = 'md', className }: ProfilePortraitProps) {
  const sizeClasses = {
    sm: 'w-24 h-24 sm:w-32 sm:h-32',
    md: 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48',
    lg: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64',
    xl: 'w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96',
  };

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl',
        sizeClasses[size],
        className
      )}
    >
      <img
        src={PORTRAIT_SRC}
        alt={PORTRAIT_ALT}
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}
