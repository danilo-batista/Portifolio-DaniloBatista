import { CardList, HeroHome } from '@/components';
import cardListTypes from '@/database/cardListTypes.json';

export function Home() {
  const componentName = 'CardPortfolio';
  const listItem = 'projects';
  const title = cardListTypes[3]?.title;
  const subtitle = cardListTypes[3]?.subtitle;

  return (
    <>
      <HeroHome />
      <CardList
        component={componentName}
        listItem={listItem}
        title={title}
        subtitle={subtitle}
        showHighlights={true}
        showMoreButton={true}
      />
    </>
  );
}

export default Home;
