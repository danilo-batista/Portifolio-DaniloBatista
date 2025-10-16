import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

export function AnalyticsProvider() {
  useEffect(() => {
    /* Adiciona as variáveis de ambiente para os IDs de rastreamento. */
    const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

    /* Pré-carregamento do GoogleAnalytics */
    if (GA_ID) {
      const preload = document.createElement('link');
      preload.rel = 'preload';
      preload.as = 'script';
      preload.href = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(preload);

      /* Scripts principal */
      const gaScript = document.createElement('script');
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      gaScript.async = true;
      document.head.appendChild(gaScript);

      /* Configuração do GA + Google Consent Mode */
      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }

      gtag('js', new Date());

      /* Consentimento padrão: Negado até ser aceito. */
      gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
      });

      gtag('config', GA_ID, {
        anonymize_ip: true,
        page_path: window.location.pathname,
      });

      /* Função global para aceitar os cookies: será usada pelo Banner. */
      window.acceptCookies = () => {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
        });
        localStorage.setItem('cookie_consent', 'true');
        document.querySelector('#cookie-banner').style.display = 'none';
      };
    }

    /* Microsoft Clarity */
    if (CLARITY_ID) {
      ((c, l, a, r, i, t, y) => {
        c[a] =
          c[a] ||
          ((...args) => {
            if (!c[a].q) c[a].q = [];
            c[a].q.push(args);
          });
        t = l.createElement(r);
        t.async = 1;
        t.src = `https://www.clarity.ms/tag/${i}`;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', CLARITY_ID);
    }
  }, []);

  /* Retorna VercelAnalytics */
  return <Analytics />;
}
