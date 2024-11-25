
import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import {BellRing, CircleUserRound, X } from "lucide-react";

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
                    <div className="max-w-md mx-auto space-y-4">
                      {/* Notification 1 */}
                      <div className="flex items-start justify-between p-3 border rounded-lg shadow-sm">
                        <div className="flex items-center space-x-4">
                          <div className="">
                              <CircleUserRound className="h-[30px] w-[30px] "></CircleUserRound>
                          </div>
                          <div>
                            <div>
                              <p className="font-semibold">Notification Title:<span className="font-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, soluta.</span></p>
                            </div>
                            <p className="text-sm pl-2 text-blue-900">10 mins ago</p>
                          </div>
                        </div>
                        <button className="ml-4 text-gray-400 hover:text-gray-600">
                            <X className="w-[18px] h-[18px]"></X>
                        </button>
                      </div>
                      {/* Notification 2 */}
                      <div className="flex items-start justify-between p-3 border rounded-lg shadow-sm">
                        <div className="flex items-center space-x-4">
                          <div className="">
                              <CircleUserRound className="h-[30px] w-[30px] "></CircleUserRound>
                          </div>
                          <div>
                            <div>
                              <p className="font-semibold">Notification Title:<span className="font-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, soluta.</span></p>
                            </div>
                            <p className="text-sm pl-2 text-blue-900">10 mins ago</p>
                          </div>
                        </div>
                        <button className="ml-4 text-gray-400 hover:text-gray-600">
                            <X className="w-[18px] h-[18px]"></X>
                        </button>
                      </div>
                
                      {/* Success Notification */}
                      <div className="flex items-start justify-between p-3 rounded-lg shadow-sm bg-[#4E8D7C] text-white">
                        <div className="flex items-center  space-x-4">
                          <div className="w-10 h-10 bg-[#133B5C] flex items-center justify-center rounded-full">
                            ✔ 
                          </div>
                          <div>
                            <h4 className="font-semibold">Well done!</h4>
                            <p className="text-sm">You successfully read this important message.</p>
                          </div>
                        </div>
                        <button className="ml-4 text-gray-400 hover:text-white">
                            <X className="w-[18px] h-[18px]"></X>
                        </button>
                      </div>
                
                      {/* Error Notification */}
                      <div className="flex items-start justify-between p-3 rounded-lg shadow-sm bg-red-100">
                        <div className="flex items-center space-x-4">
                          <div className="w-[60px] h-[40px] text-white bg-[#EB5757] flex items-center justify-center rounded-full">
                              <X className="w-[18px] h-[18px]"></X>
                          </div>
                          <div>
                            <h4 className="font-medium text-lg text-[#2F3032]">Error Title</h4>
                            <p className="text-sm text-[#2F3032]">
                              Payment for order could not be processed. Please try again.
                            </p>
                          </div>
                        </div>
                        <button className="ml-4 text-gray-400 hover:text-white">
                            <X className="w-[18px] h-[18px]"></X>
                        </button>
                      </div>
                    </div>               
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