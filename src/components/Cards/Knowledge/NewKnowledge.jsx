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
      {/* Bloco de imagem  */}
      <div className={styles.card__thumbnail}>
        <a href={props.link} rel="noopener noreferrer">
          <figcaption className={styles.card__thumbnailCaption}>
            {props.company}
          </figcaption>
          <figure>
            <img
              srcSet={`/brands/1x/${props.slug}-1x.webp 320w,
                      /brands/2x/${props.slug}-2x.webp 768w,
                      /brands/3x/${props.slug}-3x.webp 1440w`}
              sizes={`
                (max-width: 320px) 280px,
                (max-width: 375px) 340px,
                (max-width: 425px) 400px,
                (max-width: 768px) 720px,
                (max-width: 1024px) 960px,
                (max-width: 1440px) 1320px,
                1440px
                `}
              src={props.brand}
              alt={`Logotipo ${props.company}`}
              className={styles.card__thumbnailImage}
              loading="lazy"
            />
          </figure>
        </a>
      </div>

      <div className={styles.card__data}>
        {/* Bloco de Período, Cargo e resumo da empresa. */}
        <div
          className={`${styles.card__information} ${props.isEven ? styles.card__even : ''}`}
        >
          <p className={styles.card__infoPeriod}>{props.period}</p>
          <h3 className={styles.card__infoTitle}>{props.title}</h3>
        </div>

        {/* Bloco de Experiências */}
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
      </div>
    </article>
  );
}
