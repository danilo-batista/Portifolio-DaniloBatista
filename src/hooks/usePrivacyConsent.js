import { useEffect, useState } from 'react';

export function usePrivacyConsent() {
  const [consentGiven, setConsentGiven] = useState(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    setConsentGiven(consent === 'true');

    // Atualizar consentimento ao carregar a página se já foi aceito
    if (consent === 'true' && window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setConsentGiven(true);

    // Atualizar consentimento do Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setConsentGiven(true);

    // Manter consentimento negado
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });
    }
  };

  return {
    consentGiven,
    handleAccept,
    handleDecline,
  };
}
