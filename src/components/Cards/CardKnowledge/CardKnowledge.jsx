import { Card, CardExtraInfo, CardThumbnail } from '@/components/Cards';

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
    <Card variant="knowledge">
      <Card.Thumbnail href={link} caption={company}>
        <CardThumbnail slug={slug} alt={alt} folder="brands" />
      </Card.Thumbnail>

      <Card.Section>
        <Card.Header complement={period} title={title} />
      </Card.Section>

      <Card.Section>
        <Card.TagList tags={tags} variant="tags" />
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
