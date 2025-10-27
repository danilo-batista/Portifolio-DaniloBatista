import { Card, CardThumbnail, CardTitleAndDate } from '@/components/Cards';

export function CardPortfolio({ isOdd, ...props }) {
  const variantClass = isOdd ? '' : 'card__variant--even';
  return (
    <Card variant="portfolio" className={variantClass}>
      <Card.Thumbnail href={props.link}>
        <CardThumbnail slug={props.slug} alt={props.alt} folder="thumbnails" />
      </Card.Thumbnail>
      <Card.Section>
        <CardTitleAndDate title={props.title} complement={props.category} />
      </Card.Section>
      <Card.Section>
        <Card.Description>{props.description}</Card.Description>
      </Card.Section>
      <Card.Section>
        <Card.Links github={true} demo={props.link} slug={props.slug} />
      </Card.Section>
      <Card.Section>
        <Card.Pills tags={props.tags} />
      </Card.Section>
    </Card>
  );
}
