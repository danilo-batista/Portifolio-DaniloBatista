import { designTools, softSkills, techSkills } from '@/database/skills.json';
import styles from './NewSkills.module.scss';

export function NewSkills() {
  return (
    <section className={styles.skill}>
      <h2 className={styles.skill__title}>Habilidades</h2>
      <h3 className={styles.skill__subtitle}>Tecnologias</h3>
      <ul className={styles.skill__listItems}>
        {techSkills.map((skill) => {
          return (
            <li key={skill} className={styles.skill__items}>
              {skill}
            </li>
          );
        })}
      </ul>
      <h3 className={styles.skill__subtitle}>Soft Skills</h3>
      <ul className={styles.skill__listItems}>
        {softSkills.map((skill) => {
          return (
            <li key={skill} className={styles.skill__items}>
              {skill}
            </li>
          );
        })}
      </ul>
      <h3 className={styles.skill__subtitle}>Design Skills</h3>
      <ul className={styles.skill__listItems}>
        {designTools.map((skill) => {
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
