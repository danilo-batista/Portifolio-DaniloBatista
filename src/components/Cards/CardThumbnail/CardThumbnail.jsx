import styles from './CardFragments-Thumbnail.module.scss';

export function CardThumbnail({ slug, brand, alt, folder }) {
  return (
    <figure className={styles.card__thumbnail}>
      <img
        srcSet={`
          /${folder}/1x/${slug}-1x.webp 320w,
          /${folder}/2x/${slug}-2x.webp 768w,
          /${folder}/3x/${slug}-3x.webp 1440w
        `}
        sizes={`
          (max-width: 320px) 280px,
          (max-width: 375px) 340px,
          (max-width: 425px) 400px,
          (max-width: 768px) 720px,
          (max-width: 1024px) 960px,
          (max-width: 1440px) 1320px,
          1440px
        `}
        src={brand}
        alt={alt}
        className={styles.card__thumbnailImage}
        loading="lazy"
      />
    </figure>
  );
}
