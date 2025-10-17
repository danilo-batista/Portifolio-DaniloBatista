import { useEffect, useId, useState } from 'react';
import { Button } from '../Buttons';
import styles from './PrivacyBanner.module.scss';

export function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const cookieBannerId = useId();

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie_consent');
    if (consentGiven !== 'true') {
      setVisible(true);
    }
  }, []);

  // Handler para aceitar cookies
  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  // Handler para recusar cookies
  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className={styles.cookieOverlay} />

      <div id={cookieBannerId} className={styles.cookieBanner}>
        <div className={styles.cookieBanner__content}>
          <p>
            Usamos cookies para melhorar sua experiência e analisar o tráfego.
            Ao aceitar, você concorda com o uso de cookies para fins de
            estatísticas.
          </p>
          <div className={styles.cookieBanner__actions}>
            <Button type="button" onClick={handleDecline} intent="secondary">
              Recusar
            </Button>
            <Button
              type="button"
              onClick={handleAccept}
              intent="primary"
              colors="success"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
