'use client';

import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Shield, 
  Zap,
  Settings,
  Cloud,
  Smartphone,
  Monitor,
  Cpu
} from 'lucide-react';

interface TechBadgeProps {
  name: string;
  variant?: 'primary' | 'accent' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

const TechBadge = ({ name, variant = 'primary', size = 'md', showIcon = true }: TechBadgeProps) => {
  // Mapping des technologies vers leurs icônes
  const techIcons: Record<string, any> = {
    'Python': Code,
    'Python (Flask)': Code,
    'JavaScript': Code,
    'TypeScript': Code,
    'React': Code,
    'Next.js': Code,
    'HTML/CSS/JS': Code,
    'Laravel': Code,
    'Docker': Settings,
    'Nginx': Server,
    'Linux': Server,
    'Linux (Ubuntu)': Server,
    'Ubuntu': Server,
    'Postfix': Server,
    'DNS': Globe,
    'SSL/TLS': Shield,
    'API': Zap,
    'JSON': Database,
    'Excel': Database,
    'MySQL': Database,
    'PostgreSQL': Database,
    'MongoDB': Database,
    'WordPress': Globe,
    'Google Workspace': Cloud,
    'Hébergement web': Server,
    'Pi-hole': Shield,
    'Pterodactyl': Settings,
    'Cockpit': Monitor,
    'Portainer': Settings,
    'Seafile': Cloud,
    'DevOps': Settings,
    'CI/CD': Zap,
    'Monitoring': Monitor,
    'VPS': Server,
    'Auto-hébergement': Server,
    'Administration système': Settings,
    'Sécurité': Shield,
    'Automatisation': Zap,
    'Ordely API': Smartphone,
    'openpyxl': Database,
    'Flask': Code,
    'Support technique': Settings,
    'Formation': Monitor,
    'Outils bureautiques': Monitor,
    'Réseaux': Globe,
    'Télécommunications': Globe,
    'Informatique': Cpu,
  };

  const getIcon = (techName: string) => {
    const IconComponent = techIcons[techName] || Code;
    return IconComponent;
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const iconSizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const IconComponent = getIcon(name);

  return (
    <span className={`
      inline-flex items-center gap-1.5 rounded-md font-mono
      border border-zinc-800 bg-zinc-900 text-zinc-400
      hover:border-zinc-700 hover:text-zinc-200 transition-colors
      ${sizeClasses[size]}
    `}>
      {showIcon && <IconComponent className={`${iconSizeClasses[size]} text-amber-500/70`} />}
      {name}
    </span>
  );
};

export default TechBadge;
