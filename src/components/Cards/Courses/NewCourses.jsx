import styles from './NewCourses.module.scss';

export function NewCourses(props) {
  return (
    <article
      className={`${styles.courses} ${props.isEven ? styles.card__even : ''}`}
    >
      <div className={styles.card__thumbnail}>
        <a href={props.link} rel="noopener noreferrer">
          <figcaption className={styles.card__thumbnailCaption}>
            {props.company}
          </figcaption>
          <figure />
        </a>
      </div>

      <div
        className={`${styles.card__information} ${props.isEven ? styles.card__even : ''}`}
      >
        <p className={styles.card__infoPeriod}>{props.period}</p>
        <h3 className={styles.card__infoTitle}>{props.title}</h3>
      </div>

      <div
        className={`${styles.card__information} ${props.isEven ? styles.card__even : ''}`}
      >
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
