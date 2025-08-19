import { useEffect, useRef } from 'react';
import styles from './NewKnowledge.module.scss';

export function NewKnowledge(props) {
  /* Cria um useRef apontando para <details> */
  const detailsRef = useRef(null);

  useEffect(() => {
    /* Adiciona um listener global que verifica se o clique foi fora e se foi, fecha-o. */
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute('open');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <article className={styles.knowledge}>
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

      <div className={styles.card__information}>
        {props.extraProjects?.length > 0 && (
          <details ref={detailsRef} className={styles.card__infoResume}>
            <summary>
              Clique aqui para saber sobre o Projeto de Conclusão de curso.
            </summary>
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
        )}
      </div>
    </article>
  );
}
