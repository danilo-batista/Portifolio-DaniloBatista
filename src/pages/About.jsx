import { NewCareerList } from '../components/Cards/Career/NewCareerList';
import { NewCoursesList } from '../components/Cards/Courses/NewCoursesList';
import { NewKnowledgeList } from '../components/Cards/Knowledge/NewKnowledgeList';
import { NewSkills } from '../components/Cards/Skills/NewSkills';
import { NewHeroAbout } from '../components/Hero/NewHeroAbout';

export function About() {
  return (
    <>
      <NewHeroAbout />
      <NewSkills />
      <NewCareerList />
      <NewKnowledgeList />
      <NewCoursesList />
    </>
  );
}
