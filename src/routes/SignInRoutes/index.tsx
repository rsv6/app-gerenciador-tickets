import { SignIn } from "../../pages/SignIn";
import { ContainerBody } from "../../components/Layout/ContainerBody";

export const SignInRouter = [
    {
        path: '',
        element: <ContainerBody/>, 
        children: [
            { path: '', element: <SignIn /> }
        ]
    },
];