import { CardTags } from '../GenericCards/CardFragments-Tags';
import { CardTitleAndDate } from '../GenericCards/CardFragments-TitleAndDate';
import styles from './CardCourses.module.scss';

export function CardCourses({ company, period, title, tags, link }) {
  return (
    <div className={styles.card__layoutContainer}>
      <a href={link} rel="noopener noreferrer">
        <div className={styles.card__thumbnailCaption}>{company}</div>
      </a>

      <div className={styles.card__information}>
        <CardTitleAndDate complement={period} title={title} />
      </div>

      <div className={styles.card__information}>
        <CardTags tags={tags} />
      </div>
    </div>
  );
}
