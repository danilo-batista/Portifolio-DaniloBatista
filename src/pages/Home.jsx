import { HeroHome, PortfolioList } from '@/components';

export function Home() {
  return (
    <>
      <HeroHome />
      <PortfolioList showHighlights={true} showMoreLinks={true} />
    </>
  );
}

export default Home;
