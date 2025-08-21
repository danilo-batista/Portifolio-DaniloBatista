import { NewCareerList } from '../components/Cards/Career/NewCareerList';
import { NewCoursesList } from '../components/Cards/Courses/NewCoursesList';
import { NewKnowledgeList } from '../components/Cards/Knowledge/NewKnowledgeList';
import { NewHeroAbout } from '../components/Hero/NewHeroAbout';
import { NewSkills } from '../components/Skills/NewSkills';

export function About() {
  return (
    <>
      <NewHeroAbout />
      <NewSkills />
      <NewCareerList />
      <NewCoursesList />
      <NewKnowledgeList />
    </>
  );
}
