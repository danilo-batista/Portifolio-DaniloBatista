import { Card, CardTags, CardTitleAndDate } from '@/components/Cards';

export function CardCourses({ company, period, title, tags, link }) {
  return (
    <Card variant="courses">
      <Card.Thumbnail href={link} caption={company} />
      <Card.Section>
        <CardTitleAndDate complement={period} title={title} />
      </Card.Section>
      <Card.Section>
        <CardTags tags={tags} />
      </Card.Section>
    </Card>
  );
}
