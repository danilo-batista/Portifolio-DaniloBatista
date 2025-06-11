import { HeroPicture } from '../components/Hero/HeroPicture';
import { HeroCopywriting } from '../components/Hero/HeroCopywriting';
import { heroAbout } from '../database/heroInfo';

import styles from '../pages/About.module.scss';

export function About() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <HeroCopywriting
            title={heroAbout.title}
            description={heroAbout.description}
          />
        </div>
        <HeroPicture />
      </section>
    </>
  );
}
