import { Outlet, useLocation } from 'react-router';
import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { pathNames } from '@/utils/constants';
import { useEffect, useState } from 'react';

const ContainerBody = () => {
    const [showHeader, setShowHeader] = useState<boolean>(false);
    const { pathname } = useLocation();

    const currentPath = pathNames.find((path) => 
        path.path === pathname && pathname !== '/'
    )?.name;

    console.log(currentPath);
    
    useEffect(() => {
        if (currentPath) {
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }, [currentPath]);

    return (
        <div className="container-body">
            {showHeader && <Header />}
            <Outlet />
            {showHeader && <Footer />}
        </div>
    );
};

export default ContainerBody;