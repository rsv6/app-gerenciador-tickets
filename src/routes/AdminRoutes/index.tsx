import { lazy, Suspense } from 'react';
const ContainerBody = lazy(() => import('@/components/Layout/ContainerBody'))
const Admin = lazy(() => import('@/pages/Admin'));

export const AdminRoutes = [
    {
        path: 'admin',
        element: <Suspense fallback={<div>Loading...</div>}>
                <ContainerBody/>
            </Suspense>, 
        children: [
            { path: '', element: <Suspense fallback={<div>Loading...</div>}>
                <Admin />
            </Suspense> }
        ]
    },
];