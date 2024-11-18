
import DashboardLayout from "@/components/layout/DashboardLayout";
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
        }
    ]
  },
]);

export default router;