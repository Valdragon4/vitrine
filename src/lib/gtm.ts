// Configuration Google Tag Manager et événements personnalisés

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialiser dataLayer si elle n'existe pas
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
}

// Fonction pour pousser des événements dans dataLayer
export const pushToDataLayer = (event: any) => {
  if (typeof window !== 'undefined') {
    window.dataLayer.push(event);
  }
};

// Fonction pour envoyer des événements à GA4
export const sendToGA4 = (eventName: string, parameters: any = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Événements personnalisés pour le portfolio

// Tracking des vues de projets
export const trackProjectView = (projectName: string, projectType: string) => {
  const eventData = {
    event: 'project_view',
    project_name: projectName,
    project_type: projectType,
    timestamp: new Date().toISOString(),
  };
  
  pushToDataLayer(eventData);
  sendToGA4('project_view', {
    project_name: projectName,
    project_type: projectType,
  });
};

// Tracking des soumissions de formulaire de contact
export const trackContactForm = (formType: string, success: boolean) => {
  const eventData = {
    event: 'contact_form_submit',
    form_type: formType,
    success: success,
    timestamp: new Date().toISOString(),
  };
  
  pushToDataLayer(eventData);
  sendToGA4('contact_form_submit', {
    form_type: formType,
    success: success,
  });
};

// Tracking des téléchargements
export const trackDownload = (fileType: string, fileName: string) => {
  pushToDataLayer({
    event: 'file_download',
    file_type: fileType,
    file_name: fileName,
    timestamp: new Date().toISOString(),
  });
};

// Tracking des clics sur les liens externes
export const trackExternalLink = (linkUrl: string, linkText: string) => {
  const eventData = {
    event: 'external_link_click',
    link_url: linkUrl,
    link_text: linkText,
    timestamp: new Date().toISOString(),
  };
  
  pushToDataLayer(eventData);
  sendToGA4('external_link_click', {
    link_url: linkUrl,
    link_text: linkText,
  });
};

// Tracking de la navigation
export const trackNavigation = (section: string, action: string) => {
  pushToDataLayer({
    event: 'navigation',
    section: section,
    action: action,
    timestamp: new Date().toISOString(),
  });
};

// Tracking des performances
export const trackPerformance = (metric: string, value: number) => {
  pushToDataLayer({
    event: 'performance_metric',
    metric_name: metric,
    metric_value: value,
    timestamp: new Date().toISOString(),
  });
};

// Tracking de l'engagement (scroll, temps passé, etc.)
export const trackEngagement = (type: string, value: any) => {
  pushToDataLayer({
    event: 'user_engagement',
    engagement_type: type,
    engagement_value: value,
    timestamp: new Date().toISOString(),
  });
};

// Tracking des erreurs
export const trackError = (errorType: string, errorMessage: string) => {
  pushToDataLayer({
    event: 'error',
    error_type: errorType,
    error_message: errorMessage,
    timestamp: new Date().toISOString(),
  });
};

// Configuration des variables personnalisées
export const setCustomVariables = (variables: Record<string, any>) => {
  pushToDataLayer({
    event: 'custom_variables',
    ...variables,
    timestamp: new Date().toISOString(),
  });
};

// Tracking de la conversion (objectif principal)
export const trackConversion = (conversionType: string, value?: number) => {
  pushToDataLayer({
    event: 'conversion',
    conversion_type: conversionType,
    conversion_value: value,
    timestamp: new Date().toISOString(),
  });
};
