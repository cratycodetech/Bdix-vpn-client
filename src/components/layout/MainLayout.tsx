import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[90px]">
              <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;