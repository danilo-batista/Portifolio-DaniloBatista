import { useEffect, useRef } from 'react';
import { CardThumbnail } from '../CardThumbnail';
import styles from './NewCareer.module.scss';

export function NewCareer(props) {
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
    <article
      className={`${styles.career} ${props.isEven ? styles.card__even : ''}`}
    >
      {/* Bloco de imagem  */}
      <div className={styles.card__thumbnail}>
        <a href={props.link} rel="noopener noreferrer">
          <figcaption className={styles.card__thumbnailCaption}>
            {props.company}
          </figcaption>
          <CardThumbnail slug={props.slug} />
        </a>
      </div>

      {/* Bloco de Período, Cargo e resumo da empresa. */}
      <div
        className={`${styles.card__information} ${props.isEven ? styles.card__even : ''}`}
      >
        <p className={styles.card__infoPeriod}>{props.period}</p>
        <h3 className={styles.card__infoTitle}>{props.title}</h3>
        <p className={styles.card__infoDescription}>{props.description}</p>
      </div>

      {/* Bloco de Experiências */}
      <div
        className={`${styles.card__information} ${props.isEven ? styles.card__even : ''}`}
      >
        <details ref={detailsRef} className={styles.card__infoResume}>
          <summary>Clique aqui para saber mais sobre esta experiência.</summary>
          <ul className={styles.card__infoActivities}>
            {props.resume.map((resume) => (
              <li className={styles.card__infoActivitiesList} key={resume}>
                {resume}
              </li>
            ))}
          </ul>

          {props.extraProjects?.length > 0 && (
            <p className={styles.card__infoDescriptionTopic}>
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
