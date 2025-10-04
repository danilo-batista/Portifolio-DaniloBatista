import { HeroPicture } from '@/components/Heros';
import styles from './HeroAbout.module.scss';

export function HeroAbout() {
  return (
    <section className={styles.hero}>
      <HeroPicture />
      <div className={styles.hero__listDescription}>
        <h2 className={styles.hero__title}>Olá! Sou o Danilo Batista!</h2>

        <p className={styles.hero__description}>
          Sou um{' '}
          <span>
            profissional com mais de 22 anos de experiência em Design Gráfico,
          </span>{' '}
          período no qual desenvolvi{' '}
          <span>
            habilidades sólidas em criação, layout e produção gráfica.
          </span>{' '}
          Atuei em <span>gráficas, importadoras de produtos tecnológicos</span>{' '}
          e, principalmente, no <span>mercado editorial,</span> onde tive a
          honra de{' '}
          <span>contribuir para a alfabetização de milhares de crianças</span>{' '}
          por meio do design.
        </p>

        <p className={styles.hero__description}>
          Movido pela <span>curiosidade</span> e pela{' '}
          <span>vontade de evoluir com o mercado,</span> migrei para a área de{' '}
          <span>Tecnologia.</span> Sou{' '}
          <span>graduado em Análise de Sistemas</span> e venho me{' '}
          <span>especializando em Desenvolvimento Front-End,</span> com foco em
          <span> React.js, HTML, CSS e JavaScript.</span>
        </p>

        <p className={styles.hero__description}>
          Minha experiência em <span>Design</span> me proporcionou um{' '}
          <span>olhar apurado para a estética,</span> além de ter{' '}
          <span>fortalecido minhas habilidades de comunicação</span> e
          <span> colaboração em equipes multidisciplinares.</span> Ao longo da
          carreira, atuei como um <span>parceiro criativo,</span> alguém que
          escuta, entende o contexto e{' '}
          <span>transforma ideias em experiências visuais e funcionais.</span>
        </p>

        <p className={styles.hero__description}>
          Hoje, unindo minha <span>trajetória no design</span> às{' '}
          <span>competências como desenvolvedor front-end,</span> mantenho uma{' '}
          <span>abordagem colaborativa</span> para
          <span>
            {' '}
            cocriar soluções relevantes para o usuário, para o negócio e para
            todos os envolvidos no processo.
          </span>
        </p>
        <div className={styles.download__buttons}>
          <a
            href="/files/DaniloBatista-curriculo_desenvolvedor.pdf"
            download="/DaniloBatista-curriculo_desenvolvedor.pdf"
            className={styles.download__button}
          >
            Meu currículo
          </a>
        </div>
      </div>
    </section>
  );
}
