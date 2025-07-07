import { CareerList } from '../components/Career/CareerList';
import { HeroAbout } from '../components/Hero/HeroAbout';
import { KnowledgeList } from '../components/Knowledge/KnowledgeList';
import { Skills } from '../components/Skills/Skills';

export function About() {
  return (
    <>
      <HeroAbout />
      <Skills />
      <CareerList />
      <KnowledgeList />
    </>
  );
}
