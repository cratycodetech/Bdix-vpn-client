
import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Admin/dashboard/Dashboard";
import ServerMonitoring from "@/pages/Admin/ServerMonitoring/ServerMonitoring";
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
    ]
  },
]);

export default router;