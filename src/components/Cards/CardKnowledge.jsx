import { CardExtraInfo } from './CardFragments/CardFragments-ExtraInfo';
import { CardTags } from './CardFragments/CardFragments-Tags';
import { CardThumbnail } from './CardFragments/CardFragments-Thumbnail';
import { CardTitleAndDate } from './CardFragments/CardFragments-TitleAndDate';
import styles from './CardKnowledge.module.scss';

export function CardKnowledge({
  company,
  period,
  title,
  resume,
  tags,
  slug,
  link,
  extraContent,
  extraProjects,
}) {
  return (
    <div className={styles.card__layoutContainer}>
      <a href={link} rel="noopener noreferrer">
        <div className={styles.card__thumbnailCaption}>{company}</div>
        <CardThumbnail slug={slug} company={company} />
      </a>

      <div className={styles.card__information}>
        <CardTitleAndDate period={period} title={title} />
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
