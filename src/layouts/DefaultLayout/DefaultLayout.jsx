import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/components';
import styles from './DefaultLayout.module.scss';

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
