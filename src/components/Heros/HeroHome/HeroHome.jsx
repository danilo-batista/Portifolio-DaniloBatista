import { Button } from '@/components/Buttons';
import styles from './HeroHome.module.scss';

export function HeroHome() {
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
        <Button to="/sobre-mim" intent="secondary" colors="info">
          Sobre Mim
        </Button>
        <Button to="/contato" intent="primary" colors="info">
          Fale comigo
        </Button>
      </div>
    </section>
  );
}
