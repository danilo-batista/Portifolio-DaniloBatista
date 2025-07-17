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
            />
          </div>
          <div className={styles.footer__socialInfo}>
            <p className={styles.footer__socialSubTitle}>Contato</p>
            <h3 className={styles.footer__socialTitle}>
              Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!
            </h3>
            <p className={styles.footer__socialDescription}>
              Estou sempre disponível para um bate-papo. Envie-me um e-mail para{' '}
              <Link to="mailto:hello@danilobatista.com">
                hello@danilobatista.com
              </Link>{' '}
              ou me chame nas redes sociais.
            </p>
          </div>
          <div className={styles.footer__socialMedia}>
            <Link to={`https://www.linkedin.com/in/danilobatista/`}>
              <AiFillLinkedin size={32} strokeWidth={2.25} />
            </Link>
            <Link to={`https://github.com/danilo-batista/`}>
              <AiOutlineGithub size={32} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <p className={styles.footer__copy}>
            todos os direitos reservados . danilo<span>batista®</span> . 2025 .
            For design portfolio, please access{' '}
            <Link to="https://www.danilobatista.com.br" target="_blank">
              danilobatista.com.br
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
