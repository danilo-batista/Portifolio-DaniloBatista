import { Link } from 'react-router-dom';
import styles from './FooterCopyright.module.scss';

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <aside
      className={styles.footerCopyright}
      aria-label="Informações de copyright"
    >
      <p className={styles.footerCopyright__text}>
        <Link
          to="https://www.danilobatista.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerCopyright__link}
          aria-label="Visitar portifólio de design de Danilo Batista"
        >
          <span>portifólio de design |</span> danilo<span>batista®</span>{' '}
          {currentYear}
        </Link>
      </p>
    </aside>
  );
}
