
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Award, BadgeCheck, BellRing, CircleUserRound } from "lucide-react";
import { Button } from "../ui/button";

const TopBar = () => {
    return (
        <div className="text-[#000000] lg:h-[90px] lg:flex justify-between items-center gap-5 mx-5 border-b border-[#0000001A]">
            <div className="">
                <h1 className="text-3xl font-semibold">Admin Management</h1>
            </div>
            <div className="flex items-center gap-3">
            <div>
              <Menubar className=" border-none bg-[#F0F4FA]">
                <MenubarMenu>
                  <MenubarTrigger><BellRing className="text-[#FFA412] w-[18px] h-[18px]"></BellRing></MenubarTrigger>
                  <MenubarContent className="p-4 max-w-[400px]">
                    <h1 className="text-2xl mb-2 font-semibold">Notifications</h1>
                    <hr />
                    <MenubarItem className="flex gap-1 mt-2">
                    <CircleUserRound className="h-[35px] w-[35px]"></CircleUserRound>
                    <div>
                      <p className="px-2 font-semibold">New Donation: <span className="font-normal"> $50 from John Doe. Check dashboard.</span></p>
                      <p className="pl-2 text-blue-900">11.22 AM</p>
                    </div> 
                    </MenubarItem>

                    <MenubarItem className="flex gap-1">
                    <Award className="h-[35px] w-[35px]"></Award>
                    <div>
                      <p className="px-2 font-semibold">Goal Achieved: <span className="font-normal"> $10,000 goal reached! Set new targets.</span></p>
                      <p className="pl-2 text-blue-900">2 hours age</p>
                    </div> 
                    </MenubarItem>

                    <MenubarItem className="flex gap-1">
                    <BadgeCheck className="h-[35px] w-[35px]"></BadgeCheck>
                    <div>
                      <p className="px-2 font-semibold">Monthly Summary:<span className="font-normal"> $5,000 from 100 donors. See report.</span></p>
                      <p className="pl-2 text-blue-900">6 hours age</p>
                    </div> 
                    </MenubarItem>
                    <MenubarItem className="mt-4">
                      <Button className="w-full">View All</Button> 
                    </MenubarItem>
                    

                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    <img className="w-[54px] h-[54px] rounded-2xl" src="https://i.ibb.co.com/XJR6jbj/Rectangle-1393.webp" alt="" />
                </div>
                <div>
                    <h1 className="text-[#151D48] text-base font-semibold">Musfiq</h1>
                    <p className="text-[#737791] text-sm">Admin</p>
                </div>
            </div>

            

            </div>
        </div>
    );
};

export default TopBar;