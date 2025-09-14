import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitleAndSubTitle } from '../../SectionTitleAndSubTitle';
import { CardPortfolio } from './CardPortfolio';
import styles from './PortfolioList.module.scss';

export function PortfolioList(props) {
  const [state, setState] = useState({ listToRender: [] });

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
    <section id="portfolioId" className={styles.section__layoutContainer}>
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
            <Link to="/portifolio" className={styles.cardList__button}>
              Veja mais projetos aqui
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
