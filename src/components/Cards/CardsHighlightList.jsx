import * as styles from './CardsHighlightList.module.scss';
import { projectsList } from '../../database/projects';
import { CardHighlight } from './CardHighlight';
import { Link } from 'react-router-dom';

export function CardsHighlightList() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {projectsList
          .sort((a, b) => b.id - a.id)
          .filter((project) => project.highlight)
          .map((project) => {
            return (
              <>
                <CardHighlight
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  client={project.client}
                  slug={project.slug}
                  thumbnail={project.thumbnail}
                  link={project.link}
                  highlight={project.highlight}
                  category={project.category}
                />
              </>
            );
          })}
      </div>
      <div className={styles.section__moreProjects}>
        <Link to="/portifolio">Conheça mais projetos</Link>
      </div>
    </section>
  );
}
