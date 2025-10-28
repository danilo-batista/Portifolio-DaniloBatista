import { useEffect, useState } from 'react';
import { Button, Loading, SectionTitleAndSubTitle } from '@/components';
import styles from './CardList.module.scss';

const componentsMap = {
  CardCareer: () => import('@/components/Cards/CardCareer'),
  CardCourses: () => import('@/components/Cards/CardCourses'),
  CardKnowledge: () => import('@/components/Cards/CardKnowledge'),
  CardPortfolio: () => import('@/components/Cards/CardPortfolio'),
};

export function CardList({
  component,
  listItem,
  title,
  subtitle,
  isEven = false,
  showHighlights = false,
  showMoreButton = false,
  moreButtonText = 'Veja mais projetos aqui',
  moreButtonLink = '/portifolio',
  sectionId,
}) {
  /* Cria um estado para atualizar a lista de arquivos json. */
  const [state, setState] = useState({
    listToRender: [],
    LoadedComponent: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(`@/database/${listItem}.json`);

        // Ordena e filtra (se necessário)
        let processedData = data.default.sort((a, b) => b.id - a.id);

        // Filtro para highlights (usado no Portfolio)
        if (showHighlights) {
          processedData = processedData.filter((item) => item.highlight);
        }
        // Importa o componente
        const loadComponent = componentsMap[component];
        if (!loadComponent) {
          throw new Error(`Componente "${component}" não mapeado`);
        }

        const componentModule = await loadComponent();

        setState({
          listToRender: processedData,
          LoadedComponent:
            componentModule.default || componentModule[component],
        });
      } catch (error) {
        console.error('Error ao carregar json ou componente:', error);
      }
    };
    loadData();
  }, [component, listItem, showHighlights]);

  if (!state.LoadedComponent) {
    return <Loading />;
  }

  const Loaded = state.LoadedComponent;
  const isPortfolio = component === 'CardPortfolio';

  return (
    <section
      className={`${styles.section__layoutContainer} ${isEven ? styles.cardLists__even : ''} ${isPortfolio ? styles.section__portfolio : ''}`}
      id={sectionId || `${listItem}Id`}
    >
      <SectionTitleAndSubTitle title={title} subtitle={subtitle} />

      <article
        className={`${styles.cardLists__card} ${isPortfolio ? styles.cardLists__portfolio : ''}`}
      >
        {state.listToRender.map((item, index) => {
          const itemIsOdd = isPortfolio ? index % 2 !== 0 : !isEven;
          return <Loaded key={item.id} {...item} isOdd={itemIsOdd} />;
        })}
      </article>

      {showMoreButton && (
        <div className={styles.cardList__links}>
          <div className={styles.cardList__buttons}>
            <Button to={moreButtonLink} intent="primary" colors="success">
              {moreButtonText}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
