import { NavLink } from 'react-router-dom';
import { menuList } from '../../Router';

import styles from '../Menus/Menu.module.scss';

export function Menu() {
  return (
    <ul className={styles.menuList}>
      {menuList.map((menu) => {
        return (
          <li className={styles.menuList__item}>
            <NavLink to={menu.to}>{menu.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
