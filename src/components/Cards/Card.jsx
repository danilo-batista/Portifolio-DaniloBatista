import { FiGithub } from 'react-icons/fi';
import { LuExternalLink } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import * as styles from './Card.module.scss';

export function Card(props) {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <Link to={props.link}>
          <div className={styles.article__thumbnail}>
            <img
              src={`/images/${props.thumbnail}`}
              alt={`Imagem de capa do projeto ${props.title}.`}
              className={styles.article__thumbnailImage}
            />
          </div>
        </Link>

        <div className={styles.article__information}>
          <div className={styles.article__project}>
            <h3>{props.title}</h3>
          </div>
          <p>{props.description}</p>
        </div>

        <div className={styles.article__projectsLink}>
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
