import { useScrollToTop } from '@/hooks';

export function ScrollToTopProvider({ children }) {
  useScrollToTop();
  return children;
}
