import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export function TemplateSEO({
  title,
  description,
  keywords,
  ogImage,
  children,
}) {
  const location = useLocation();
  const canonicalUrl = `https://www.danilobatista.com${location.pathname}`;

  const defaultDescription =
    'Portfólio profissional de Danilo Batista, desenvolvedor front-end e designer gráfico.';
  const defaultOgImage = '/og-default.png';

  return (
    <>
      <Helmet>
        {/* Fallback para SEO e compartilhamento inicial */}
        <meta name="author" content="Danilo Batista" />

        {/* Título e descrição específicos da página */}
        <title>{`danilobatista® | ${title}`}</title>
        <meta name="description" content={description || defaultDescription} />

        {/* Meta tags específicas da página */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}

        {/* Open Graph - Específico da página */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="danilobatista®" />
        <meta property="og:title" content={`danilobatista® | ${title}`} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage || defaultOgImage} />

        {/* Twitter Card - Específico da página */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`danilobatista® | ${title}`} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:image" content={ogImage || defaultOgImage} />
      </Helmet>
      {children}
    </>
  );
}
