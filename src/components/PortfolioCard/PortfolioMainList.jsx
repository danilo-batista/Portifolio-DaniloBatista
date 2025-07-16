import { Link } from 'react-router-dom';
import { projectsList } from '../../database/projects';
import { PortfolioCard } from '../PortfolioCard/PortfolioCard';

import * as styles from './PortfolioMainList.module.scss';

export function PortfolioMainList(props) {
  const listToRender = projectsList
    .sort((a, b) => b.id - a.id)
    .filter((project) => (props.showHighlights ? project.highlight : true));

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>Projetos</h2>
        <p className={styles.container__description}>
          Conheça projetos de destaque.
        </p>
        <div className={styles.container__cards}>
          {listToRender.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <PortfolioCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                date={project.date}
                client={project.client}
                slug={project.slug}
                thumbnail={project.thumbnail}
                link={project.link}
                highlight={project.highlight}
                category={project.category}
                isEven={isEven}
              />
            );
          })}
        </div>
        {props.showMoreLinks && (
          <div className={styles.section__moreProjects}>
            <Link to="/portifolio">Conheça mais projetos</Link>
          </div>
        )}
      </div>
    </section>
  );
}
