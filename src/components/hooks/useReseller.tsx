import { useCheckResellerQuery } from '@/pages/redux/features/auth/authApi';
import { useAppSelector } from '@/pages/redux/hook';
import { useCurrentUser } from '@/pages/redux/features/auth/authSlice';

const useReseller = () => {
  const currentUser = useAppSelector(useCurrentUser);

  const { data, isLoading: isResellerLoading, isError } = useCheckResellerQuery(
    currentUser?.email || undefined,
    {
      skip: !currentUser?.email, // Skip the query if email is not available
    }
  );

  // Extract reseller status or fallback to undefined
  const isReseller = data?.data?.role === 'Reseller';

  return { isReseller, isResellerLoading, isError };
};

export default useReseller;
