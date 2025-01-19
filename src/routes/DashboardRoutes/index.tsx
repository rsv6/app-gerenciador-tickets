import { lazy, Suspense } from "react";
const ContainerBody = lazy(() => import('@/components/Layout/ContainerBody'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

export const DashboardRoutes = [
    {
        path: 'dashboard',
        element: <Suspense fallback={<div>Loading...</div>}>
                <ContainerBody/>
            </Suspense>, 
        children: [
            { path: '', element: <Suspense fallback={<div>Loading...</div>}>
                <Dashboard/>
            </Suspense> }
        ]
    },
]