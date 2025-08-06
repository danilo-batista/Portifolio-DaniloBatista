import { useState } from 'react';
import styles from './HamburgerButton.module.scss';

export function HamburgerButton({ onToggle }) {
  /* Estado para controlar a animação (começa fechado). */
  const [isOpen, setIsOpen] = useState(false);

  /* Função que alterna o status de abertura e fechamento. */
  const toggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) onToggle(newState); // Notifica o componente pai
  };

  return (
    <button
      type="button"
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={toggle}
      aria-label="Abrir ou fechar menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
