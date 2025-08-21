import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  /* Chama o hook que expõe a URL, desestruturando o pathname. */
  const { pathname } = useLocation();

  /*
   1) Este efeito ativa apenas quando a url mudar.
   2) Ao mudar, rola a janela para o topo da página
  */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /* Retorno nulo, pois não renderiza nada na tela. */
  return null;
}
