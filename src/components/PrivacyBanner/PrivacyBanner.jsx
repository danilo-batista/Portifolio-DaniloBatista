import { useId } from 'react';
import { Button } from '@/components/Buttons';
import { usePrivacyConsent } from '@/hooks/usePrivacyConsent';
import styles from './PrivacyBanner.module.scss';

export function PrivacyBanner() {
  const cookieBannerId = useId();
  const { visible, handleAccept, handleDecline } = usePrivacyConsent();

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
