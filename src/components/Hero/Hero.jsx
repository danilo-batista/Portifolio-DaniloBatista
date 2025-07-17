import { NavLink } from 'react-router-dom';
import { heroHome } from '../../database/heroInfo';
import styles from '../Hero/Hero.module.scss';
import { HeroCopywriting } from './HeroCopywriting';
import { HeroPicture } from './HeroPicture';

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeroCopywriting
          title={heroHome.title}
          description={heroHome.description}
        />

        <div className={styles.hero__buttons}>
          <NavLink to="/sobre-mim">Meu Currículo!</NavLink>
          <NavLink to="/contato">Diga um Oi!</NavLink>
        </div>
      </div>

      <HeroPicture />
    </section>
  );
}
