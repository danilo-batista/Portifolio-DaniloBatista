import styles from './CardThumbnail.module.scss';

export function CardThumbnail(props) {
  return (
    <figure>
      <img
        srcSet={`/brands/1x/${props.slug}-1x.webp 320w,
                                  /brands/2x/${props.slug}-2x.webp 768w,
                                  /brands/3x/${props.slug}-3x.webp 1440w`}
        sizes={`
                            (max-width: 320px) 280px,
                            (max-width: 375px) 340px,
                            (max-width: 425px) 400px,
                            (max-width: 768px) 720px,
                            (max-width: 1024px) 960px,
                            (max-width: 1440px) 1320px,
                            1440px
                            `}
        src={props.brand}
        alt={`Logotipo ${props.company}`}
        className={styles.card__thumbnailImage}
        loading="lazy"
      />
    </figure>
  );
}
