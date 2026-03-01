import { createBrowserRouter, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy loading components
const HomePage = lazy(() => import('@/pages/Home/index'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/index'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-blue-100 border-t-primary rounded-full animate-spin"></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);