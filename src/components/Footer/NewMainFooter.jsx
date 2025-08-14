import { Link } from 'react-router-dom';
import daniloBatistaPicture from '../../assets/images/danilo-batista.webp';
import styles from '../Footer/NewMainFooter.module.scss';
import { NewFooter } from './NewFooter';

export function NewMainFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__socialCircle}>
          <img
            src={daniloBatistaPicture}
            alt="Foto de Danilo Batista, homem branco, careca, com barba, utilizando uma camiseta de cor vinho em um fundo bege."
            className={styles.hero__profilePicture}
            loading="lazy"
          />
        </div>
        <div className={styles.footer__socialInfo}>
          <p className={styles.footer__socialSubTitle}>Contato</p>
          <h3 className={styles.footer__socialTitle}>
            Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!
          </h3>
        </div>
        <div className={styles.cardList__buttons}>
          <Link
            to={`https://www.linkedin.com/in/danilobatista/`}
            className={styles.cardList__button}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 448 512"
              fill="currentColor"
              stroke="none"
              className="feather feather-linkedin-fill"
            >
              <title id="linkedinIconTitle">LinkedIn</title>
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-342C24.3 106 0 81.7 0 53.28S24.3.55 53.84.55s53.83 24.31 53.83 52.73S83.38 106 53.84 106zm394.66 342h-92.82V302.4c0-34.7-.7-79.4-48.41-79.4-48.4 0-55.8 37.8-55.8 76.9V448h-92.9V148.9h89.2v40.8h1.3c12.4-23.5 42.7-48.4 87.9-48.4 94 0 111.4 61.9 111.4 142.3V448z" />
            </svg>
            LinkedIn
          </Link>

          <Link
            to={`https://github.com/danilo-batista/`}
            className={styles.cardList__button}
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
              <title id="githubIconTitle">GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 9.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24" />
            </svg>
            Github
          </Link>

          <Link to="/contato" className={styles.cardList__button}>
            Fale comigo
          </Link>
        </div>
      </footer>
      <NewFooter />
    </>
  );
}
