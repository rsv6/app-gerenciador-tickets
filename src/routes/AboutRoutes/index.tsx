import { lazy, Suspense } from 'react';
const ContainerBody = lazy(() => import('@/components/Layout/ContainerBody'))
const About = lazy(() => import('@/pages/About'));

export const AboutRoutes = [
    {
        path: 'about',
        element: <Suspense fallback={<div>Loading...</div>}>
                <ContainerBody/>
            </Suspense>, 
        children: [
            { path: '', element: <Suspense fallback={<div>Loading...</div>}>
                <About />
            </Suspense> }
        ]
    },
];