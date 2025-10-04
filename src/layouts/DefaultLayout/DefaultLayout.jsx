import { Outlet } from 'react-router-dom';
import { FooterMain, Header } from '@/components';
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
