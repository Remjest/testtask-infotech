import { Navigate, Outlet } from 'react-router-dom';
import { isAuthorized } from '@/shared/lib/auth';

export const CheckLogin = () => {

    if (!isAuthorized()) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default CheckLogin;