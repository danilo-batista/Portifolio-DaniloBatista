import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Router } from '@/Router';

/* Componente wrapper para usar o hook. Não retorna nada no DOM, apenas faz o scroll pro Topo. */
function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

export function App() {
  useEffect(() => {
    const clarityId = import.meta.env.VITE_CLARITY_ID;
    if (clarityId) {
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
      })(window, document, 'clarity', 'script', clarityId);
    }
  }, []);

  return (
    <HelmetProvider>
      <ScrollToTopWrapper />
      <Router />
      <Analytics />
    </HelmetProvider>
  );
}
