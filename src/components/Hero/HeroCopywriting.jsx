import styles from '../Hero/HeroCopywriting.module.scss';

export function HeroCopywriting({ title, description }) {
  return (
    <>
      <h2 className={styles.hero__title}>{title}</h2>
      {description.map((description) => {
        console.log(description);
        return <p className={styles.hero__description}>{description}</p>;
      })}
    </>
  );
}

{
  /* {description.map((data) => {
  console.log(data);
  return <p className={styles.hero__description}>{data}</p>;
})} */
}
