
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import AdsCampaign from "@/pages/Admin/AdsCampaign/AdsCampaign";
import CreditManagement from "@/pages/Admin/CreditManagement/creditManagement";
import Dashboard from "@/pages/Admin/dashboard/Dashboard";
import ReportsAndAnalysis from "@/pages/Admin/ReportsAndAnalysis/ReportsAndAnalysis";
import ResellerManagement from "@/pages/Admin/ResellerManagement/ResellerManagement";
import ServerMonitoring from "@/pages/Admin/ServerMonitoring/ServerMonitoring";
import Settings from "@/pages/Admin/Settings/Settings";
import UserManagement from "@/pages/Admin/UserManagement/UserManagement";
import ForgotPassword from "@/pages/authentication/ForgotPassword";
import Login from "@/pages/authentication/Login";
import Register from "@/pages/authentication/Register";
import Home from "@/pages/Home/Home/Home";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path: "login",
          element: <Login/>
        },
        {
          path: "register",
          element: <Register/>
        },
        {
          path: "forgotPassword",
          element: <ForgotPassword/>
        },
        
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>,
        },
        {
          path: "server-monitoring",
          element: <ServerMonitoring/>
        }, 
        {
          path: "credit-management",
          element: <CreditManagement/>
        },
        {
          path: "ads-campaign",
          element: <AdsCampaign/>
        },
        {
          path: "user-management",
          element: <UserManagement/>
        },
        {
          path: "reseller-management",
          element: <ResellerManagement/>
        },
        {
          path: "reports-analysis",
          element: <ReportsAndAnalysis/>
        },
        {
          path: "settings",
          element: <Settings/>
        },
    ]
  },
]);

export default router;