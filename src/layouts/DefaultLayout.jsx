import { Outlet } from 'react-router-dom';
import { NewMainFooter } from '../components/Footer/NewMainFooter';
import { Header } from '../components/Header/Header';
import styles from '../layouts/DefaultLayout.module.scss';

export function DefaultLayout() {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
      <NewMainFooter />
    </main>
  );
}
