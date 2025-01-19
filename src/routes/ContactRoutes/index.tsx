import { lazy, Suspense } from 'react';
const Contact = lazy(() => import('@/pages/Contact'));
const ContainerBody = lazy(() => import('@/components/Layout/ContainerBody'))


export const ContactRoutes = [
    {
        path: 'contact',
        element: <Suspense fallback={<div>Loading...</div>} >
                <ContainerBody/></Suspense>, 
        children: [
            { path: '', element: <Suspense fallback={<div>Loading...</div>} >
                <Contact />
            </Suspense> }
        ]
    },
]