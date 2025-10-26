import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToElement = (elementId, behavior = 'smooth') => {
    const element = document.getElementById(elementId);
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior, block: 'start' });
    });
  };

  return { scrollToTop, scrollToElement, pathname };
}
