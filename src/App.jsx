import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop } from './layouts/ScrollToTop';
import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}
