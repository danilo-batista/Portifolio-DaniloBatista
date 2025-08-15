import { NewCareerList } from '../components/Career/NewCareerList';
import { NewCoursesList } from '../components/Courses/NewCoursesList';
import { NewHeroAbout } from '../components/Hero/NewHeroAbout';
import { NewKnowledgeList } from '../components/Knowledge/NewKnowledgeList';
import { NewSkills } from '../components/Skills/NewSkills';

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
