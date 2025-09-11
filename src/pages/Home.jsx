import { NewPortfolioList } from '@/components/Cards/PortfolioCard/NewPortfolioList';
import { NewHero } from '@/components/Hero/NewHero';

export function Home() {
  return (
    <>
      <NewHero />
      <NewPortfolioList showHighlights={true} showMoreLinks={true} />
    </>
  );
}
