'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'monogram';
  className?: string;
}

const Logo = ({ size = 'md', variant = 'full', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl', 
    lg: 'text-2xl'
  };

  if (variant === 'monogram') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className={`${textSizeClasses[size]} font-bold text-white`}>
            VM
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={sizeClasses[size]}>
        <div className="w-full h-full bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
          <span className={`${textSizeClasses[size]} font-bold text-white`}>
            VM
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-gray-900 text-lg leading-tight">
          Valentin <span className="text-blue-600">MAROT</span>
        </span>
        <span className="text-sm text-gray-600 font-medium">
          Développeur Full-Stack
        </span>
      </div>
    </div>
  );
};

export default Logo;
