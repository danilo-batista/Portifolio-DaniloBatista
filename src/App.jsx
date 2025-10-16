import { HelmetProvider } from 'react-helmet-async';
import { PrivacyBanner } from '@/components/PrivacyBanner';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { AnalyticsProvider } from '@/providers/AnalyticsProvider';
import { Router } from '@/Router';

function ScrollToTopWrapper() {
  useScrollToTop();
  return null;
}

export function App() {
  return (
    <HelmetProvider>
      <ScrollToTopWrapper />
      <Router />
      <PrivacyBanner />
      <AnalyticsProvider />
    </HelmetProvider>
  );
}
