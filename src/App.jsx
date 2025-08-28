import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Router } from '@/Router';

/* Componente wrapper para usar o hook. Não retorna nada no DOM, apenas faz o scroll pro Topo. */
function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

export function App() {
  return (
    <HelmetProvider>
      <ScrollToTopWrapper />
      <Router />
      <Analytics />
    </HelmetProvider>
  );
}
