import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useClickAway } from 'react-use';
import { menuList } from '../../Router';

import Hamburger from 'hamburger-react';
import styles from '../Menus/MenuMobile.module.scss';

export function MenuMobile({ ref }) {
  const [isOpen, setIsOpen] = useState(false);

  useClickAway(ref, () => {
    setIsOpen(false);
  });

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Hamburger
        toggled={isOpen}
        size={32}
        direction="left"
        toggle={setIsOpen}
        easing="ease"
        rounded
        label="Mostra o menu"
        color="#125d95"
      />
      {isOpen && (
        <ul className={styles.menuList}>
          {menuList.map((menu) => {
            return (
              <li className={styles.menuList__item}>
                <NavLink to={menu.to} onClick={handleLinkClick}>
                  {menu.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
