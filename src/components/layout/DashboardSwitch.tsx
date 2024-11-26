import { Navigate } from 'react-router-dom';
import useAdmin from '@/components/hooks/useAdmin';
import Lottie from 'lottie-react';
import loadingAnimation from "../../assets/animation/loading.json"
import useReseller from '../hooks/useReseller';
import Dashboard from '@/pages/Admin/dashboard/Dashboard';
import ResellerDashboard from '@/pages/ResellersDashboard/ResellerDashboard/ResellerDashboard';

const DashboardSwitch = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isReseller, isResellerLoading] = useReseller();

  if (isAdminLoading) {
    return <div><Lottie className="w-2/5" animationData={loadingAnimation} /></div>;
  }

  if (isResellerLoading) {
    return <div><Lottie className="w-2/5" animationData={loadingAnimation} /></div>;
  }

//   if (!currentUser) {
//     return <Navigate to="/login" replace />;
//   }

  if (isAdmin) {
    return <Dashboard />;
  }
  if (isReseller) {
    return <ResellerDashboard />;
  }

//   return <Dashboard />;
};

export default DashboardSwitch;