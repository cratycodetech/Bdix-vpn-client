import { cn } from "@/lib/utils";
import { FolderCog } from "lucide-react";
import { IoSave } from "react-icons/io5";
import { LiaServerSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";


const SideBar = () => {

    return (
        <aside className=" bg-[#FFFFFF] col-span-2 h-full sticky py-5 border-r border-[#EFF0F6]">
            <div className="flex gap-2 items-center justify-center mb-8">
                <div>
                    <img src="https://i.ibb.co.com/DfkFyVt/Rectangle.webp" alt="" />
                </div>
                <div>
                    <h1 className="font-semibold text-[#22c55e] text-xl">BdiX <span className="font-bold text-[#092857]">VPN</span></h1>
                </div>
            </div>
          <nav className="flex flex-col gap-2 px-4 lg:px-5 py-1 text-[#54246D]">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    cn(
                      "p-2 pl-3 lg:h-[46px] rounded-lg transition-all flex gap-4 items-center justify-start",
                      {
                        "text-[#FFFFFF] bg-[#4406CB]": isActive,
                      }
                    )
                  }
                >
                  <IoSave className="shrink-0 w-[25px] h-[25px]"></IoSave>
                  <span className="truncate text-sm font-medium">Dashboard</span>
                </NavLink> 
                <NavLink
                  to="/dashboard/server-monitoring"
                  className={({ isActive }) =>
                    cn(
                      "p-2 pl-3 lg:h-[46px] rounded-lg transition-all flex gap-4 items-center justify-start",
                      {
                        "text-[#FFFFFF] bg-[#4406CB]": isActive,
                      }
                    )
                  }
                >
                  <LiaServerSolid className="shrink-0 w-[22px] h-[22px]"></LiaServerSolid>
                  <span className="truncate text-sm font-medium">Server Monitoring</span>
                </NavLink> 
                <NavLink
                  to="/dashboard/credit-management"
                  className={({ isActive }) =>
                    cn(
                      "p-2 pl-3 lg:h-[46px] rounded-lg transition-all flex gap-4 items-center justify-start",
                      {
                        "text-[#FFFFFF] bg-[#4406CB]": isActive,
                      }
                    )
                  }
                >
                  <FolderCog className="shrink-0 w-[2opx] h-[20px]"></FolderCog>
                  <span className="truncate text-sm font-medium">Credit Management</span>
                </NavLink> 
    
          </nav>
        </aside>
    );
};

export default SideBar;