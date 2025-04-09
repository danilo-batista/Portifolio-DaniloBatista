import { Link } from 'react-router-dom';
import * as styles from './Card.module.scss';
import { LuExternalLink } from 'react-icons/lu';

export function Card(props) {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link to={`/portifolio/${props.client}/${props.slug}`}>
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
              <Link
                to={`https://www.danilobatista.com/portifolio/${props.client}/${props.slug}`}
              >
                <LuExternalLink color="#00B37E" size={20} strokeWidth={2.25} />
              </Link>
              <h3>{props.title}</h3>
            </div>
            <p>{props.description}</p>
          </div>

          <div className={styles.article__projectsLink}>
            <Link to={`https://github.com/danilo-batista/${props.slug}`}>
              GITHUB
            </Link>

            <Link to={`https://www.linkedin.com/in/danilobatista/`}>
              LINKEDIN
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
