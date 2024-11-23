import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { CircleDollarSign, Cog, Files, Fingerprint, Hourglass, MonitorCog, PencilOff, Receipt, TrendingUp } from "lucide-react";
import { FaEllipsis } from "react-icons/fa6";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";

const AdsCampaign = () => {
    const [activeSidebar, setActiveSidebar] = useState(1);


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <MonitorCog className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></MonitorCog>
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Active Ads</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">12</h1>
                                <p className="text-[#1E1E1E] text-base">Total Active Ads</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.6%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="px-3 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <CircleDollarSign className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></CircleDollarSign>
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Total Revenue</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center gap- gap-2">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">7,500</h1>
                                <p className="text-[#1E1E1E] text-base">Total revenue generated</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <Hourglass className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></Hourglass>
                                 
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Today Sessions</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center  gap-2">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">156k</h1>
                                <p className="text-[#1E1E1E] text-base">Total sessions generate</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">20%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <Fingerprint className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></Fingerprint>
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">On Click</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="px-1 mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">156</h1>
                                <p className="text-[#1E1E1E] text-[15px]">Users click on ads</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="mt-5 flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-1/3">
                    <Card onClick={() => setActiveSidebar(1)} className="sidebar-1 p-4 flex items-center gap-3 cursor-pointer">
                        <div className={`border text-white rounded-lg p-3 ${activeSidebar == 1 ? "bg-[#BE62FA]":"bg-[#EBCEFD]"}`}>
                            <Receipt />
                        </div>
                        <div>
                            <h1 className={` text-xl font-semibold ${activeSidebar == 1 ? "text-[#BE62FA]" : "text-[#000000B2]"}`}>Ad Integration Settings</h1>
                            <p className="text-[#3B3B3B] text-sm">It allow users to input and save their credentials for AdMob, Facebook Ads</p>
                        </div>
                    </Card>
                    <Card onClick={() => setActiveSidebar(2)} className="sidebar-2 p-4 flex items-center gap-3 my-4 cursor-pointer">
                        <div className={`border text-white rounded-lg p-3 ${activeSidebar == 2 ? "bg-[#BE62FA]":"bg-[#EBCEFD]"}`}>
                            <PencilOff />
                        </div>
                        <div>
                            <h1 className={` text-xl font-semibold ${activeSidebar == 2 ? "text-[#BE62FA]" : "text-[#000000B2]"}`}>Ads Display Control</h1>
                            <p className="text-[#3B3B3B] text-sm">Allows administrators to enable or disable ads for different user groups.</p>
                        </div>
                    </Card>
                    <Card onClick={() => setActiveSidebar(3)} className="sidebar-3 p-4 flex items-center gap-3 cursor-pointer">
                        <div className={`border text-white rounded-lg p-3 ${activeSidebar == 3 ? "bg-[#BE62FA]":"bg-[#EBCEFD]"}`}>
                            <Cog />
                        </div>
                        <div>
                            <h1 className={` text-xl font-semibold ${activeSidebar == 3 ? "text-[#BE62FA]" : "text-[#000000B2]"}`}>Additional Ad Settings</h1>
                            <p className="text-[#3B3B3B] text-sm">It offers control over the frequency of ads displayed to free users.</p>
                        </div>
                    </Card>
                </div>
                <div className="w-full lg:w-2/3">
                    {activeSidebar === 1 && (
                    <Card className="content-1 px-5 py-8">
                        <h1 className="text-[#000000] text-xl font-semibold flex items-center gap-1">AdMob Credentials <span className="border bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></h1>
                        <div className="flex items-center justify-between gap-10 mt-3">
                            <div className="w-full">
                                <Label className="text-[#595959] text-base font-semibold ">AdMob App ID</Label>
                                <Input className="mt-1 w-full" type="text" placeholder="e.g., ca-app-pub-1234567890~1234567890" />
                            </div>
                            <div className="w-full">
                                <Label className="text-[#595959] text-base font-semibold">Ad Unit ID</Label>
                                <Input className="mt-1 w-full" type="text" placeholder="e.g., ca-app-pub-1234567890/9876543210" />
                            </div>
                        </div>

                        <h1 className="text-[#000000] text-xl font-semibold mt-10 flex items-center gap-1">Facebook Ads Token <span className="border bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></h1>
                        <div className="flex items-center justify-between gap-10 mt-3">
                            <div className="w-full">
                                <Label className="text-[#595959] text-base font-semibold">API Token</Label>
                                <Input className="mt-1 w-full" type="text" placeholder="e.g., ca-app-pub-1234567890~1234567890" />
                            </div>
                            <div className="w-full">
                                <Label className="text-[#595959] text-base font-semibold">Ad Unit ID</Label>
                                <Input className="mt-1 w-full" type="text" placeholder="e.g., ca-app-pub-1234567890/9876543210" />
                            </div>
                        </div>
                    </Card>
                    )}

                    {activeSidebar === 2 && (
                    <Card className="content-2 px-5 py-8">
                        <h1 className="text-[#000000] text-xl font-semibold flex items-center gap-1">Ads Display Control <span className="border bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></h1>
                        <div className="mt-3">
                            <h1 className="text-[#595959] font-semibold text-base">Enable Ads for Free User</h1>
                            <p className="text-[#737373] text-sm">Enable or disable ads displayed to free users on the platform.</p>
                            <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                              <Switch id="airplane-mode" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-[#595959] font-semibold text-base">Enable Ads for Premium User</h1>
                            <p className="text-[#737373] text-sm">Enable or disable ads for premium users on the platform.</p>
                            <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                              <Switch className="text-[#BE62FA]" id="airplane-mode" />
                            </div>
                        </div> 
                    </Card>
                    )}

                    {activeSidebar === 3 && (
                    <Card className="content-3 px-5 py-8">
                        <h1 className="text-[#000000] text-xl font-semibold flex items-center gap-1">Ad Frequency Control <span className="border bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></h1>
                        <div className="mt-3">
                            <h1 className="mb-1 text-[#595959] font-semibold text-base">Control how often ads are shown to free users.</h1>
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="e.g., every 5 minute" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Fruits</SelectLabel>
                                  <SelectItem value="5 minute">5 minute</SelectItem>
                                  <SelectItem value="10 minute">10 minute</SelectItem>
                                  <SelectItem value="15 minute">15 minute</SelectItem>
                                  <SelectItem value="20 minute">20 minute</SelectItem>
                                  <SelectItem value="25 minute">25 minute</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                        </div>

                        <div className="mt-5">
                            <h1 className=" text-[#595959] font-semibold text-base">Ad Revenue Reporting</h1>
                            <p className="mb-3 text-[#737373] text-sm">View your current ad revenue for the selected platforms (AdMob/Facebook Ads).</p>
                            <Select>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="e.g., AdMob" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Fruits</SelectLabel>
                                  <SelectItem value="5 minute">5 minute</SelectItem>
                                  <SelectItem value="10 minute">10 minute</SelectItem>
                                  <SelectItem value="15 minute">15 minute</SelectItem>
                                  <SelectItem value="20 minute">20 minute</SelectItem>
                                  <SelectItem value="25 minute">25 minute</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                            <div className="mt-5 flex items-center gap-2">
                            <Files className="text-[#A5A5A5]"></Files>
                            <a className="text-[#5D5D5D] text-xs" href="https://dummy.restapiexample.com/api/v1/employees">https://dummy.restapiexample.com/api/v1/employees</a>
                            </div>
                        </div>
                    </Card>
                    )}
                </div>
            </div>
            

            
            
        </div>
    );
};

export default AdsCampaign;