import { Link } from 'react-router-dom';
import styles from './FooterCopyright.module.scss';

export function FooterCopyright() {
  return (
    <section className={styles.footerCopyright}>
      <Link
        to="https://www.danilobatista.com.br"
        target="_blank"
        className={styles.footerCopyright__link}
      >
        <span>portifólio de design |</span> danilo<span>batista®</span> 2025
      </Link>
    </section>
  );
}
