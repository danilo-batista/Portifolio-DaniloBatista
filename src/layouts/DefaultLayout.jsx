import { Outlet } from 'react-router-dom';
import { FooterMain } from '@/components/Footer/FooterMain';
import { Header } from '@/components/Header/Header';
import styles from './DefaultLayout.module.scss';

export function DefaultLayout() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <FooterMain />
    </main>
  );
}
