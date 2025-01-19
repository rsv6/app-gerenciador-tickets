import { ContainerBody } from "../../components/Layout/ContainerBody";
import { Dashboard } from "../../pages/Dashboard/Index";

export const DashboardRoutes = [
    {
        path: 'dashboard',
        element: <ContainerBody/>, 
        children: [
            { path: '', element: <Dashboard/> }
        ]
    },
]