import { ContainerBody } from "../../components/Layout/ContainerBody";
import { Contact } from "../../pages/Contact";

export const ContactRoutes = [
    {
        path: 'contact',
        element: <ContainerBody/>, 
        children: [
            { path: '', element: <Contact /> }
        ]
    },
]