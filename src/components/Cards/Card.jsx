import { Link } from 'react-router-dom';
import * as styles from './Card.module.scss';

export function Card(props) {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.container}>
          <Link to={`/portifolio/${props.client}/${props.id}/${props.title}`}>
            <div className={styles.article__thumbnail}>
              <img
                src={`/images/${props.thumbnail}`}
                alt={`Imagem de capa do projeto ${props.title}.`}
                className={styles.article__thumbnailImage}
              />
            </div>
          </Link>

          <div className={styles.article__information}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>

          <div className={styles.article__projectsLink}>
            <Link to={`https://github.com/danilo-batista/${props.title}`}>
              GITHUB
            </Link>
            <Link
              to={`https://www.danilobatista.com/portifolio/${props.client}/${props.title}`}
            >
              AO VIVO
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

/*

export function Card(props) {
  return (
    <>
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.article__thumbnail}>
            <img
              src={`${props.thumbnail}`}
              alt={`Imagem de capa do projeto ${props.title}.`}
            />
          </div>
          <div className={styles.article__infos}>
            <p>{props.date}</p>
            <p>SVGS</p>
          </div>
          <h3 className={styles.article__title}>{props.title}</h3>
          <p className={styles.article__description}>{props.description}</p>
        </div>
      </article>
    </>
  );
}

*/
