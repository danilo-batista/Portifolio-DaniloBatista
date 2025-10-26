import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

import daniloBatistaPicture from '@/assets/images/danilo-batista.webp';

import { Button } from '@/components/Buttons';
import { FooterCopyright } from '@/components/Footers';
import { IconGitHub, IconLinkedIn } from '@/components/Icons';

import { useScrollToTop } from '@/hooks';
import styles from './Footer.module.scss';

export function Footer() {
  const { scrollToElement, pathname } = useScrollToTop();
  const navigate = useNavigate();
  const formId = useId();

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
            alt="Danilo Batista"
            className={styles.hero__profilePicture}
            loading="lazy"
            width="144"
            height="144"
          />
        </div>
        <div className={styles.footer__socialInfo}>
          <p className={styles.footer__socialSubTitle}>Contatos</p>
          <h2 className={styles.footer__socialTitle}>
            Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!
          </h2>
        </div>
        <nav
          className={styles.footer__buttons}
          aria-label="Redes sociais e contato"
        >
          <Button
            to={`https://www.linkedin.com/in/danilobatista/`}
            intent="terciary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de LinkedIn de Danilo Batista (abre em nova aba)"
          >
            <IconLinkedIn aria-hidden="true" />
            LinkedIn
          </Button>

          <Button
            to={`https://github.com/danilo-batista/`}
            intent="terciary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de GitHub de Danilo Batista (abre em nova aba)"
          >
            <IconGitHub aria-hidden="true" />
            Github
          </Button>

          <Button
            to={`/contato#${formId}`}
            intent="primary"
            onClick={onScrollToElement}
            aria-label="Ir para o formulário de contato"
          >
            Fale comigo
          </Button>
        </nav>
      </footer>
      <FooterCopyright />
    </>
  );
}
