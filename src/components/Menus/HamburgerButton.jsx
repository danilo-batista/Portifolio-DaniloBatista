import styles from './HamburgerButton.module.scss';

export function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={() => onToggle?.(!isOpen)}
      aria-label="Abrir ou fechar menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}
