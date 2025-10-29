import { CardList } from '@/components';
import cardListTypes from '@/database/cardListTypes.json';

export function Portfolio() {
  const componentName = 'CardPortfolio';
  const listItem = 'projects';
  const title = cardListTypes[0]?.title;
  const subtitle = cardListTypes[0]?.subtitle;

  return (
    <CardList
      component={componentName}
      listItem={listItem}
      title={title}
      subtitle={subtitle}
      showHighlights={false}
    />
  );
}

export default Portfolio;
