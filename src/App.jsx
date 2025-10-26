import { HelmetProvider } from 'react-helmet-async';
import { PrivacyBanner } from '@/components/PrivacyBanner';
import { AnalyticsProvider, ScrollToTopProvider } from '@/providers';
import { Router } from '@/Router';

export function App() {
  return (
    <HelmetProvider>
      <ScrollToTopProvider>
        <AnalyticsProvider>
          <Router />
        </AnalyticsProvider>
      </ScrollToTopProvider>
      <PrivacyBanner />
    </HelmetProvider>
  );
}
