import { Navigate, Route, Routes } from 'react-router-dom';
import { Page } from './components/Page';
import menuList from './database/menuList.json';
import { DefaultLayout } from './layouts/DefaultLayout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

const pagesList = {
  Home,
  About,
  Portfolio,
  Contact,
};

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {menuList.map((menu) => {
          const Component = pagesList[menu.element];
          return (
            <Route
              key={menu.title}
              path={menu.to === '/' ? '' : menu.to.slice(1)}
              element={
                <Page
                  title={menu.title}
                  description={menu.description}
                  keywords={menu.keywords}
                  ogImage={menu.ogImage}
                >
                  <Component />
                </Page>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
