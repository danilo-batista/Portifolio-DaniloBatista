import {
  CardExtraInfo,
  CardTags,
  CardThumbnail,
  CardTitleAndDate,
} from '@/components/Cards';
import styles from './CardKnowledge.module.scss';

export function CardKnowledge({
  company,
  period,
  title,
  resume,
  tags,
  slug,
  alt,
  link,
  extraContent,
  extraProjects,
}) {
  return (
    <div className={styles.card__layoutContainer}>
      <a href={link} rel="noopener noreferrer">
        <div className={styles.card__thumbnailCaption}>{company}</div>
        <CardThumbnail slug={slug} alt={alt} folder="brands" />
      </a>

      <div className={styles.card__information}>
        <CardTitleAndDate complement={period} title={title} />
      </div>

      <div className={styles.card__information}>
        <CardTags tags={tags} />
      </div>

      <div className={styles.card__information}>
        <CardExtraInfo
          extraContent={extraContent}
          resume={resume}
          extraProjects={extraProjects}
        />
      </div>
    </div>
  );
}
