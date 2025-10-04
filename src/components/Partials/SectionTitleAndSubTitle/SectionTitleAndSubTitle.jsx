import styles from './SectionTitleAndSubTitle.module.scss';

export function SectionTitleAndSubTitle({ title, subtitle }) {
  return (
    <>
      <h2 className={styles.section__title}>{title}</h2>
      <p className={styles.section__subtitle}>{subtitle}</p>
    </>
  );
}
