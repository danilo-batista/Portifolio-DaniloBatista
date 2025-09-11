import { useEffect, useState } from 'react';
import { SectionTitleAndSubTitle } from '../SectionTitleAndSubTitle';
import styles from './CardList.module.scss';

const componentsMap = {
  CardCareer: () => import('./CardCareer'),
  CardCourses: () => import('./CardCourses'),
  CardKnowledge: () => import('./CardKnowledge'),
};

export function CardList({ component, listItem, title, subtitle, isEven }) {
  /* Cria um estado para atualizar a lista de arquivos json. */
  const [state, setState] = useState({
    listToRender: [],
    LoadedComponent: null,
  });

  /* Importa dinamicamente o JSON baseado no listItem. */
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(`@/database/${listItem}.json`);
        const sortedData = data.default.sort((a, b) => b.id - a.id);

        /* Importa o componente conforme o map criado */
        const loadComponent = componentsMap[component];

        if (!loadComponent) {
          throw new Error(`Componente "${component}" não mapeado`);
        }
        const componentModule = await loadComponent();

        setState({
          listToRender: sortedData,
          LoadedComponent:
            componentModule.default || componentModule[component],
        });
      } catch (error) {
        console.error('Error ao carregar json ou componente:', error);
      }
    };

    loadData();
  }, [component, listItem]);

  if (!state.LoadedComponent) {
    return <div>Carregando...</div>;
  }

  const Loaded = state.LoadedComponent;

  return (
    <section
      className={`${styles.section__layoutContainer} ${isEven ? styles.cardLists__even : ''}`}
      id={`${listItem}Id`}
    >
      <SectionTitleAndSubTitle title={title} subtitle={subtitle} />

      <article className={styles.cardLists__card}>
        {state.listToRender.map((item) => {
          return <Loaded key={item.id} {...item} isOdd={!isEven} />;
        })}
      </article>
    </section>
  );
}
