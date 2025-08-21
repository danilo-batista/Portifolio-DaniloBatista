import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function Page({ title, description, children }) {
  const location = useLocation();

  useEffect(() => {
    document.title = `danilobatista® | ${title}`;
  }, [title]);

  return (
    <>
      <Helmet>
        {/* Título e descrição específicos da página */}
        <title>{`danilobatista® | ${title}`}</title>
        <meta
          name="description"
          content={
            description ||
            'Portfólio profissional de Danilo Batista, desenvolvedor front-end e designer gráfico.'
          }
        />

        {/* Meta tags específicas da página */}
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://danilobatista.com${location.pathname}`}
        />

        {/* Open Graph - Específico da página */}
        <meta property="og:title" content={`danilobatista® | ${title}`} />
        <meta
          property="og:description"
          content={
            description ||
            'Portfólio profissional de Danilo Batista, desenvolvedor front-end e designer gráfico.'
          }
        />
        <meta
          property="og:url"
          content={`https://danilobatista.com${location.pathname}`}
        />

        {/* Twitter Card - Específico da página */}
        <meta name="twitter:title" content={`danilobatista® | ${title}`} />
        <meta
          name="twitter:description"
          content={
            description ||
            'Portfólio profissional de Danilo Batista, desenvolvedor front-end e designer gráfico.'
          }
        />
      </Helmet>
      {children}
    </>
  );
}
