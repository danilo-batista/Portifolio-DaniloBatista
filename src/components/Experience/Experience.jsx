import styles from '../Experience/Experience.module.scss';

import { ExperienceList } from './ExperienceList';
import { KnowledgeList } from './KnowledgeList';

export function Experience() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>Experiências</h2>
          <p className={styles.section__description}>
            Conheça minha trajetória profissional.
          </p>
          <ExperienceList />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>Formações</h2>
          <p className={styles.section__description}>
            Conheça os meus aprendizados.
          </p>
          <KnowledgeList />
        </div>
      </section>
    </>
  );
}
