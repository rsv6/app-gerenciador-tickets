import { ContainerBody } from "../../components/Layout/ContainerBody";
import { About } from "../../pages/About";

export const AboutRouter = [
    {
        path: 'about',
        element: <ContainerBody/>, 
        children: [
            { path: '', element: <About /> }
        ]
    },
];