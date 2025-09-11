import styles from './CardFragments-TitleAndDate.module.scss';

export function CardTitleAndDate({ title, period }) {
  return (
    <>
      <p className={styles.card__infoPeriod}>{period}</p>
      <h3 className={styles.card__infoTitle}>{title}</h3>
    </>
  );
}
