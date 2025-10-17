import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loading, TemplateSEO } from '@/components';
import menuList from '@/database/menuList.json';
import { DefaultLayout } from '@/layouts';

const pagesList = {
  Home: lazy(() => import('@/pages/Home')),
  About: lazy(() => import('@/pages/About')),
  Portfolio: lazy(() => import('@/pages/Portfolio')),
  Contact: lazy(() => import('@/pages/Contact')),
};

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {menuList.map((menu) => {
            const Component = pagesList[menu.element];
            return (
              <Route
                key={menu.title}
                path={menu.to === '/' ? '' : menu.to.slice(1)}
                element={
                  <TemplateSEO
                    title={menu.title}
                    description={menu.description}
                    keywords={menu.keywords}
                    ogImage={menu.ogImage}
                  >
                    <Component />
                  </TemplateSEO>
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
