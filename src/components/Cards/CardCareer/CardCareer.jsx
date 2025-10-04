import {
  CardExtraInfo,
  CardThumbnail,
  CardTitleAndDate,
} from '@/components/Cards';
import styles from './CardCareer.module.scss';

export function CardCareer({
  company,
  period,
  title,
  description,
  resume,
  slug,
  link,
  alt,
  extraContent,
  extraProjects,
}) {
  return (
    <div className={styles.cardLayout__container}>
      <a href={link} rel="noopener noreferrer">
        <div className={styles.card__thumbnailCaption}>{company}</div>
        <CardThumbnail slug={slug} alt={alt} folder="brands" />
      </a>

      <div className={styles.card__information}>
        <CardTitleAndDate complement={period} title={title} />
        <p className={styles.card__infoDescription}>{description}</p>
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
