import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.scss';
import { Menu } from '../Menus/Menu';
import { MenuMobile } from '../Menus/MenuMobile';

export function Header() {
  const ref = useRef(null);

  return (
    <header className={styles.header}>
      <h1 className={styles.header__brand}>
        <NavLink to="/">
          danilo<span>batista®</span>
        </NavLink>
      </h1>
      <nav className={styles.header__navigation}>
        <div className={styles.container__menuMobile} ref={ref}>
          <MenuMobile ref={ref} />
        </div>
        <div className={styles.container__menuFull}>
          <Menu />
        </div>
      </nav>
    </header>
  );
}
