import useAdmin from '@/components/hooks/useAdmin';
import Lottie from 'lottie-react';
import loadingAnimation from "../../assets/animation/loading.json"
import useReseller from '../hooks/useReseller';
import Dashboard from '@/pages/Admin/dashboard/Dashboard';
import ResellerDashboard from '@/pages/ResellersDashboard/ResellerDashboard/ResellerDashboard';

const DashboardSwitch = () => {
  const {isReseller, isResellerLoading } = useReseller()
  const {isAdmin, isAdminLoading} = useAdmin()

  if (isAdminLoading) {
    return <div><Lottie className="w-2/5" animationData={loadingAnimation} /></div>;
  }

  if (isResellerLoading) {
    return <div><Lottie className="w-2/5" animationData={loadingAnimation} /></div>;
  }

  if (isAdmin) {
    return <Dashboard />;
  }
  if (isReseller) {
    return <ResellerDashboard />;
  }
};

export default DashboardSwitch;