import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

import styles from '../layouts/DefaultLayout.module.scss';

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
