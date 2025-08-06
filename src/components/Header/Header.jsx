import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import { Menu } from '../Menus/Menu';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__brand}>
        <NavLink to="/">
          danilo<span>batista®</span>
        </NavLink>
      </h1>
      <Menu />
    </header>
  );
}
