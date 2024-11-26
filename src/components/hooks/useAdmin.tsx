import { useCheckAdminQuery } from '@/pages/redux/features/auth/authApi';
import { useAppSelector } from '@/pages/redux/hook';
import { useCurrentUser } from '@/pages/redux/features/auth/authSlice';

const useAdmin = () => {
  const currentUser = useAppSelector(useCurrentUser);

  const { data, isLoading: isAdminLoading, isError } = useCheckAdminQuery(
    currentUser?.email || undefined,
    {
      skip: !currentUser?.email, // Skip the query if email is not available
    }
  );

  // Extract reseller status or fallback to undefined
  const isAdmin = data?.data?.role === 'Admin';

  return { isAdmin, isAdminLoading, isError };
};

export default useAdmin;
