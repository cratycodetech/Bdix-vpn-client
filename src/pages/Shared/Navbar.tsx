import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger,} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { Button } from "@/components/ui/button";
import useAdmin from "@/components/hooks/useAdmin";
import useReseller from "@/components/hooks/useReseller";




const Navbar = () => {
  const {isAdmin} = useAdmin()
  const {isReseller} = useReseller()

  //handle logout
  const handleLogout = () =>{
    // dispatch(logout())
  }

  return (
    <header className="bg-slate-100 text-[#999999]  shadow mx-auto py-5 fixed left-0 right-0 top-0 z-50">
      <nav className="h-full max-w-[90%] px-[12px] mx-auto flex gap-1 justify-between items-center">
            <div className="flex gap-2 items-center justify-center">
                <div>
                    <img src="https://i.ibb.co.com/DfkFyVt/Rectangle.webp" alt="" />
                </div>
                <div>
                    <h1 className="font-semibold text-[#22c55e] text-xl">BdiX <span className="font-bold text-[#092857]">VPN</span></h1>
                </div>
            </div>
        <NavigationMenu className="lg:hidden ">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Menu className="text-black bg-white"></Menu>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="font-semibold p-2 w-[134px]">
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 text-[#999999] hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 text-[#999999] hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/aboutUs">About us</NavLink>
                  </li>
                  {(isAdmin || isReseller) && (
                    <li>
                      <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 text-[#999999] hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/dashboard">Dashboard</NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 text-[#999999] hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/servers">Servers</NavLink>
                  </li>
                  <li>
                    <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 text-[#999999] hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/plans">Plans</NavLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:block">
          <ul className="flex gap-5 font-semibold text-lg">
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/aboutUs">About Us</NavLink>
            {(isAdmin || isReseller) && (
              <li>
                <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 text-[#999999] hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/dashboard">Dashboard</NavLink>
              </li>
            )}
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/servers">Servers</NavLink>
            <NavLink className={({ isActive }) =>`transition-all hover:underline underline-offset-8 hover:text-[#000000] ${  isActive ? 'text-[#000000] underline underline-offset-8' : ''}`} to="/plans">Plans</NavLink>
          </ul>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <NavLink to="/register">
            <Button className="rounded-md text-lg font-semibold bg-[#4406CB] text-white py-6" onClick={handleLogout}>Register</Button>
          </NavLink>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
