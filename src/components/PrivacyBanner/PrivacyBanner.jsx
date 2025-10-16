import { useEffect, useId, useState } from 'react';
import styles from './PrivacyBanner.module.scss';

export function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const cookieBannerId = useId();

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie_consent');
    if (!consentGiven) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div id={cookieBannerId} className={styles.cookieBanner}>
      <div className={styles.cookieBanner__content}>
        <p>
          Usamos cookies para melhorar sua experiência e analisar o tráfego. Ao
          aceitar, você concorda com o uso de cookies para fins de estatísticas.
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            onClick={() => window.acceptCookies()}
            className={styles.cookieAccept}
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem('cookie_consent', 'false');
              setVisible(false);
            }}
            className={styles.cookieDecline}
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
