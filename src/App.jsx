import { Analytics } from '@vercel/analytics/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './layouts/ScrollToTop';
import { Router } from './Router';

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Router />
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  );
}
