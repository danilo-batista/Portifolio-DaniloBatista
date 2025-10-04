import styles from './CardFragments-Tags.module.scss';

export function CardTags({ tags }) {
  return (
    <ul className={styles.card__infoTagActivitiesList}>
      {tags.map((tag) => (
        <li className={styles.card__infoTagActivitiesItems} key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
