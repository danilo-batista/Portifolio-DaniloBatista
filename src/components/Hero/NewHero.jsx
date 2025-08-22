import { NavLink } from 'react-router-dom';
import styles from '../Hero/NewHero.module.scss';

export function NewHero() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.hero__title}>
        Design e código unidos para impulsionar experiências ao seu negócio.
      </h2>
      <ul className={styles.hero__list}>
        <li className={styles.hero__listItems}>
          Soluções completas: do visual ao funcional
        </li>
        <li className={styles.hero__listItems}>
          Experiência com foco em negócios e pessoas
        </li>
        <li className={styles.hero__listItems}>
          Cocriação para gerar valor real
        </li>
      </ul>
      <div className={styles.hero__buttons}>
        <NavLink to="/sobre-mim" className={styles.hero__button}>
          Sobre mim
        </NavLink>

        <NavLink to="/contato" className={styles.hero__button}>
          Fale comigo
        </NavLink>
      </div>
    </section>
  );
}
