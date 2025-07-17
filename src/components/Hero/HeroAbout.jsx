import { heroAbout } from '../../database/heroInfo';
import styles from '../Hero/HeroAbout.module.scss';
import { HeroCopywriting } from './HeroCopywriting';
import { HeroPicture } from './HeroPicture';

export function HeroAbout() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeroCopywriting
          title={heroAbout.title}
          description={heroAbout.description}
        />
      </div>
      <HeroPicture />
    </section>
  );
}
