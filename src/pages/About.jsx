import { CareerList } from '../components/Career/CareerList';
import { NewHeroAbout } from '../components/Hero/NewHeroAbout';
import { KnowledgeList } from '../components/Knowledge/KnowledgeList';
import { Skills } from '../components/Skills/Skills';

export function About() {
  return (
    <>
      <NewHeroAbout />
      <Skills />
      <CareerList />
      <KnowledgeList />
    </>
  );
}
