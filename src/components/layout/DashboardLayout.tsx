import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = () => {
    return (
        <div>
            <div className="grid grid-cols-12 bg-[#F0F4FA] h-screen">
                <div className="col-span-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-span-10">
                    <TopBar/>
                    <div className="p-5 h-full">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;