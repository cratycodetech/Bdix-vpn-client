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
import UserDetails from "./UserDetails";
import EditUser from "./EditUser";
import { useGetAllPremiumUserQuery, useUpdateSubscriptionStatusMutation } from "@/pages/redux/features/admin/PremiumUser/PremiumUserApi";
import { useGetAllUsersQuery } from "@/pages/redux/features/admin/adminUserManagement/adminUserManagementApi";
import { useState } from "react";
import { toast } from "sonner";

const UserManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getAllPremiumUser} = useGetAllPremiumUserQuery(undefined)
    const {data: getAllUser} = useGetAllUsersQuery(undefined)
    const [updateSubscriptionStatus] = useUpdateSubscriptionStatusMutation();

     // Connect Premium Users with Users
     const combinedUserData = getAllPremiumUser?.data?.map((premiumUser: any) => {
      const userDetails = getAllUser?.data?.find(
          (user: any) => user?._id === premiumUser?.userId
      );
      const resellerDetails = getAllUser?.data?.find(
        (user: any) => user?._id === premiumUser?.resellerReference
      );
      return {
          ...premiumUser,
          ...userDetails,
          resellerDetails
      };
    });

  // Filter States
  const [filters, setFilters] = useState({
    userId: "",
    email: "",
    subscriptionStatus: "",
    resellerReference: "",
  });

  // Filter Handler
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Apply Filters
  const filteredUsers = combinedUserData?.filter((user: any) => {
    return (
      (!filters.userId || user.userId?.includes(filters.userId)) &&
      (!filters.email || user.email?.includes(filters.email)) &&
      (!filters.subscriptionStatus ||
        user.subscriptionStatus === filters.subscriptionStatus) &&
      (!filters.resellerReference ||
        user.resellerReference?.includes(filters.resellerReference))
    );
  });

    // Reset Filters
    const handleFilterReset = () => {
      setFilters({
        userId: "",
        email: "",
        subscriptionStatus: "",
        resellerReference: "",
      });
    };


    // Handle Subscription Update
    const handleUpdateStatus = async (userId: string) => {
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
                    <h1 className="text-[#000000] text-2xl font-medium mb-2">{getAllPremiumUser?.data?.length} Premium User</h1>
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

            {/* <div className="my-6">
                <h1 className="text-[#2B2D42] text-lg font-medium">Search Filters</h1>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-5">
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="User ID" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User ID</SelectLabel>
                              <SelectItem value="userId-1">userId-1</SelectItem>
                              <SelectItem value="userId-2">userId-2</SelectItem>
                              <SelectItem value="userId-3">userId-3</SelectItem>
                              <SelectItem value="userId-4">userId-4</SelectItem>
                              <SelectItem value="userId-5">userId-5</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="User Email" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User Email</SelectLabel>
                              <SelectItem value="email1">email1</SelectItem>
                              <SelectItem value="email2">email2</SelectItem>
                              <SelectItem value="email3">email3</SelectItem>
                              <SelectItem value="email4">email4</SelectItem>
                              <SelectItem value="email5">email5</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Subscription Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Subscription Status</SelectLabel>
                              <SelectItem value="Active">Active</SelectItem>
                              <SelectItem value="In Active">In Active</SelectItem>
                              <SelectItem value="Expired">Expired</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Reseller Reference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Reseller Reference</SelectLabel>
                              <SelectItem value="#2145JKI">#2145JKI</SelectItem>
                              <SelectItem value="#2185JKI">#2185JKI</SelectItem>
                              <SelectItem value="#2385JKI">#2385JKI</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className="xl:flex xl:place-content-end">
                        <Button className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Apply Filter</Button>
                    </div>
                </div>
            </div> */}
            <div className="my-6">
              <h1 className="text-[#2B2D42] text-lg font-medium">Search Filters</h1>
              <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-5">
                <div>
                  <Select onValueChange={(value) => handleFilterChange("userId", value)}>
                    <SelectTrigger className="w-[180px] text-base">
                      <SelectValue placeholder="User ID" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>User ID</SelectLabel>
                        {combinedUserData?.map((user: any) => (
                          <SelectItem key={user.userId} value={user.userId}>
                            {user?.userId}
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
                          <SelectItem key={user.email} value={user.email}>
                            {user.email}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("subscriptionStatus", value)
                    }
                  >
                    <SelectTrigger className="w-[180px] text-base">
                      <SelectValue placeholder="Subscription Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Subscription Status</SelectLabel>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="In Active">In Active</SelectItem>
                        <SelectItem value="Expired">Expired</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("resellerReference", value)
                    }
                  >
                    <SelectTrigger className="w-[180px] text-base">
                      <SelectValue placeholder="Reseller Reference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Reseller Reference</SelectLabel>
                        {combinedUserData?.map((user: any) => (
                          <SelectItem key={user.resellerReference} value={user.resellerReference}>
                            {user.resellerReference}
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

            <div className="mb-7 flex items-center justify-end">
                
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
                                Subscription Status
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
                                        <TableCell className="font-medium">{list.userId}</TableCell>
                                        <TableCell>{list?.email || "N/A"}</TableCell>
                                        <TableCell>{list?.subscriptionStatus || "N/A"}</TableCell>
                                        <TableCell>{list?.credits}</TableCell>
                                        <TableCell>{list?.resellerReference || "N/A"}</TableCell>
                                        <TableCell className="flex gap-1 items-center justify-center">
                                            <UserDetails list={list} />
                                            <EditUser list={list}/>
                                            <UserRoundX
                                                onClick={() => handleUpdateStatus(list._id)}
                                                className="w-[25px] h-[25px] text-[#1E1E1E]"
                                            />
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

export default UserManagement;