'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'monogram';
  className?: string;
}

const Logo = ({ size = 'md', variant = 'full', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-11 h-11 text-base',
    lg: 'w-16 h-16 text-2xl',
  };

  const monogram = (
    <div
      className={`${sizeClasses[size]} rounded-lg border border-ink-700 bg-ink-900 flex items-center justify-center ${className}`}
    >
      <span className="font-display font-bold text-signal-400 tracking-tight">
        VM
      </span>
    </div>
  );

  if (variant === 'monogram') return monogram;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {monogram}
      <div className="flex flex-col">
        <span className="font-semibold text-ink-100 text-base leading-tight">
          Valentin Marot
        </span>
        <span className="text-xs text-ink-400">
          Fondateur d&apos;Ordely
        </span>
      </div>
    </div>
  );
};

export default Logo;
