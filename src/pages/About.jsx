import { NewHeroAbout } from '@/components/Hero/NewHeroAbout';
import cardListTypes from '@/database/cardListTypes.json';
import { CardList } from '../components/Cards/CardList';
import { Skills } from '../components/Skills/Skills';

export function About() {
  return (
    <>
      <NewHeroAbout />
      <Skills />

      {cardListTypes.map((cardList) => {
        const isEven = cardList.id % 2 === 0;
        return (
          <CardList
            key={cardList.component}
            component={cardList.component}
            listItem={cardList.listItem}
            title={cardList.title}
            subtitle={cardList.subtitle}
            isEven={isEven}
          />
        );
      })}
    </>
  );
}
