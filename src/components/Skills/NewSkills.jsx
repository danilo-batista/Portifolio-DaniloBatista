import { skillsList } from '../../database/skillsList';
import styles from './NewSkills.module.scss';

export function NewSkills() {
  return (
    <section className={styles.skill}>
      <h2 className={styles.skill__title}>Habilidades</h2>
      <ul className={styles.skill__listItems}>
        {skillsList.map((skill) => {
          return (
            <li key={skill} className={styles.skill__items}>
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
