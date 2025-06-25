import { Link } from 'react-router-dom';

import { projectsList } from '../../database/projects';
import { Card } from '../Cards/Card';

import * as styles from './CardsList.module.scss';

export function CardsList() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>Projetos</h2>
          <p className={styles.section__description}>
            Conheça projetos de destaque.
          </p>
          <div className={styles.section__cards}>
            {projectsList
              .sort((a, b) => b.id - a.id)
              .map((project) => {
                return (
                  <>
                    <Card
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      date={project.date}
                      client={project.client}
                      slug={project.slug}
                      thumbnail={project.thumbnail}
                      link={project.link}
                    />
                  </>
                );
              })}
          </div>
          <div className={styles.section__moreProjects}>
            <Link to="/portifolio">Conheça mais projetos</Link>
          </div>
        </div>
      </section>
    </>
  );
}
