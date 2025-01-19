import { Outlet } from 'react-router';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

export const ContainerBody = () => {
    return (
        <div className="container-body">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};