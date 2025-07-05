import styles from '../Skills/Skills.module.scss';

export function Skills() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.container__title}>Minhas Habilidades</h2>
        <ul className={styles.container__listItems}>
          <li className={styles.container__items}>React.js</li>
          <li className={styles.container__items}>JavaScript</li>
          <li className={styles.container__items}>HTML | CSS</li>
          <li className={styles.container__items}>Git | GitHub</li>
          <li className={styles.container__items}>Trabalho em equipe</li>
          <li className={styles.container__items}>Resolução de problemas</li>
          <li className={styles.container__items}>Proatividade</li>
          <li className={styles.container__items}>Melhoria contínua</li>
        </ul>
      </div>
    </section>
  );
}
