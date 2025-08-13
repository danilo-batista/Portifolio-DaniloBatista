import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import daniloBatistaPicture from '../../assets/images/danilo-batista.webp';
import styles from '../Footer/Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__social}>
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
            <div className={styles.cardList__buttons}>
              <Link to="/portifolio" className={styles.cardList__button}>
                Vamos conversar!
              </Link>
              <Link
                to={`https://www.linkedin.com/in/danilobatista/`}
                className={styles.footer__socialMedia}
              >
                <AiFillLinkedin size={32} strokeWidth={2.25} />
              </Link>
              <Link
                to={`https://github.com/danilo-batista/`}
                className={styles.footer__socialMedia}
              >
                <AiOutlineGithub size={32} strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
