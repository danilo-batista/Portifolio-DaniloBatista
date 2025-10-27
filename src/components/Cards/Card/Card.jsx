import { IconExternalLink, IconGitHub } from '@/components/Icons';
import styles from './Card.module.scss';

// Componente raiz
export function Card({ children, variant = 'default', className = '' }) {
  const variantClass = styles[`card__variant--${variant}`] || '';

  return (
    <div
      className={`${styles.card__layoutContainer} ${variantClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

// Subcomponente: Link com thumbnail
Card.Thumbnail = function CardThumbnail({ href, caption, children }) {
  return (
    <a href={href} rel="noopener noreferrer">
      {caption && (
        <div className={styles.card__thumbnailCaption}>{caption}</div>
      )}
      {children}
    </a>
  );
};

// Subcomponente: Section de informação
Card.Section = function CardSection({ children }) {
  return <div className={styles.card__information}>{children}</div>;
};

// Subcomponente: Descrição
Card.Description = function CardDescription({ children }) {
  return <p className={styles.card__infoDescription}>{children}</p>;
};

// Subcomponente: Links (Portfolio)
Card.Links = function CardLinks({ github, demo, slug }) {
  return (
    <div className={styles.card__links}>
      {github && (
        <a
          href={`https://github.com/danilo-batista/${slug}`}
          rel="noopener noreferrer"
        >
          <IconGitHub />
          GitHub
        </a>
      )}
      {demo && (
        <a href={demo} rel="noopener noreferrer">
          <IconExternalLink />
          On-line
        </a>
      )}
    </div>
  );
};

// Subcomponente: Pills/Tags (Portfolio)
Card.Pills = function CardPills({ tags }) {
  return (
    <ul className={styles.card__infoPills}>
      {tags.map((tag) => (
        <li className={styles.card__listItemsPills} key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Card;
