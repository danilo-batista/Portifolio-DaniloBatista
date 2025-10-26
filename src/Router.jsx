import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loading, TemplateSEO } from '@/components';
import { pagesMetadata } from '@/config';
import { DefaultLayout } from '@/layouts';

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {/* Home */}
          <Route
            index
            element={
              <TemplateSEO {...pagesMetadata.home}>
                <pagesMetadata.home.component />
              </TemplateSEO>
            }
          />
          {/* About */}
          <Route
            path="sobre-mim"
            element={
              <TemplateSEO {...pagesMetadata.about}>
                <pagesMetadata.about.component />
              </TemplateSEO>
            }
          />
          {/* Portfolio */}
          <Route
            path="portifolio"
            element={
              <TemplateSEO {...pagesMetadata.portfolio}>
                <pagesMetadata.portfolio.component />
              </TemplateSEO>
            }
          />
          {/* Contact */}
          <Route
            path="contato"
            element={
              <TemplateSEO {...pagesMetadata.contact}>
                <pagesMetadata.contact.component />
              </TemplateSEO>
            }
          />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
