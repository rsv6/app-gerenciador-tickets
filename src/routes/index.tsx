import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { SignInRoutes } from './SignInRoutes';
import { AboutRoutes } from './AboutRoutes';
import { ContactRoutes } from './ContactRoutes';
const Layout = lazy(() => import('../components/Layout'));
import { NotFound } from '../pages/NotFound';
import { DashboardRoutes } from './DashboardRoutes';
import { AdminRoutes } from './AdminRoutes';

const router = createBrowserRouter([
  {
    path: '',
    element: <Suspense fallback={<div>Loading...</div>} >
        <Layout />
      </Suspense>,
    children: [
      ...SignInRoutes,
      ...AboutRoutes,
      ...ContactRoutes,
      ...DashboardRoutes,
      ...AdminRoutes,
      { path: '*', element: <NotFound /> }
    ]
  },
]);

export const AppRouter = () =><RouterProvider router={router} />; 