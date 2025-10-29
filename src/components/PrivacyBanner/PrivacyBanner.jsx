import { useId } from 'react';
import { Button } from '@/components/Buttons';
import { usePrivacyConsent } from '@/hooks/usePrivacyConsent';
import styles from './PrivacyBanner.module.scss';

export function PrivacyBanner() {
  const cookieBannerId = useId();
  const { consentGiven, handleAccept, handleDecline } = usePrivacyConsent();

  const visible = consentGiven === false;

  return (
    <>
      <div
        className={styles.cookieOverlay}
        aria-hidden="true"
        style={{
          opacity: visible ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      />

      <div
        id={cookieBannerId}
        className={styles.cookieBanner}
        role="dialog"
        aria-modal="true"
        aria-label="Aviso de cookies"
        style={{
          opacity: visible ? 1 : 0,
          visibility: visible ? 'visible' : 'hidden',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
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
