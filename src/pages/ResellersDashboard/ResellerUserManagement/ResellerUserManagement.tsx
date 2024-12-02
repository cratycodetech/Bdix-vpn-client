/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDownToLine, EllipsisVertical, Filter, Newspaper, Share, Trash2, TrendingUp, UserRoundX } from "lucide-react";
import { usePDF } from "react-to-pdf";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import EditResellerUser from "./EditResellerUser";
import ResellerUserDetails from "./ResellerUserDetails";
import { useGetTotalUsersQuery } from "@/pages/redux/features/reseller/resellerDashboard/ResellerDashboardApi";
import { useGetTotalPremiumUsersForAllResellerQuery } from "@/pages/redux/features/admin/AdminResellerManagement/AdminResellerManagementApi";
import { useState } from "react";
import { toast } from "sonner";
import { useUpdateSubscriptionStatusMutation } from "@/pages/redux/features/admin/PremiumUser/PremiumUserApi";


const ResellerUserManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getTotalUsers} = useGetTotalUsersQuery(undefined)
    const {data: getTotalReseller} = useGetTotalPremiumUsersForAllResellerQuery(undefined)
    const [updateSubscriptionStatus] = useUpdateSubscriptionStatusMutation()

    // Connect Premium Users with Users
    const combinedUserData = getTotalUsers?.data?.map((premiumUser: any) => {
      const resellerDetails = getTotalReseller?.data?.find(
        (reseller: any) => reseller?.resellerId === premiumUser?.resellerReference
      );
      return {
          ...premiumUser,
          ...resellerDetails
      };
    });

  // Filter States
  const [filters, setFilters] = useState({
    userId: "",
    email: "",
    userType: "",
    resellerReference: "",
  });

    // Filter change Handler
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  //filter functionality
  const filteredUsers = combinedUserData?.filter((user: any) => {
    return (
      (!filters.userId || user._id?.toString()?.includes(filters.userId)) &&
      (!filters.email || user?.userId?.email?.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.userType || user.userType === filters.userType) &&
      (!filters.resellerReference || user?.resellerName?.includes(filters.resellerReference))
    );
  });

    // Reset Filters
    const handleFilterReset = () => {
      setFilters({
        userId: "",
        email: "",
        userType: "",
        resellerReference: "",
      });
    };

    // Handle Subscription Update
    const handleUpdateStatus = async (userId: string) => {
      console.log(userId);
      try {
        const response = await updateSubscriptionStatus(userId).unwrap();

        toast.success("Subscription status updated successfully!");
        console.log("Subscription status updated successfully:", response.message);
      } catch (error) {
        toast.error("Failed to update subscription status. Please try again.");
        console.error("Error updating subscription status:", error);
      }
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-[#000000] text-2xl font-medium mb-2">1000 User ? 500 Guest User ? Premium User</h1>
                    <div className="bg-[#405F1F4D] w-[110px] text-[#395917] px-1 text-sm rounded-lg flex items-center gap-1">
                        <TrendingUp className="w-[15px]"></TrendingUp>
                        <p className="font-medium">+3 new user</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center gap-5">
                    <Input className="rounded-full py-5" type="search" placeholder="Search" />
                    <div className="border-r-2 border-[#3B3B3B] pr-5">
                    <Card className="p-2">
                        <EllipsisVertical className=""></EllipsisVertical>
                    </Card>
                    </div>
                    <Card className="p-2">
                        <ArrowDownToLine className=""></ArrowDownToLine>
                    </Card>
                    <Card className="p-2">
                        <Newspaper className=""></Newspaper>
                    </Card>
                </div>

            </div>

            <div className="my-6">
                <h1 className="text-[#2B2D42] text-lg font-medium">Search Filters</h1>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-5">
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("userId", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="User Id" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User Id</SelectLabel>
                              {combinedUserData?.map((user: any) => (
                                <SelectItem key={user._id} value={user._id}>
                                  {user?._id}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("email", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="User Email" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User Email</SelectLabel>
                              {combinedUserData?.map((user: any) => (
                                <SelectItem key={user._id} value={user?.userId?.email}>
                                  {user?.userId?.email}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("userType", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="User Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User Type</SelectLabel>
                                <SelectItem value="Normal">Normal</SelectItem>
                                <SelectItem value="Premium">Premium</SelectItem>
                                <SelectItem value="Guest">Guest</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("resellerReference", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Reseller Reference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Reseller Reference</SelectLabel>
                              {combinedUserData?.map((user: any) => (
                                <SelectItem key={user._id} value={user?.resellerName}>
                                  {user?.resellerName}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className="xl:flex xl:place-content-end">
                        <Button onClick={handleFilterReset} className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Reset Filter</Button>
                    </div>
                </div>
            </div>

            <div className="mb-2 flex items-center justify-end">
                <Button onClick={() => toPDF()} variant="outline" className=" text-sm ml-5">
                <div className="">
                    <Share></Share>
                </div>Export</Button>
            </div>

            <div className="" ref={targetRef}>
                <Card>
                    <div className="p-3">
                        <Table>
                          <TableCaption>A list of your user management.</TableCaption>
                          <TableHeader className="bg-[#F0F4FA]">
                            <TableRow className="border-b border-[#DBDADE]">
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                User ID
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Email
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                User Type
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Subscription Status
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                  Subscription Type
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                  Credits
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Reseller Reference
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base text-center">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredUsers?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="font-medium">{list?._id}</TableCell>
                                <TableCell>{list?.userId?.email}</TableCell>
                                <TableCell>{list?.userType}</TableCell>
                                <TableCell>{list?.subscriptionStatus || "N/A"}</TableCell>
                                <TableCell>{list?.subscriptionType || "N/A"}</TableCell>
                                <TableCell>{list?.credits}</TableCell>
                                <TableCell>{list?.resellerName || "N/A"}</TableCell>
                                <TableCell className="">
                                  <div className="flex gap-2 items-center justify-center">
                                    <ResellerUserDetails list={list}></ResellerUserDetails>
                                    <EditResellerUser></EditResellerUser>
                                    <UserRoundX onClick={() => handleUpdateStatus(list?.userId?._id)} className="w-[25px] h-[25px] text-[#1E1E1E]"/>
                                    </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                    </div>
             
                </Card>
            </div>
        </div>
    );
};

export default ResellerUserManagement;