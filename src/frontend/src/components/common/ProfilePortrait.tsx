import { PORTRAIT_SRC, PORTRAIT_ALT } from '../../lib/portrait';

interface ProfilePortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProfilePortrait({ className = '', size = 'md' }: ProfilePortraitProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full overflow-hidden ring-4 ring-blue-600/20 shadow-2xl shadow-blue-600/20`}
      >
        <img
          src={PORTRAIT_SRC}
          alt={PORTRAIT_ALT}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      {/* Gradient glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/10 to-cyan-500/10 pointer-events-none" />
    </div>
  );
}
