import { FiGithub } from 'react-icons/fi';
import { LuExternalLink } from 'react-icons/lu';
import * as styles from './PortfolioCard.module.scss';

export function PortfolioCard(props) {
  return (
    <article
      className={`${styles.article} ${props.isEven ? styles.article__even : ''}`}
    >
      <div className={styles.article__thumbnail}>
        <a href={props.link} rel="noopener noreferrer">
          <img
            src={`/thumbnails/${props.thumbnail}`}
            alt={`Imagem de capa do projeto ${props.title}.`}
            className={styles.article__thumbnailImage}
            loading="lazy"
          />
        </a>
      </div>

      <div
        className={`${styles.article__information} ${props.isEven ? styles.article__even : ''}`}
      >
        <p className={styles.container__category}>{props.category}</p>
        <h2 className={styles.container__title}>{props.title}</h2>
        <p className={styles.container__description}>{props.description}</p>
      </div>

      <div className={styles.article__projectsLink}>
        <div className={styles.container__links}>
          <a
            href={`https://github.com/danilo-batista/${props.slug}`}
            rel="noopener noreferrer"
          >
            <FiGithub color="#7c7c8a" size={20} strokeWidth={2.25} />
            GitHub
          </a>
          <a href={props.link} rel="noopener noreferrer">
            <LuExternalLink color="#7c7c8a" size={20} strokeWidth={2.25} />
            On-line
          </a>
        </div>
      </div>
    </article>
  );
}
