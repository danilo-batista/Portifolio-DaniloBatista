import * as styles from './CardHighlight.module.scss';
import { LuExternalLink } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function CardHighlight(props) {
  return (
    <article className={`${styles.article} ${props.isEven ? styles.even : ''}`}>
      <div className={styles.article__thumbnail}>
        <Link to={props.link}>
          <img
            src={`/images/${props.thumbnail}`}
            alt={`Imagem de capa do projeto ${props.title}.`}
            className={styles.article__thumbnailImage}
          />
        </Link>
      </div>

      <div
        className={`${styles.article__information} ${props.isEven ? styles.even : ''}`}
      >
        <p className={styles.container__category}>{props.category}</p>
        <h2 className={styles.container__title}>{props.title}</h2>
        <p className={styles.container__description}>{props.description}</p>
        <div className={styles.article__projectsLink}>
          <p className={styles.container__descriptionLinks}>saiba mais &gt;</p>
          <div className={styles.container__links}>
            <Link to={`https://github.com/danilo-batista/${props.slug}`}>
              <FiGithub color="#7c7c8a" size={20} strokeWidth={2.25} />
              <p>GitHub</p>
            </Link>
            <Link to={props.link}>
              <LuExternalLink color="#7c7c8a" size={20} strokeWidth={2.25} />
              <p>On-line</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
