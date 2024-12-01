/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";
import { CircleDollarSign, Filter, Share, TrendingUp, TriangleAlert } from "lucide-react";
import { FaEllipsis, FaUser, FaUsers } from "react-icons/fa6";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { usePDF } from "react-to-pdf";
import ResellerDetails from "./ResellerDetails";
import { useGetCountTotalActivePremiumUsersQuery, useGetLowCreditResellersQuery, useGetTotalAvailableCreditsQuery, useGetTotalPremiumUsersForAllResellerQuery, useGetTotalResellersQuery } from "@/pages/redux/features/admin/AdminResellerManagement/AdminResellerManagementApi";
import { useState } from "react";

const ResellerManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getTotalResellers} = useGetTotalResellersQuery(undefined)
    const {data: getLowCreditResellers} = useGetLowCreditResellersQuery(undefined)
    const {data: GetCountTotalActivePremiumUsers} = useGetCountTotalActivePremiumUsersQuery(undefined)
    const {data: getTotalAvailableCredits} = useGetTotalAvailableCreditsQuery(undefined)
    const {data: getTotalPremiumUsersForAllReseller} = useGetTotalPremiumUsersForAllResellerQuery(undefined)
    // console.log(getTotalPremiumUsersForAllReseller);

    // Filter States
  const [filters, setFilters] = useState({
    resellerName: "",
    resellerId: "",
    totalPremiumUsers: "",
    resellerCredit: "",
  });

  // Filter Handler
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // Apply Filters
  const filteredUsers = getTotalPremiumUsersForAllReseller?.data?.filter((user: any) => {
    return (
      (!filters.resellerName || user.resellerName?.toLowerCase().includes(filters.resellerName.toLowerCase())) &&
      (!filters.resellerId || user.resellerId?.toString().includes(filters.resellerId)) &&
      (!filters.resellerCredit || user.resellerCredit?.toString().includes(filters.resellerCredit)) &&
      (!filters.totalPremiumUsers || user.totalPremiumUsers?.toString() === filters.totalPremiumUsers)
    );
  })


    // Reset Filters
    const handleFilterReset = () => {
      setFilters({
        resellerName: "",
        resellerId: "",
        totalPremiumUsers: "",
        resellerCredit: "",
      });
    };


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <FaUser className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaUser>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Total Reseller</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getTotalResellers?.totalResellers}</h1>
                                <p className="text-[#1E1E1E] text-base">Active Reseller</p>
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
                                    <FaUsers className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaUsers>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Total Users</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{GetCountTotalActivePremiumUsers?.data?.totalActivePremiumUsers}</h1>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                        <p className="text-[#1E1E1E] text-base">Users managed by resellers</p>
                    </Card>
                </div>
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <CircleDollarSign className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></CircleDollarSign>
                                 
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Available Credits</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getTotalAvailableCredits?.totalCredits}</h1>
                                <p className="text-[#1E1E1E] text-base">Total credit available</p>
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
                                    <TriangleAlert className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></TriangleAlert>
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Low Credit</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="px-1 mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getLowCreditResellers?.lowCreditResellers?.length} <span className="text-[#2B2D42] font-bold text-xl">Resellers</span></h1>
                                <p className="text-[#1E1E1E] text-[15px]">less than 500 credit</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="my-6">
                <h1 className="text-[#2B2D42] text-lg font-medium">Search Filters</h1>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-5">
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("resellerName", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Reseller Name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Reseller Name</SelectLabel>
                              {getTotalPremiumUsersForAllReseller?.data?.map((user: any) => (
                                <SelectItem key={user?.resellerName} value={user?.resellerName}>
                                  {user?.resellerName}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("resellerId", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Reseller ID" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Reseller ID</SelectLabel>
                              {getTotalPremiumUsersForAllReseller?.data?.map((user: any) => (
                                <SelectItem key={user?.resellerId} value={user?.resellerId}>
                                  {user?.resellerId}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("resellerCredit", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Credit Balance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Credit Balance</SelectLabel>
                              {getTotalPremiumUsersForAllReseller?.data?.map((user: any) => (
                                <SelectItem key={user?.resellerCredit} value={user?.resellerCredit}>
                                  {user?.resellerCredit}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("totalPremiumUsers", value)}>
                          <SelectTrigger className="w-[200px] text-base">
                            <SelectValue placeholder="Total user managed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Total user managed</SelectLabel>
                              {getTotalPremiumUsersForAllReseller?.data?.map((user: any) => (
                                <SelectItem key={user?.totalPremiumUsers} value={user?.totalPremiumUsers}>
                                  {user?.totalPremiumUsers}
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
            <div className="mb-3 flex items-center justify-end">
                <Button onClick={() => toPDF()} variant="outline" className=" text-sm ml-5">
                <div className="">
                    <Share></Share>
                </div>Export</Button>
            </div>

            <div className="" ref={targetRef}>
                <Card>
                    <div className="p-3">
                        <Table>
                          <TableCaption>A list of your reseller management.</TableCaption>
                          <TableHeader className="bg-[#F0F4FA]">
                            <TableRow className="border-b border-[#DBDADE]">
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Reseller Name
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Reseller ID
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Total User
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Credit Balances</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredUsers?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="font-medium">{list?.resellerName}</TableCell>
                                <TableCell>{list?.resellerId}</TableCell>
                                <TableCell>{list?.totalPremiumUsers}</TableCell>
                                <TableCell>{list?.resellerCredit}</TableCell>
                                <TableCell className="">
                                    <ResellerDetails list={list}></ResellerDetails>
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

export default ResellerManagement;