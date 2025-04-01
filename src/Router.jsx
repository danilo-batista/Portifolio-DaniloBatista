import { Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

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
    to: '/blog',
    title: 'Blog',
    element: <Blog />,
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
          return <Route path={menu.to} element={menu.element} />;
        })}
      </Route>
    </Routes>
  );
}
