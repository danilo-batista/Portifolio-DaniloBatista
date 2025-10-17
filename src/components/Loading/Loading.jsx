import styles from './Loading.module.scss';

export function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__overlay} />
      <div className={styles.loading__content}>
        <div className={styles.loading__spinner} />
        <span>Carregando...</span>
      </div>
    </div>
  );
}
