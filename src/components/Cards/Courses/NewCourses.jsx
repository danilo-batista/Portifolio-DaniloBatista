import styles from './NewCourses.module.scss';

export function NewCourses(props) {
  return (
    <article className={styles.courses}>
      <div className={styles.card__information}>
        <p className={styles.card__infoDescription}>{props.period}</p>
        <h2 className={styles.card__infoTitle}>{props.title}</h2>
      </div>

      <div className={styles.card__information}>
        <h3 className={styles.card__infoCategory}>{props.company}</h3>
        <p className={styles.card__infoDescription}>{props.type}</p>
      </div>

      <div className={styles.card__information}>
        <ul className={styles.card__infoActivities}>
          {props.description.map((description) => (
            <li className={styles.card__infoActivitiesList} key={description}>
              {description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
