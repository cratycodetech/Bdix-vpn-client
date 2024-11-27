
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import AdsCampaign from "@/pages/Admin/AdsCampaign/AdsCampaign";
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
import AdminRoute from "./AdminRoute";
import ResellerRoute from "./ResellerRoute";
import PrivateRoute from "./PrivateRoute";
import ResellerUserManagement from "@/pages/ResellersDashboard/ResellerUserManagement/ResellerUserManagement";
import CreditManagement from "@/pages/Admin/CreditManagement/CreditManagement";
import VerifyOtp from "@/pages/authentication/VerifyOTP";

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
        {
          path: "verify-otp",
          element: <VerifyOtp/>
        },
        
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout/>,
    children: [
        {
            index: true,
            element: <PrivateRoute><Dashboard/></PrivateRoute>,
        },
        {
          path: "server-monitoring",
          element: <AdminRoute><ServerMonitoring/></AdminRoute>
        }, 
        {
          path: "credit-management",
          element: <CreditManagement/>
        },
        {
          path: "ads-campaign",
          element: <AdminRoute><AdsCampaign/></AdminRoute>
        },
        {
          path: "user-management",
          element: <AdminRoute><UserManagement/></AdminRoute>
        },
        {
          path: "reseller-management",
          element: <AdminRoute><ResellerManagement/></AdminRoute>
        },
        {
          path: "reports-analysis",
          element: <AdminRoute><ReportsAndAnalysis/></AdminRoute>
        },
        {
          path: "settings",
          element: <AdminRoute><Settings/></AdminRoute>
        },
        {
          path: "reseller-user-management",
          element: <ResellerRoute><ResellerUserManagement/></ResellerRoute>
        },
        
    ]
  },
]);

export default router;