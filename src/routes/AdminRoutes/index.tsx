import { ContainerBody } from "../../components/Layout/ContainerBody";
import { Admin } from "../../pages/Admin";

export const AdminRoutes = [
    {
        path: 'admin',
        element: <ContainerBody/>, 
        children: [
            { path: '', element: <Admin /> }
        ]
    },
];