import { careerList } from '../../database/career';
import styles from '../Career/CareerList.module.scss';
import { Career } from './Career';

export function CareerList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>Experiências</h2>
        <p className={styles.container__description}>
          Conheça minha trajetória profissional.
        </p>
        <ul className={styles.container__items}>
          {careerList
            .sort((a, b) => b.id - a.id)
            .map((career) => {
              return (
                <Career
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
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
}
