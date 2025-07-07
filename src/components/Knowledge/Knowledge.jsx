import { Link } from 'react-router-dom';
import styles from '../Knowledge/Knowledge.module.scss';

export function Knowledge(props) {
  return (
    <li className={styles.options__listItem}>
      <div className={styles.items__container}>
        <Link to={props.link}>
          <img
            src={props.brand}
            alt={`Logotipo ${props.company}`}
            className={styles.item__brand}
          />
        </Link>

        <div className={styles.item__brandInfo}>
          <p className={styles.item__brandPeriod}>{props.period}</p>
          <h2 className={styles.item__brandTitle}>{props.title}</h2>
          <h3 className={styles.item__brandCompany}>{props.company}</h3>
        </div>
      </div>

      <div className={styles.items__containerTCC}>
        {props.extraProjects?.length > 0 && (
          <p className={styles.resume__listItemsTopic}>
            Projeto de conclusão de curso desenvolvido com êxito:
          </p>
        )}

        <ul>
          {props.extraProjects.map((extraProjects) => (
            <>
              <li className={styles.resume__listItems} key={extraProjects}>
                {extraProjects}
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className={styles.items__container}>
        <ul className={styles.resume__list}>
          {props.description.map((description) => (
            <>
              <li className={styles.resume__listItemsPills} key={description}>
                {description}
              </li>
            </>
          ))}
        </ul>
      </div>
    </li>
  );
}
