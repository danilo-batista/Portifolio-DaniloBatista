import knowledge from '@/database/knowledge.json';
import { NewKnowledge } from './NewKnowledge';
import styles from './NewKnowledgeList.module.scss';

export function NewKnowledgeList() {
  const listToRender = knowledge.sort((a, b) => b.id - a.id);
  return (
    <section className={styles.knowledgeList}>
      <h2 className={styles.knowledgeList__title}>Formação Acadêmica</h2>
      <p className={styles.knowledgeList__subtitle}>
        Minha formação acadêmica e os aprendizados que fundamentam minha
        carreira.
      </p>
      <div className={styles.knowledgeList__cards}>
        {listToRender.map((knowledge) => {
          return (
            <NewKnowledge
              key={knowledge.id}
              id={knowledge.id}
              company={knowledge.company}
              slug={knowledge.slug}
              brand={knowledge.brand}
              link={knowledge.link}
              period={knowledge.period}
              title={knowledge.title}
              type={knowledge.type}
              resume={knowledge.resume}
              description={knowledge.description}
              extraProjects={knowledge.extraProjects}
            />
          );
        })}
      </div>
    </section>
  );
}
