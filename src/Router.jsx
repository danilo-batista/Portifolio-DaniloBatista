import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loading, TemplateSEO } from '@/components';
import { pagesMetadata } from '@/config';
import { DefaultLayout } from '@/layouts';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Home */}

        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <TemplateSEO {...pagesMetadata.home}>
                <pagesMetadata.home.component />
              </TemplateSEO>
            </Suspense>
          }
        />
        {/* About */}
        <Route
          path="sobre-mim"
          element={
            <Suspense fallback={<Loading />}>
              <TemplateSEO {...pagesMetadata.about}>
                <pagesMetadata.about.component />
              </TemplateSEO>
            </Suspense>
          }
        />
        {/* Portfolio */}
        <Route
          path="portifolio"
          element={
            <Suspense fallback={<Loading />}>
              <TemplateSEO {...pagesMetadata.portfolio}>
                <pagesMetadata.portfolio.component />
              </TemplateSEO>
            </Suspense>
          }
        />
        {/* Contact */}
        <Route
          path="contato"
          element={
            <Suspense fallback={<Loading />}>
              <TemplateSEO {...pagesMetadata.contact}>
                <pagesMetadata.contact.component />
              </TemplateSEO>
            </Suspense>
          }
        />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
