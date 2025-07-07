import { CareerList } from '../components/Career/CareerList';
import { HeroAbout } from '../components/Hero/HeroAbout';
import { Skills } from '../components/Skills/Skills';

export function About() {
  return (
    <>
      <HeroAbout />
      <Skills />
      <CareerList />
    </>
  );
}
