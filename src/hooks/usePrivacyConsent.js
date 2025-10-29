import { useEffect, useState } from 'react';

export function usePrivacyConsent() {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie_consent');
    setVisible(consentGiven !== 'true');
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setVisible(false);
  };

  return {
    visible,
    handleAccept,
    handleDecline,
  };
}
