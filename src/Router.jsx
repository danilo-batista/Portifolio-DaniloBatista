import { Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
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
    description: 'Home',
  },
  {
    to: '/sobre-mim',
    title: 'Sobre Mim',
    element: <About />,
    description: 'Sobre mim',
  },
  {
    to: '/portifolio',
    title: 'Portifólio',
    element: <Portfolio />,
    description: 'Portfólio',
  },
  {
    to: '/contato',
    title: 'Contato',
    element: <Contact />,
    description: 'Contato',
  },
];

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {menuList.map((menu) => {
          return (
            <Route
              key={menu.title}
              path={menu.to === '/' ? '' : menu.to.slice(1)}
              element={
                <Page title={menu.title} description={menu.description}>
                  {menu.element}
                </Page>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}
