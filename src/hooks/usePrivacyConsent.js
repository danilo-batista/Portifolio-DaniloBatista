import { useEffect, useState } from 'react';

export function usePrivacyConsent() {
  const [consentGiven, setConsentGiven] = useState(null);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie_consent');
    setConsentGiven(consentGiven === 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setConsentGiven(true);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setConsentGiven(true);
  };

  return {
    consentGiven,
    handleAccept,
    handleDecline,
  };
}
