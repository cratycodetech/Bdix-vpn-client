import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { useAppSelector } from '@/pages/redux/hook';
import { useCurrentUser } from '@/pages/redux/features/auth/authSlice';
import useAdmin from '@/components/hooks/useAdmin';

type TAdminRouteProps = {
  children: React.ReactNode;
}

const AdminRoute: React.FC<TAdminRouteProps> = ({ children }) => {
  const currentUser = useAppSelector(useCurrentUser);
  const {isAdmin, isAdminLoading} = useAdmin();
  const location = useLocation();
  console.log("admin from admin route", isAdmin);

  if (isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (currentUser && isAdmin) {
    return children;
  }

  toast("Access denied: This page is restricted to Admins only.");

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
