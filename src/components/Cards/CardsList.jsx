import { Card } from '../Cards/Card';
import { projectsList } from '../../database/projects';
import * as styles from './CardsList.module.scss';

export function CardsList() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>Projetos</h2>
          <div className={styles.section__cards}>
            {projectsList.map((project) => {
              return (
                <>
                  <Card
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    thumbnail={project.thumbnail}
                    client={project.client}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
