import { Link } from 'react-router-dom';
import styles from './FooterCopyright.module.scss';

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.footerCopyright}>
      <Link
        to="https://www.danilobatista.com.br"
        target="_blank"
        className={styles.footerCopyright__link}
      >
        <span>portifólio de design |</span> danilo<span>batista®</span>{' '}
        {currentYear}
      </Link>
    </section>
  );
}
