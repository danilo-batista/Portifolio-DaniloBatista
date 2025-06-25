import { HeroPicture } from './HeroPicture';
import { HeroCopywriting } from './HeroCopywriting';
import { heroAbout } from '../../database/heroInfo';

import styles from '../Hero/HeroAbout.module.scss';

export function HeroAbout() {
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
