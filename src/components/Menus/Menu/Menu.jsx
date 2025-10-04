import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useClickAway } from 'react-use';
import { ButtonHamburger } from '@/components/Buttons';
import menuList from '@/database/menuList.json';
import styles from './Menu.module.scss';

export function Menu() {
  /* Estado para controlar o Menu (começa fechado). */
  const [isOpen, setIsOpen] = useState(false);

  /* Permite que o React acesse o DOM do Menu */
  const ref = useRef(null);

  /* Escuta os cliques do documento e quando captura o clique fora do Menu, ele o fecha. */
  useClickAway(ref, () => setIsOpen(false));

  /* Função que fecha o menu mobile após o clique. */
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  /* Função que faz a checagem se o link corresponde a URL da página, aplicando o estilo para sinalizar a página ativa.  */
  const className = ({ isActive }) =>
    isActive
      ? `${styles.menuList__itemActive} ${styles.menuList__itemLink}`
      : styles.menuList__itemLink;

  return (
    <nav className={styles.menuList__wrapper}>
      <div className={styles.menuList__mobile} ref={ref}>
        <ButtonHamburger isOpen={isOpen} onToggle={setIsOpen} />
        {isOpen && (
          <ul className={styles.menuList}>
            {menuList.map((menu) => {
              return (
                <li className={styles.menuList__item} key={menu.title}>
                  <NavLink
                    to={menu.to}
                    onClick={handleLinkClick}
                    className={className}
                  >
                    {menu.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <ul className={styles.menuList__desktop}>
        {menuList.map((menu) => {
          return (
            <li className={styles.menuList__item} key={menu.title}>
              <NavLink to={menu.to} className={className}>
                {menu.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
