import { skillsList } from '../../database/skillsList';
import styles from '../Skills/Skills.module.scss';

export function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>Minhas Habilidades</h2>
        <ul className={styles.container__listItems}>
          {skillsList.map((skill) => {
            return (
              <li key={skill} className={styles.container__items}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
