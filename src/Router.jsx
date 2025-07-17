import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

export const menuList = [
  {
    to: '/',
    title: 'Home',
    element: <Home />,
  },
  {
    to: '/sobre-mim',
    title: 'Sobre Mim',
    element: <About />,
  },
  {
    to: '/portifolio',
    title: 'Portifólio',
    element: <Portfolio />,
  },
  {
    to: '/contato',
    title: 'Contato',
    element: <Contact />,
  },
];

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {menuList.map((menu) => {
          return (
            <Route path={menu.to} element={menu.element} key={menu.title} />
          );
        })}
      </Route>
    </Routes>
  );
}
