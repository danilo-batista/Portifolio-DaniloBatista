import { PortfolioList } from '@/components/Cards/PortfolioCards/CardPortfolioList';
import { NewHero } from '@/components/Hero/NewHero';

export function Home() {
  return (
    <>
      <NewHero />
      <PortfolioList showHighlights={true} showMoreLinks={true} />
    </>
  );
}
