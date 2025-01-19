import { lazy, Suspense } from 'react';
const SignIn = lazy(() => import('@/pages/SignIn'));
const ContainerBody = lazy(() => import('@/components/Layout/ContainerBody'))

export const SignInRoutes = [
    {
        path: '',
        element: <Suspense fallback={<div>Loading...</div>} >
                <ContainerBody/>
            </Suspense>, 
        children: [
            { path: '', element: <Suspense fallback={<div>Loading...</div>} >
                <SignIn />
            </Suspense> }
        ]
    },
];