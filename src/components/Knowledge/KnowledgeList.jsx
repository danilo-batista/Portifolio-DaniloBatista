import styles from '../Knowledge/KnowledgeList.module.scss';

import { knowledgeList } from '../../database/knowledge.js';
import { Knowledge } from './Knowledge';

export function KnowledgeList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>Formações</h2>
        <p className={styles.container__description}>
          Conheça os cursos que eu me aprofundei.
        </p>
        <ul className={styles.container__items}>
          {knowledgeList
            .sort((a, b) => b.id - a.id)
            .map((knowledge) => {
              return (
                <>
                  <Knowledge
                    id={knowledge.id}
                    company={knowledge.company}
                    slug={knowledge.slug}
                    brand={knowledge.brand}
                    link={knowledge.link}
                    period={knowledge.period}
                    title={knowledge.title}
                    resume={knowledge.resume}
                    description={knowledge.description}
                    extraProjects={knowledge.extraProjects}
                  />
                </>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
