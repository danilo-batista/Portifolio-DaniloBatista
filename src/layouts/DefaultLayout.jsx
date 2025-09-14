import { Outlet } from 'react-router-dom';
import { MainFooter } from '@/components/Footer/MainFooter';
import { Header } from '@/components/Header/Header';
import styles from './DefaultLayout.module.scss';

export function DefaultLayout() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <MainFooter />
    </main>
  );
}
