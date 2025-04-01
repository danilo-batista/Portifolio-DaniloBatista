import { NavLink } from 'react-router-dom';

import styles from '../Hero/Hero.module.scss';
import daniloBatistaPicture from '../../assets/images/danilo-batista.webp';

export function Hero() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.hero__title}>
            Eleve seu negócio digital a outro nível com um
            <span> projeto de qualidade!</span>
          </h2>

          <p className={styles.hero__description}>
            Soluções inovadoras para o seu negócio! Com mais de 20 anos de
            experiência em Design e Tecnologia, unimos estratégia, eficiência e
            inovação para otimizar processos e fortalecer parcerias
            Transformamos desafios em oportunidades, gerando resultados reais
            para sua empresa.
          </p>

          <div className={styles.hero__buttons}>
            <NavLink to="/sobre-mim">Meu Currículo!</NavLink>
            <NavLink to="/contato">Diga um Oi!</NavLink>
          </div>
        </div>

        <div className={styles.container}>
          <img
            src={daniloBatistaPicture}
            alt="Foto de Danilo Batista, homem branco, careca, com barba, utilizando uma camiseta de cor vinho em um fundo bege."
            className={styles.hero__profilePicture}
          />
        </div>
      </section>
    </>
  );
}
