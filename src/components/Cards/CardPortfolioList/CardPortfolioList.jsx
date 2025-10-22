import { useEffect, useId, useState } from 'react';
import { Button } from '@/components/Buttons';
import { CardPortfolio } from '@/components/Cards';
import { SectionTitleAndSubTitle } from '@/components/Partials';
import styles from './CardPortfolioList.module.scss';

export function PortfolioList(props) {
  const [state, setState] = useState({ listToRender: [] });
  const portfolioId = useId();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await import(`@/database/projects.json`);
        const projectData = data.default
          .sort((a, b) => b.id - a.id)
          .filter((project) =>
            props.showHighlights ? project.highlight : true,
          );

        setState({ listToRender: projectData });
      } catch (error) {
        console.error('Error ao carregar json ou componente:', error);
      }
    };
    loadData();
  }, [props.showHighlights]);

  return (
    <section className={styles.section__layoutContainer} id={portfolioId}>
      <SectionTitleAndSubTitle
        title="Projetos"
        subtitle="Experiências práticas que refletem meu crescimento técnico e criativo."
      />
      <article className={styles.cardLists__card}>
        {state.listToRender.map((item, index) => {
          const isEven = index % 2 === 0;
          return <CardPortfolio key={item.id} {...item} isOdd={!isEven} />;
        })}
      </article>

      <div className={styles.cardList__links}>
        {props.showMoreLinks && (
          <div className={styles.cardList__buttons}>
            <Button to={`/portifolio`} intent="primary" colors="success">
              Veja mais projetos aqui
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
