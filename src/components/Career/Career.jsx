import { Link } from 'react-router-dom';
import styles from '../Career/Career.module.scss';

export function Career(props) {
  return (
    <li className={styles.options__listItem}>
      <div className={styles.items__container}>
        <Link to={props.link}>
          <img
            src={props.brand}
            alt={`Logotipo ${props.company}`}
            className={styles.item__brand}
            loading="lazy"
          />
        </Link>

        <div className={styles.item__brandInfo}>
          <p className={styles.item__brandPeriod}>{props.period}</p>
          <h2 className={styles.item__brandTitle}>{props.title}</h2>
          <h3 className={styles.item__brandCompany}>{props.company}</h3>
        </div>
      </div>

      <div className={styles.items__container}>
        <p className={styles.item__brandDescription}>{props.description}</p>
      </div>

      <div className={styles.items__container}>
        <details className={styles.item__brandResume}>
          <summary>Leia mais aqui!</summary>
          <ul>
            {props.resume.map((resume) => (
              <li className={styles.resume__listItems} key={resume}>
                {resume}
              </li>
            ))}
          </ul>

          {props.extraProjects?.length > 0 && (
            <p className={styles.resume__listItemsTopic}>
              Projeto especial desenvolvido com êxito:
            </p>
          )}

          <ul>
            {props.extraProjects.map((extraProjects) => (
              <li className={styles.resume__listItems} key={extraProjects}>
                {extraProjects}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </li>
  );
}
