import styles from './CardTitleAndDate.module.scss';

export function CardTitleAndDate({ title, complement }) {
  return (
    <>
      <p className={styles.card__infoComplement}>{complement}</p>
      <h3 className={styles.card__infoTitle}>{title}</h3>
    </>
  );
}
