import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  /* Chama o hook que expõe a URL, desestruturando o pathname. */
  const { pathname } = useLocation();

  /*
   1) Este efeito ativa apenas quando a url mudar.
   2) Ao mudar, rola a janela para o topo da página
  */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  /* Aplicado manualmente, como em um ação onClick. */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /* Função genérica para rolar até qualquer elemento da página */
  const scrollToElement = (elementId, behavior = 'smooth') => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior });
    }
  };

  return { scrollToTop, scrollToElement, pathname };
}
