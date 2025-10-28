import { Card } from '@/components/Cards';

export function CardCourses({ company, period, title, tags, link }) {
  return (
    <Card variant="courses">
      <Card.Thumbnail href={link} caption={company} />
      <Card.Section>
        <Card.Header complement={period} title={title} />
      </Card.Section>
      <Card.Section>
        <Card.TagList tags={tags} variant="tags" />
      </Card.Section>
    </Card>
  );
}
