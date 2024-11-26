import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from "react";
import { useAppSelector } from '@/pages/redux/hook';
import { useCurrentUser } from '@/pages/redux/features/auth/authSlice';


type TPrivateRouteProps = {
    children: ReactNode;
}

const PrivateRoute = ({children} : TPrivateRouteProps) => {
    const currentUser = useAppSelector(useCurrentUser)
    const location = useLocation()

    if(currentUser){
        return children
    }

    return <Navigate to="/login" state={{ from: location}} replace></Navigate>;
};

export default PrivateRoute;