import { Card, CardExtraInfo, CardThumbnail } from '@/components/Cards';

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
    <Card variant="career">
      <Card.Thumbnail href={link} caption={company}>
        <CardThumbnail slug={slug} alt={alt} folder="brands" />
      </Card.Thumbnail>

      <Card.Section>
        <Card.Header complement={period} title={title} />
        <Card.Description>{description}</Card.Description>
      </Card.Section>

      <Card.Section>
        <CardExtraInfo
          extraContent={extraContent}
          resume={resume}
          extraProjects={extraProjects}
        />
      </Card.Section>
    </Card>
  );
}
