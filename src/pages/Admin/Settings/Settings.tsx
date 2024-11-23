import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Cog, FileCog, Files, KeySquare, PencilOff, Receipt, UserRoundCog } from "lucide-react";
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
import { Button } from "@/components/ui/button";

const Settings = () => {
    const [activeSidebar, setActiveSidebar] = useState(1);

    return (
        <div className="h-screen">
            <div className="mt-5 flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-1/3">
                    <Card onClick={() => setActiveSidebar(1)} className="sidebar-1 p-4 flex items-center gap-3 cursor-pointer">
                        <div className={`border text-[#595959] rounded-lg p-3 ${activeSidebar == 1 ? "bg-[#BE62FA] text-white":"bg-[#EBCEFD]"}`}>
                            <UserRoundCog />
                        </div>
                        <div>
                            <h1 className={` text-base font-semibold ${activeSidebar == 1 ? "text-[#BE62FA]" : "text-[#2B2D42]"}`}>Profile Settings</h1>
                            <p className="text-[#3B3B3B] text-sm">Account settings offer personalization options for a tailored experience.</p>
                        </div>
                    </Card>
                    <Card onClick={() => setActiveSidebar(2)} className="sidebar-2 p-4 flex items-center gap-3 my-4 cursor-pointer">
                        <div className={`border text-[#595959] rounded-lg p-3 ${activeSidebar == 2 ? "bg-[#BE62FA] text-white":"bg-[#EBCEFD]"}`}>
                            <KeySquare />
                        </div>
                        <div>
                            <h1 className={` text-base font-semibold ${activeSidebar == 2 ? "text-[#BE62FA]" : "text-[#2B2D42]"}`}>Two-Factor Authentication</h1>
                            <p className="text-[#3B3B3B] text-sm">Account settings offer personalization options for a tailored experience.</p>
                        </div>
                    </Card>
                    <Card onClick={() => setActiveSidebar(3)} className="sidebar-3 p-4 flex items-center gap-3 cursor-pointer">
                        <div className={`border text-[#595959] rounded-lg p-3 ${activeSidebar == 3 ? "bg-[#BE62FA] text-white":"bg-[#EBCEFD]"}`}>
                            <Cog />
                        </div>
                        <div>
                            <h1 className={` text-base font-semibold ${activeSidebar == 3 ? "text-[#BE62FA]" : "text-[#2B2D42]"}`}>System-Wide Configurations</h1>
                            <p className="text-[#3B3B3B] text-sm">Account settings offer personalization options for a tailored experience.</p>
                        </div>
                    </Card>
                    <Card onClick={() => setActiveSidebar(4)} className="sidebar-4 p-4 flex items-center gap-3 my-4 cursor-pointer">
                        <div className={`border text-[#595959] rounded-lg p-3 ${activeSidebar == 3 ? "bg-[#BE62FA] text-white":"bg-[#EBCEFD]"}`}>
                            <Bell />
                        </div>
                        <div>
                            <h1 className={` text-base font-semibold ${activeSidebar == 3 ? "text-[#BE62FA]" : "text-[#2B2D42]"}`}>Privacy Settings</h1>
                            <p className="text-[#3B3B3B] text-sm">Account settings offer personalization options for a tailored experience.</p>
                        </div>
                    </Card>
                    <Card onClick={() => setActiveSidebar(5)} className="sidebar-5 p-4 flex items-center gap-3 cursor-pointer">
                        <div className={`border text-[#595959] rounded-lg p-3 ${activeSidebar == 3 ? "bg-[#BE62FA] text-white":"bg-[#EBCEFD]"}`}>
                            <FileCog />
                        </div>
                        <div>
                            <h1 className={` text-base font-semibold ${activeSidebar == 3 ? "text-[#BE62FA]" : "text-[#2B2D42]"}`}>Notification Preferences</h1>
                            <p className="text-[#3B3B3B] text-sm">Account settings offer personalization options for a tailored experience.</p>
                        </div>
                    </Card>
                </div>
                <div className="w-full lg:w-2/3">
                    {activeSidebar === 1 && (
                    <Card className="content-1 px-5 py-8">
                        <h1 className="text-[#000000] text-xl font-medium">Personal Details</h1>
                        <div className="flex items-center justify-between gap-10 mt-3">
                            <div className="w-full">
                                <Label className="text-[#595959] text-base font-semibold ">Full Name</Label>
                                <Input className="mt-1 py-6 w-full" type="text" placeholder="e.g., Jhon Doe" />
                            </div>
                            <div className="w-full">
                                <Label className="text-[#595959] text-base font-semibold">Email Address</Label>
                                <Input className="mt-1 py-6 w-full text-[#7E7E7E]" type="email" placeholder="e.g., example@gmail.com" />
                            </div>
                        </div>
                        <div className="w-full lg:w-[47%] mt-4">
                            <Label className="text-[#595959] text-base font-semibold">Phone Number</Label>
                            <Input className="mt-1 py-6 w-full text-[#7E7E7E]" type="text" placeholder="e.g., +880 ...." />
                        </div>
                        <div className="mt-4 flex gap-5 items-center justify-start">
                            <img className="w-[188px] h-[129px] rounded-md" src="https://i.ibb.co.com/68v5tCz/input.webp" alt="" />
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="picture">Upload your logo</Label>
                              <Input id="picture" type="file" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button className="mt-5 bg-[#4406CB] text-white">Save Settings</Button>
                        </div>

                    
                    </Card>
                    )}

                    {activeSidebar === 2 && (
                    <Card className="content-2 px-5 py-8">
                        <h1 className="text-[#000000] text-xl font-semibold flex items-center gap-1">Ads Display Control <span className="border bg-[#3B3B3B] text-xs text-[#595959] py-[1px] px-[8px] rounded-full"> i</span></h1>
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
                        <h1 className="text-[#000000] text-xl font-semibold flex items-center gap-1">Ad Frequency Control <span className="border bg-[#3B3B3B] text-xs text-[#595959] py-[1px] px-[8px] rounded-full"> i</span></h1>
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

export default Settings;