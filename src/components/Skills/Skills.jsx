import { SectionTitleAndSubTitle } from '@/components/Partials';
import { designTools, softSkills, techSkills } from '@/database/skills.json';
import styles from './Skills.module.scss';

export function Skills() {
  return (
    <section className={styles.section__layoutContainer}>
      <SectionTitleAndSubTitle
        title="Habilidades"
        subtitle="Conhecimentos técnicos e de soft skills desenvolvidos para criar, colaborar e inovar."
      />

      <h3 className={styles.skill__skillType}>Tecnologias</h3>
      <ul className={styles.skill__listItems}>
        {techSkills.map((skill) => {
          return (
            <li key={skill} className={styles.skill__items}>
              {skill}
            </li>
          );
        })}
      </ul>
      <h3 className={styles.skill__skillType}>Soft Skills</h3>
      <ul className={styles.skill__listItems}>
        {softSkills.map((skill) => {
          return (
            <li key={skill} className={styles.skill__items}>
              {skill}
            </li>
          );
        })}
      </ul>
      <h3 className={styles.skill__skillType}>Design Skills</h3>
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
