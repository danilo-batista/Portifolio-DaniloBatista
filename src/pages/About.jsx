import { NewCareerList } from '../components/Career/NewCareerList';
import { NewHeroAbout } from '../components/Hero/NewHeroAbout';
// import { KnowledgeList } from '../components/Knowledge/KnowledgeList';
import { NewSkills } from '../components/Skills/NewSkills';

export function About() {
  return (
    <>
      <NewHeroAbout />
      <NewSkills />
      <NewCareerList />
      {/* <KnowledgeList /> */}
    </>
  );
}
