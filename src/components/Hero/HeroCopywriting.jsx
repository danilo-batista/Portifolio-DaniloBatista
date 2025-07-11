import styles from '../Hero/HeroCopywriting.module.scss';

export function HeroCopywriting({ title, description }) {
  return (
    <>
      <h2 className={styles.hero__title}>{title}</h2>
      {description.map((description) => {
        return (
          <p className={styles.hero__description} key={description}>
            {description}
          </p>
        );
      })}
    </>
  );
}
