import { Hero } from '../components/Hero/Hero';
import { PortfolioMainList } from '../components/PortfolioCard/PortfolioMainList';

export function Home() {
  return (
    <>
      <Hero />
      <PortfolioMainList showHighlights={true} showMoreLinks={true} />
    </>
  );
}
