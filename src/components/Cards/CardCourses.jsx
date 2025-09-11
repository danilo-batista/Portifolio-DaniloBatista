import styles from './CardCourses.module.scss';
import { CardTags } from './CardFragments/CardFragments-Tags';
import { CardTitleAndDate } from './CardFragments/CardFragments-TitleAndDate';

export function CardCourses({ company, period, title, tags, link }) {
  return (
    <div className={styles.card__layoutContainer}>
      <a href={link} rel="noopener noreferrer">
        <div className={styles.card__thumbnailCaption}>{company}</div>
      </a>

      <div className={styles.card__information}>
        <CardTitleAndDate period={period} title={title} />
      </div>

      <div className={styles.card__information}>
        <CardTags tags={tags} />
      </div>
    </div>
  );
}
