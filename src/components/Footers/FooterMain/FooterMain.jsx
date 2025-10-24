import { useNavigate } from 'react-router-dom';
import daniloBatistaPicture from '@/assets/images/danilo-batista.webp';
import { Button } from '@/components/Buttons';
import { FooterCopyright } from '@/components/Footers';
import { IconGitHub, IconLinkedIn } from '@/components/Icons';
import { useScrollToTop } from '@/hooks';
import styles from './FooterMain.module.scss';

export function FooterMain() {
  const { scrollToElement, pathname } = useScrollToTop();
  const navigate = useNavigate();
  const formId = 'contactFormId';

  const onScrollToElement = (event) => {
    if (pathname === '/contato') {
      event.preventDefault();
      const element = document.getElementById(formId);

      if (element) {
        scrollToElement(formId);
      } else {
        navigate(`/contato#${formId}`);
      }
    }
  };

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
        <div className={styles.footer__buttons}>
          <Button
            to={`https://www.linkedin.com/in/danilobatista/`}
            intent="terciary"
          >
            <IconLinkedIn />
            LinkedIn
          </Button>

          <Button to={`https://github.com/danilo-batista/`} intent="terciary">
            <IconGitHub />
            Github
          </Button>

          <Button
            to={`/contato#${formId}`}
            intent="primary"
            onClick={onScrollToElement}
          >
            Fale comigo
          </Button>
        </div>
      </footer>
      <FooterCopyright />
    </>
  );
}
