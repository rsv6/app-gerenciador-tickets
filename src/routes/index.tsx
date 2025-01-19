import { createBrowserRouter, RouterProvider } from 'react-router';
import { SignInRouter } from './SignInRoutes';
import { AboutRouter } from './AboutRoutes';
import { ContactRoutes } from './ContactRoutes';
import { Layout } from '../components/Layout';
import { NotFound } from '../pages/NotFound';
import { DashboardRoutes } from './DashboardRoutes';
import { AdminRoutes } from './AdminRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...SignInRouter,
      ...AboutRouter,
      ...ContactRoutes,
      ...DashboardRoutes,
      ...AdminRoutes,
      { path: '*', element: <NotFound /> }
    ]
  },
]);

export const AppRouter = () =><RouterProvider router={router} />; 