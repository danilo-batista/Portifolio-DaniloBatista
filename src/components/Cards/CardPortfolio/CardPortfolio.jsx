import { CardThumbnail, CardTitleAndDate } from '@/components/Cards';
import { IconExternalLink, IconGitHub } from '@/components/Icons';
import styles from './CardPortfolio.module.scss';

export function CardPortfolio({ isOdd, ...props }) {
  return (
    <div
      className={`${styles.card__layoutContainer} ${isOdd ? styles.cardLists__even : ''}`}
    >
      <a href={props.link} rel="noopener noreferrer">
        <CardThumbnail slug={props.slug} alt={props.alt} folder="thumbnails" />
      </a>

      <div className={styles.card__information}>
        <CardTitleAndDate title={props.title} complement={props.category} />
      </div>

      <div className={styles.card__information}>
        <p className={styles.card__infoDescription}>{props.description}</p>
      </div>

      <div className={styles.card__information}>
        <div className={styles.card__links}>
          <a
            href={`https://github.com/danilo-batista/${props.slug}`}
            rel="noopener noreferrer"
          >
            <IconGitHub />
            GitHub
          </a>
          <a href={props.link} rel="noopener noreferrer">
            <IconExternalLink />
            On-line
          </a>
        </div>
      </div>

      <div className={styles.card__information}>
        <ul className={styles.card__infoPills}>
          {props.tags.map((tag) => (
            <li className={styles.card__listItemsPills} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
