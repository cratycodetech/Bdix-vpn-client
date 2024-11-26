import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { useAppSelector } from '@/pages/redux/hook';
import { useCurrentUser } from '@/pages/redux/features/auth/authSlice';
import useReseller from '@/components/hooks/useReseller';

type TResellerRouteProps = {
  children: React.ReactNode;
}

const ResellerRoute: React.FC<TResellerRouteProps> = ({ children }) => {
  const currentUser = useAppSelector(useCurrentUser);
  const { isReseller, isResellerLoading, isError } = useReseller();
  const location = useLocation();

  if (isError) {
    return <p>Error loading reseller status.</p>;
  }

  if (isResellerLoading) {
    return <progress className="progress w-56"></progress>;
  }


  if (currentUser && isReseller) {
    return children;
  }

  toast("Access denied: This page is restricted to Resellers only.");

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default ResellerRoute;
