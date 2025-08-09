import { NewHero } from '../components/Hero/NewHero';
import { NewPortfolioList } from '../components/PortfolioCard/NewPortfolioList';

export function Home() {
  return (
    <>
      <NewHero />
      <NewPortfolioList showHighlights={true} showMoreLinks={true} />
    </>
  );
}
