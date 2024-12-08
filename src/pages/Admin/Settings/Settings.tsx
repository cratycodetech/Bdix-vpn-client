/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/pages/redux/hook";
import { useCurrentUser } from "@/pages/redux/features/auth/authSlice";
import { useGetAllUsersQuery, useUpdateProfileMutation } from "@/pages/redux/features/admin/adminUserManagement/adminUserManagementApi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TFormData = {
    name: string,
    email: string,
    phone: string,
    photo: File | null;
}

const Settings = () => {
    const [activeSidebar, setActiveSidebar] = useState(1);
    const currentUser = useAppSelector(useCurrentUser)
    const {data: getAllUsers} = useGetAllUsersQuery(undefined)
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>();
    const [UpdateProfile] = useUpdateProfileMutation()

    //filter current user
    const singleUser = useMemo(() => {
        return getAllUsers?.data?.find((user: { email: string | undefined; }) => user?.email === currentUser?.email);
    }, [getAllUsers?.data, currentUser?.email]);


    // Form submission handler
    // const onSubmit: SubmitHandler<TFormData> = async (data) => {
    //     const { name, email, phone, photo } = data;
    
    //     // Access the photo if provided and get its name
    //     const photoName = photo?.length ? photo[0]?.name : null; 
    
    //     try {
    //       if (singleUser) {
    //         const updatedData = {
    //           name,
    //           email,
    //           phone,
    //           photo: photoName,
    //         };
    //         const res = await UpdateProfile({ userId: singleUser._id, userInfo: updatedData });
    //         toast.success("Profile updated successfully");
    //         console.log("Updated Data:", updatedData);
    //         console.log("res", res);  // Log the response if needed
    //       }
    //     } catch (error: any) {
    //       if (error.message.includes('duplicate key error')) {
    //         toast.error("this is not your email.");
    //       } else {
    //         console.error("Error updating profile:", error);
    //         toast.error("Failed to update profile. Please try again.");
    //       }
    //     }
    //   };

    const [photo, setPhoto] = useState<File | null>(null);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setPhoto(file);  // Update the state with the selected file
  };
    const onSubmit: SubmitHandler<TFormData> = async (data) => {
        const { name, email, phone, photo } = data;
        const photoName = photo instanceof File ? photo?.name : null;
        console.log(photoName);
    
        try {
          if (singleUser) {
            const updatedData = {
              name,
              email,
              phone,
              photo: photoName,
            };
            await UpdateProfile({ userId: singleUser._id, userInfo: updatedData });
            toast.success("Profile updated successfully");
          }
        } catch (error: any) {
          if (error.message.includes('duplicate key error')) {
            toast.error("This is not your email.");
          } else {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again.");
          }
        }
      };


  

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
                </div>
                <div className="w-full lg:w-2/3">
                    {activeSidebar === 1 && (
                    <Card className="content-1 px-5 py-8">
                        <h1 className="text-[#000000] text-xl font-medium">Personal Details</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="flex items-center justify-between gap-10 mt-3">
                            <div className="w-full">
                              <Label className="text-[#595959] text-base font-semibold">Full Name</Label>
                              <Input
                                className="mt-1 py-6 w-full"
                                type="text"
                                placeholder="e.g., Jhon Doe"
                                {...register('name', { required: 'Full name is required' })}
                              />
                              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                            </div>
                            <div className="w-full">
                              <Label className="text-[#595959] text-base font-semiFbold">Email Address</Label>
                              <Input
                                className="mt-1 py-6 w-full text-[#7E7E7E]"
                                type="email"
                                defaultValue={singleUser?.email}
                                placeholder="e.g., example@gmail.com"
                                {...register('email', {
                                  required: 'Email is required',
                                  pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: 'Invalid email address',
                                  },
                                })}
                              />
                              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>
                          </div>
                          <div className="w-full lg:w-[47%] mt-4">
                            <Label className="text-[#595959] text-base font-semibold">Phone Number</Label>
                            <Input
                              className="mt-1 py-6 w-full text-[#7E7E7E]"
                              type="text"
                              placeholder="e.g., +880 ...."
                              {...register('phone', { required: 'Phone number is required' })}
                            />
                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                          </div>
                          <div className="mt-4 flex gap-5 items-center justify-start">
                            <img
                              className="w-[188px] h-[129px] rounded-md"
                              src="https://i.ibb.co.com/68v5tCz/input.webp"
                              alt="Input Image"
                            />
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="photo">Upload your logo</Label>
                              <Input id="photo" type="file" onChange={handleFileChange} />
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <Button className="mt-5 bg-[#4406CB] text-white" type="submit">
                              Save Settings
                            </Button>
                          </div>
                        </form>
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
                        <h1 className="mb-5 text-[#000000] text-xl font-semibold flex items-center gap-1">System-Wide Configurations</h1>
                        <div className="flex items-center justify-between gap-10 mt-3">
                        <div className="w-full">
                          <label className="text-[#3B3B3B] text-base font-semibold mb-2 block">
                            System Timezone
                          </label>
                          <Select>
                            <SelectTrigger className="w-full text-[#7E7E7E] text-sm">
                              <SelectValue placeholder="e.g., GMT+0" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="UTC+0">UTC (Coordinated Universal Time)</SelectItem>
                              <SelectItem value="GMT+0">GMT (Greenwich Mean Time)</SelectItem>
                              <SelectItem value="UTC-8">PST (Pacific Standard Time)</SelectItem>
                              <SelectItem value="UTC-5">EST (Eastern Standard Time)</SelectItem>
                              <SelectItem value="UTC-6">CST (Central Standard Time)</SelectItem>
                              <SelectItem value="UTC-7">MST (Mountain Standard Time)</SelectItem>
                              <SelectItem value="UTC+5:30">IST (Indian Standard Time)</SelectItem>
                              <SelectItem value="UTC+1">BST (British Summer Time)</SelectItem>
                              <SelectItem value="UTC+10">AEST (Australian Eastern Standard Time)</SelectItem>
                              <SelectItem value="UTC+9">JST (Japan Standard Time)</SelectItem>
                              <SelectItem value="UTC+9">KST (Korea Standard Time)</SelectItem>
                              <SelectItem value="UTC+12">NZST (New Zealand Standard Time)</SelectItem>
                              <SelectItem value="UTC+8">HKT (Hong Kong Time)</SelectItem>
                              <SelectItem value="UTC+9:30">ACST (Australian Central Standard Time)</SelectItem>
                              <SelectItem value="UTC+5:45">NPT (Nepal Time)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="w-full">
                          <label className="text-[#3B3B3B] text-base font-semibold mb-2 block">
                            Default Language
                          </label>
                          <Select>
                            <SelectTrigger className="w-full text-[#7E7E7E] text-sm">
                              <SelectValue placeholder="e.g., English" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                              <SelectItem value="zh">Chinese</SelectItem>
                              <SelectItem value="ja">Japanese</SelectItem>
                              <SelectItem value="ko">Korean</SelectItem>
                              <SelectItem value="hi">Hindi</SelectItem>
                              <SelectItem value="ar">Arabic</SelectItem>
                              <SelectItem value="ru">Russian</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        </div>

                        <div className="mt-7 flex items-center justify-between gap-10">
                            <div className="w-full">
                                <p className="text-[#3B3B3B] text-base font-semibold flex items-center gap-2 justify-start">Enable System Alerts <span className="bg-[#BFBFBF] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></p>
                                <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                                  <Switch id="airplane-mode" />
                                </div>
                            </div>
                            <div className="w-full">
                                <p className="text-[#3B3B3B] text-base font-semibold flex items-center gap-2 justify-start">Enable User Activity Notifications <span className="bg-[#BFBFBF] text-xs text-white py-[1px] px-[8px] rounded-full"> i</span></p>
                                <div className="flex items-center space-x-2 mt-3 text-[#BE62FA]">
                                  <Switch id="airplane-mode" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-10 mt-7">
                            <div className="w-full lg:w-[48%] md:w-[50%]">
                                <Label className="text-[#595959] text-base font-semibold ">API Key</Label>
                                <Input className="mt-1 py-6" type="text" placeholder="e.g., 65jkmn584" />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button className="mt-5 bg-[#4406CB] text-white">Save Settings</Button>
                        </div>
                    </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;