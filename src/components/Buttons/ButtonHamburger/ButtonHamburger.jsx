import styles from './ButtonHamburger.module.scss';

export function ButtonHamburger({ isOpen, onToggle }) {
  return (
    <div className={styles.hamburger}>
      <button
        type="button"
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={() => onToggle?.(!isOpen)}
        aria-label="Abrir ou fechar menu"
      >
        <span />
        <span />
        <span />
      </button>
      <p className={styles.hamburgerLegend}>Menu</p>
    </div>
  );
}
