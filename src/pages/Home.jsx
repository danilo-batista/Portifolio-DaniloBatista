import { NewHero } from '../components/Hero/NewHero';
import { PortfolioMainList } from '../components/PortfolioCard/PortfolioMainList';

export function Home() {
  return (
    <>
      <NewHero />
      {/* <Hero /> */}
      <PortfolioMainList showHighlights={true} showMoreLinks={true} />
    </>
  );
}
