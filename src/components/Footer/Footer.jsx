import styles from '../Footer/Footer.module.scss';
import { Link } from 'react-router-dom';
import daniloBatistaPicture from '../../assets/images/danilo-batista.webp';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__copyright}>
            <p>
              direitos reservados | danilo<span>batista®</span> | 2025
            </p>
            <p>
              For design portfolio, please access{' '}
              <Link to="https://www.danilobatista.com.br" target="_blank">
                danilobatista.com.br
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

/*
<div className={styles.container}>
          <div className={styles.footer__social}>
            <div className={styles.footer__socialCircle}>
              <img
                src={daniloBatistaPicture}
                alt="Foto de Danilo Batista, homem branco, careca, com barba, utilizando uma camiseta de cor vinho em um fundo bege."
                className={styles.hero__profilePicture}
              />
            </div>
            <p>Contato</p>
            <h3>Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!</h3>
            <p>
              Estou sempre disponível para um bate-papo. Envie-me um e-mail para
              hello@danilobatista.com ou me avise nas redes sociais.
            </p>
          </div>
          <div className={styles.footer__form}>
            <form action="" className={styles.footer__formGeneral}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Como devo chamá-lo?"
                className={styles.footer__formName}
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="E agora por qual e-mail devo acessá-lo?"
                className={styles.footer__formEmail}
              />
              <textarea
                name=""
                id=""
                placeholder="Então descreva brevemente aqui a sua necessidade para termos um ponto de partida. Já já eu retorno. Pode ter certeza! ;)"
                className={styles.footer__formMessage}
              />
              <button type="submit" className={styles.footer__formButton}>
                Lá vai!
              </button>
            </form>
          </div>
        </div>
*/
