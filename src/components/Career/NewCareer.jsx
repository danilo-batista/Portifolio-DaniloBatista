import styles from '../Career/NewCareer.module.scss';

export function NewCareer(props) {
  return (
    <article className={styles.career}>
      <a href={props.link} rel="noopener noreferrer">
        <img
          src={props.brand}
          alt={`Logotipo ${props.company}`}
          className={styles.card__thumbnailImage}
          loading="lazy"
        />
      </a>

      <div className={styles.card__information}>
        <p className={styles.card__infoDescription}>{props.period}</p>
        <h2 className={styles.card__infoTitle}>{props.title}</h2>
      </div>

      <div className={styles.card__information}>
        <h3 className={styles.card__infoCategory}>{props.company}</h3>
        <p className={styles.card__infoDescription}>{props.description}</p>
      </div>

      <div className={styles.card__information}>
        <details className={styles.card__infoResume}>
          <summary>Clique aqui para saber mais sobre esta experiência.</summary>
          <ul className={styles.card__infoActivities}>
            {props.resume.map((resume) => (
              <li className={styles.card__infoActivitiesList} key={resume}>
                {resume}
              </li>
            ))}
          </ul>

          {props.extraProjects?.length > 0 && (
            <p className={styles.card__infoDescription}>
              <span>Projeto especial desenvolvido com êxito:</span>
            </p>
          )}

          <ul>
            {props.extraProjects.map((extraProjects) => (
              <li
                className={styles.card__infoActivitiesList}
                key={extraProjects}
              >
                {extraProjects}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  );
}
