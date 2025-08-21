import styles from './NewPortfolioCard.module.scss';

export function NewPortfolioCard(props) {
  return (
    <article
      className={`${styles.card} ${props.isEven ? styles.card__even : ''}`}
    >
      <div className={styles.card__thumbnail}>
        <a href={props.link} rel="noopener noreferrer">
          <img
            src={`/thumbnails/${props.thumbnail}`}
            alt={`Imagem de capa do projeto ${props.title}.`}
            className={styles.card__thumbnailImage}
            loading="lazy"
          />
        </a>
      </div>

      <div
        className={`${styles.card__information} ${props.isEven ? styles.card__even : ''}`}
      >
        <ul className={styles.card__infoPills}>
          {props.tags.map((tag) => (
            <li className={styles.card__listItemsPills} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <h3 className={styles.card__infoTitle}>{props.title}</h3>
        <p className={styles.card__infoCategory}>{props.category}</p>

        <p className={styles.card__infoDescription}>{props.description}</p>
      </div>

      <div className={styles.card__containerLinks}>
        <div className={styles.card__links}>
          <a
            href={`https://github.com/danilo-batista/${props.slug}`}
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <title>Abrir link externo para o GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 9.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24" />
            </svg>
            GitHub
          </a>
          <a href={props.link} rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2.25"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-labelledby="externalLinkTitle"
              className="external-link-icon"
            >
              <title>Abrir link externo para o projeto finalizado.</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            On-line
          </a>
        </div>
      </div>
    </article>
  );
}
