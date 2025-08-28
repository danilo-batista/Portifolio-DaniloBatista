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
    description:
      'Portfólio profissional de Danilo Batista, desenvolvedor front-end e designer gráfico.',
  },
  {
    to: '/sobre-mim',
    title: 'Sobre Mim',
    element: <About />,
    description:
      'Conheça a história de Danilo Batista: designer gráfico e desenvolvedor front-end com experiência em embalagens, quadrinhos e projetos digitais.',
  },
  {
    to: '/portifolio',
    title: 'Portifólio',
    element: <Portfolio />,
    description:
      'Explore os destaques do portfólio de Danilo Batista — projetos front-end criativos desenvolvidos em React, JavaScript, HTML e CSS, com forte base em design gráfico',
  },
  {
    to: '/contato',
    title: 'Contato',
    element: <Contact />,
    description:
      'Entre em contato com Danilo Batista — desenvolvedor front-end e designer gráfico. Vamos conversar sobre como cocriar soluções digitais com criatividade e impacto.',
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
