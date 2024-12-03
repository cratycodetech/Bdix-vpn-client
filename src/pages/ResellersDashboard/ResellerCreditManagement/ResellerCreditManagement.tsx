/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card} from "@/components/ui/card"
import { CircleDollarSign, Filter, Share, TrendingUp } from "lucide-react";
import { FaEllipsis, FaShare } from "react-icons/fa6";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useDeleteServerMutation } from "@/pages/redux/features/admin/serverMonitoring/serverMonitoringApi";
import { usePDF } from 'react-to-pdf';
import Swal from 'sweetalert2'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import RequestCredits from "./RequestCredits";
import { useGetAllUserCreditRequestQuery } from "@/pages/redux/features/reseller/resellerCreditManagement/ResellerCreditManagementApi";
import moment from "moment";
import { useAppSelector } from "@/pages/redux/hook";
import { useCurrentUser } from "@/pages/redux/features/auth/authSlice";
import { useGetSingleResellerAvailableCreditQuery } from "@/pages/redux/features/admin/AdminResellerManagement/AdminResellerManagementApi";
import { useState } from "react";



const ResellerCreditManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getAllUserCreditRequest} = useGetAllUserCreditRequestQuery(undefined)
    const currentUser = useAppSelector(useCurrentUser)
    const {data: getSingleResellerAvailableCredit} = useGetSingleResellerAvailableCreditQuery(currentUser?.email)

    console.log(getAllUserCreditRequest);

    // Filter States
  const [filters, setFilters] = useState({
    userId: "",
    creditAmount: "",
    status: "",
  });

    // Filter change Handler
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  //filter functionality
  const filteredUsers = getAllUserCreditRequest?.data?.filter((user: any) => {
    return (
      (!filters.userId || user?.userId?.toString()?.includes(filters.userId)) &&
      (!filters.creditAmount || user?.creditAmount?.toString()?.includes(filters.creditAmount)) &&
      (!filters.status || user?.status?.includes(filters.status))
    );
  });

    // Reset Filters
    const handleFilterReset = () => {
      setFilters({
        userId: "",
        creditAmount: "",
        status: ""
      });
    };



    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <FaShare className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaShare>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Total Credit</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getSingleResellerAvailableCredit?.totalCredit}</h1>
                                <p className="text-[#1E1E1E] text-base">Created credits</p>
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
                                    <CircleDollarSign className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></CircleDollarSign>
                                 
                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Available Balance</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getSingleResellerAvailableCredit?.availableCredit}</h1>
                                <p className="text-[#1E1E1E] text-base">Remaining Credits</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">20%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="my-6">
                <h1 className="text-[#3A354161] text-lg font-medium">Search by reseller</h1>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 items-center justify-between gap-5">
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("userId", value)}>
                          <SelectTrigger className="w-[200px] text-base">
                            <SelectValue placeholder="Search by User ID" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User ID</SelectLabel>
                              {getAllUserCreditRequest?.data?.map((user: any) => (
                                <SelectItem key={user._id} value={user.userId}>
                                  {user?.userId}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("creditAmount", value)}>
                          <SelectTrigger className="w-[200px] text-base">
                            <SelectValue placeholder="Credit Amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Credits</SelectLabel>
                              {getAllUserCreditRequest?.data?.map((user: any) => (
                                <SelectItem key={user._id} value={user.creditAmount}>
                                  {user?.creditAmount}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("status", value)}>
                          <SelectTrigger className="w-[200px] text-base">
                            <SelectValue placeholder="Credit Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                                <SelectItem value="pending">pending</SelectItem>
                                <SelectItem value="done">done</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className="xl:flex lg:flex lg:place-content-end xl:place-content-end">
                        <Button onClick={handleFilterReset} className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Reset Filter</Button>
                    </div>
                </div>
            </div>
         
            <div className="mb-7 flex items-center justify-end">
                <RequestCredits></RequestCredits>
                <Button onClick={() => toPDF()} variant="outline" className=" text-sm ml-5">
                <div className="">
                    <Share></Share>
                </div>Export</Button>
            </div>

            <div className="" ref={targetRef}>
                <Card>
                    <div className="p-3">
                        <Table>
                          <TableCaption>A list of your credit management.</TableCaption>
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
                                    Date
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                      credit Amount
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                      Status
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Request To
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              {/* <TableHead className="text-[#000000] font-medium text-base text-center">Request Credit</TableHead> */}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredUsers?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="font-medium">{list?.userId}</TableCell>
                                <TableCell className="font-medium">
                                      {moment(new Date(`${list?.updatedAt}`)).format('DD MMMM YYYY') || "N/A"}
                                </TableCell>
                                <TableCell>{list?.creditAmount}</TableCell>
                                <TableCell>{list?.status}</TableCell>
                                <TableCell>{list?.requestTo}</TableCell>
                                {/* <TableCell className="text-center flex items-center justify-center">
                                    <FaEllipsis className="text-right w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                                </TableCell> */}
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

export default ResellerCreditManagement;


