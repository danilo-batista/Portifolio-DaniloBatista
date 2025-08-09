import { Link } from 'react-router-dom';
import { projectsList } from '../../database/projects';
import { NewPortfolioCard } from './NewPortfolioCard';
import * as styles from './NewPortfolioList.module.scss';

export function NewPortfolioList(props) {
  /* Cria uma nova lista ao percorrer a anterior, reorganizando por ordem descrescente e filtrando os projetos a serem destacados. */
  const listToRender = projectsList
    .sort((a, b) => b.id - a.id)
    .filter((project) => (props.showHighlights ? project.highlight : true));

  return (
    <section className={styles.cardList}>
      <h2 className={styles.cardList__title}>Projetos</h2>
      <p className={styles.cardList__subtitle}>
        Desafios técnicos e criativos que impulsionaram minha evolução na área
        de Tecnologia.
      </p>
      <div className={styles.cardList__cards}>
        {/* */}
        {listToRender.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <NewPortfolioCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              date={project.date}
              client={project.client}
              highlight={project.highlight}
              category={project.category}
              tags={project.tags}
              slug={project.slug}
              thumbnail={project.thumbnail}
              link={project.link}
              isEven={isEven}
            />
          );
        })}
      </div>
      <div className={styles.cardList__links}>
        {props.showMoreLinks && (
          <div className={styles.cardList__buttons}>
            <Link to="/portifolio" className={styles.cardList__button}>
              Veja mais projetos aqui
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
