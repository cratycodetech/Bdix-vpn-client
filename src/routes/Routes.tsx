
import DashboardLayout from "@/components/layout/DashboardLayout";
import ServerMonitoring from "@/pages/Admin/ServerMonitoring/ServerMonitoring";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
        {
            path: "/",
            element: ""
        },
        {
            path: "server-monitoring",
            element: <ServerMonitoring/>
        },
    ]
  },
]);

export default router;