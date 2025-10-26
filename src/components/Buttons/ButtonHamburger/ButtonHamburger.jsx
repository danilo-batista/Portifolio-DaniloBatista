import styles from './ButtonHamburger.module.scss';

export function ButtonHamburger({
  isOpen,
  onToggle,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-label': ariaLabel,
}) {
  return (
    <div className={styles.hamburger}>
      <button
        type="button"
        className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`}
        onClick={() => onToggle?.(!isOpen)}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={ariaLabel}
      >
        <span />
        <span />
        <span />
      </button>
      <p className={styles.hamburgerLegend}>Menu</p>
    </div>
  );
}
