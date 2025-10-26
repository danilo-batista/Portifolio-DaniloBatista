import { NavLink } from 'react-router-dom';
import { ButtonHamburger } from '@/components/Buttons';
import { pagesMetadata } from '@/config';
import { useMenu } from '@/hooks';
import styles from './Menu.module.scss';

export function Menu() {
  const { isOpen, setIsOpen, menuRef, menuId, handleLinkClick, handleKeyDown } =
    useMenu();

  const pages = Object.values(pagesMetadata);

  /* Função que faz a checagem se o link corresponde a URL da página, aplicando o estilo para sinalizar a página ativa.  */
  const getLinkClassName = ({ isActive }) =>
    isActive
      ? `${styles.menuList__itemActive} ${styles.menuList__itemLink}`
      : styles.menuList__itemLink;

  return (
    <nav
      className={styles.menuList__wrapper}
      aria-label="Menu principal"
      onKeyDown={handleKeyDown}
    >
      <div className={styles.menuList__mobile} ref={menuRef}>
        <ButtonHamburger
          isOpen={isOpen}
          onToggle={setIsOpen}
          aria-controls={`mobile-menu-${menuId}`}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        />

        {isOpen && (
          <ul className={styles.menuList} id={`mobile-menu-${menuId}`}>
            {pages.map((page) => {
              return (
                <li className={styles.menuList__item} key={page.title}>
                  <NavLink
                    to={page.path}
                    onClick={handleLinkClick}
                    className={getLinkClassName}
                    aria-current={
                      page.path === window.location.pathname
                        ? 'page'
                        : undefined
                    }
                  >
                    {page.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <ul className={styles.menuList__desktop}>
        {pages.map((page) => {
          return (
            <li className={styles.menuList__item} key={page.title}>
              <NavLink
                to={page.path}
                className={getLinkClassName}
                aria-current={
                  page.path === window.location.pathname ? 'page' : undefined
                }
              >
                {page.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
