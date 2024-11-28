import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Cog, KeySquare, UserRoundCog } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ResellerSettings = () => {
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
                        <h1 className="text-[#000000] text-2xl font-medium">Two-Factor Authentication</h1>
                        <div className="mt-3">
                            <p className="text-[#3B3B3B] text-base flex items-center gap-2 justify-start">Enable 2FA. <span className="bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></p>
                            <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                              <Switch id="airplane-mode" />
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-end">
                            <Button className="bg-[#4406CB] text-white">Save Settings</Button>
                        </div>
                    </Card>
                    )}

                    {activeSidebar === 3 && (
                    <Card className="content-3 px-5 py-8">
                        <h1 className="mb-5 text-[#000000] text-xl font-semibold flex items-center gap-1">Notification Preferences</h1>
                        <div className="flex items-center gap-16">
                            <div className="mt-3">
                                <p className="text-[#3B3B3B] text-base flex items-center gap-2 justify-start">Enable System Alerts <span className="bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></p>
                                <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                                  <Switch id="airplane-mode" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-[#3B3B3B] text-base flex items-center gap-2 justify-start">Enable User Activity Notifications <span className="bg-[#3B3B3B] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></p>
                                <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                                  <Switch id="airplane-mode" />
                                </div>
                            </div>

                        </div>
                       
                        <div className="flex justify-end mt-10">
                            <Button className=" bg-[#4406CB] text-white">Save Settings</Button>
                        </div>

                        
                    </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResellerSettings;