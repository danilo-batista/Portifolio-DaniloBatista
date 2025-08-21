import { coursesList } from '../../../database/courses';
import { NewCourses } from './NewCourses';
import styles from './NewCoursesList.module.scss';

export function NewCoursesList() {
  const listToRender = coursesList.sort((a, b) => b.id - a.id);
  return (
    <section className={styles.coursesList}>
      <h2 className={styles.coursesList__title}>Cursos Extras</h2>
      <p className={styles.coursesList__subtitle}>
        Aprendizado contínuo além da formação acadêmica.
      </p>
      <div className={styles.coursesList__cards}>
        {listToRender.map((courses) => {
          return (
            <NewCourses
              key={courses.id}
              id={courses.id}
              company={courses.company}
              slug={courses.slug}
              brand={courses.brand}
              link={courses.link}
              period={courses.period}
              title={courses.title}
              type={courses.type}
              resume={courses.resume}
              description={courses.description}
              extraProjects={courses.extraProjects}
            />
          );
        })}
      </div>
    </section>
  );
}
