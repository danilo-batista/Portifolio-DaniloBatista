import { PortfolioList } from '@/components/Cards/PortfolioCards/CardPortfolioList';
import { HeroHome } from '@/components/Hero/HeroHome';

export function Home() {
  return (
    <>
      <HeroHome />
      <PortfolioList showHighlights={true} showMoreLinks={true} />
    </>
  );
}
