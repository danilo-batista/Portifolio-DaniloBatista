import { NavLink } from 'react-router-dom';
import { Menu } from '@/components/Menus';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__brand}>
        <NavLink to="/">
          danilo<span className={styles.header__brandSpan}>batista®</span>
        </NavLink>
      </h1>
      <Menu />
    </header>
  );
}
