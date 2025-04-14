import { HeroPicture } from '../components/Hero/HeroPicture';
import styles from '../pages/About.module.scss';

export function About() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.h2}>About</h2>
        <HeroPicture />
      </section>
    </>
  );
}
