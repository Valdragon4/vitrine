// Configuration des analytics et tracking SEO

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Tracking des interactions utilisateur
export const trackProjectView = (projectName: string) => {
  event({
    action: 'view_project',
    category: 'engagement',
    label: projectName,
  });
};

export const trackContactForm = (formType: string) => {
  event({
    action: 'submit_contact_form',
    category: 'conversion',
    label: formType,
  });
};

export const trackDownload = (fileType: string) => {
  event({
    action: 'download_file',
    category: 'engagement',
    label: fileType,
  });
};

// Performance tracking
export const trackPageLoad = (loadTime: number) => {
  event({
    action: 'page_load_time',
    category: 'performance',
    label: 'load_time',
    value: Math.round(loadTime),
  });
};

// Scroll tracking
export const trackScrollDepth = (depth: number) => {
  event({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${depth}%`,
    value: depth,
  });
};

// Déclaration globale pour TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
