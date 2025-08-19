import { careerList } from '../../../database/career';
import { NewCareer } from './NewCareer';
import styles from './NewCareerList.module.scss';

export function NewCareerList() {
  const listToRender = careerList.sort((a, b) => b.id - a.id);
  return (
    <section className={styles.careerList}>
      <h2 className={styles.careerList__title}>Experiências</h2>
      <p className={styles.careerList__subtitle}>
        Explore minha trajetória e descubra os desafios que marcaram minha
        carreira.
      </p>
      <div className={styles.careerList__cards}>
        {listToRender.map((career, index) => {
          const isEven = index % 2 === 0;
          return (
            <NewCareer
              key={career.id}
              id={career.id}
              company={career.company}
              slug={career.slug}
              brand={career.brand}
              link={career.link}
              period={career.period}
              title={career.title}
              resume={career.resume}
              description={career.description}
              extraProjects={career.extraProjects}
              isEven={isEven}
            />
          );
        })}
      </div>
    </section>
  );
}
