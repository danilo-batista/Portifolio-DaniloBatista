import { CardList, HeroAbout, Skills } from '@/components';
import cardListTypes from '@/database/cardListTypes.json';

export function About() {
  return (
    <>
      <HeroAbout />
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

export default About;
