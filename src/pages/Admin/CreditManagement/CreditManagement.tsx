/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
  } from "@/components/ui/card"
import {  CircleDollarSign, DollarSign, Filter, Share, TrendingUp, TriangleAlert } from "lucide-react";
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
import moment from "moment";
import { usePDF } from 'react-to-pdf';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import GenerateCredit from "./GenerateCredit";
import { useCountPendingRequestCreditsQuery, useGetAllCreditQuery, useGetAllRequestsQuery, useGetMonthlyCreditSummaryQuery, useTransferCreditToResellerMutation } from "@/pages/redux/features/admin/creditManagement/CreditManagementApi";
import { useState } from "react";
import { toast } from "sonner";


const CreditManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getAllCredit} = useGetAllCreditQuery(undefined)
    const {data: getAllRequests} = useGetAllRequestsQuery(undefined)
    const {data: getCountPendingRequestCredits} = useCountPendingRequestCreditsQuery(undefined)
    const {data: getMonthlyCreditSummary} = useGetMonthlyCreditSummaryQuery(undefined)
    const [transferCreditToReseller] = useTransferCreditToResellerMutation()

    // console.log(getAllRequests?.data);

  // Filter States
  const [filters, setFilters] = useState({
    userId: "",
    resellerName: "",
    creditAmount: "",
    status: "",
  });

  // Filter change Handler
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  //filter functionality
  const filteredUsers = getAllRequests?.data?.filter((user: any) => {
    return (
      (!filters.userId || user?._id?.toString()?.includes(filters.userId)) &&
      (!filters.resellerName || user?.resellerId?.name?.includes(filters.resellerName)) &&
      (!filters.creditAmount || user?.creditAmount?.toString()?.includes(filters.creditAmount)) &&
      (!filters.status || user?.status?.includes(filters.status))
    );
  });

    // Reset Filters
    const handleFilterReset = () => {
      setFilters({
        userId: "",
        resellerName: "",
        creditAmount: "",
        status: ""
      });
    };

    //handle transfer credit to reseller
    const handleTransferCreditToReseller = async (requestId: any) => {
      const toastId = toast.loading("Transfer Credit");
      try {
         await transferCreditToReseller({ requestId }).unwrap();
        toast.success("Credit Transfer Successfully!", { id: toastId, duration: 2000 });
      } catch (error: any) {
        toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      }
    }
    


    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <DollarSign className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></DollarSign>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Credits Generated</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getAllCredit?.data?.[0]?.totalCredit}</h1>
                                <p className="text-[#1E1E1E] text-base">Created Credits</p>
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
                                    <FaShare className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></FaShare>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Credits Transferred</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getMonthlyCreditSummary?.data?.[0]?.totalTransferred}</h1>
                                <p className="text-[#1E1E1E] text-base">credits Assigned</p>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getAllCredit?.data?.[0]?.availableCredit}</h1>
                                <p className="text-[#1E1E1E] text-base">Remaining Credits</p>
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
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Credit Requests</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="px-1 mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getCountPendingRequestCredits?.data?.pendingRequestCount}</h1>
                                <p className="text-[#1E1E1E] text-[15px]">Request Awaiting</p>
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
                <h1 className="text-[#3A354161] text-lg font-medium">Search by reseller</h1>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-5">
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("userId", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Search by UserId" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>User ID</SelectLabel>
                              {getAllRequests?.data?.map((user: any) => (
                                <SelectItem key={user._id} value={user._id}>
                                  {user?._id}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("resellerName", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Assigned To" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Assigned To</SelectLabel>
                              {getAllRequests?.data?.map((user: any) => (
                                <SelectItem key={user._id} value={user.resellerId?.name}>
                                  {user.resellerId?.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("creditAmount", value)}>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Credit Amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Credit Amount</SelectLabel>
                              {getAllRequests?.data?.map((user: any) => (
                                <SelectItem key={user._id} value={user?.creditAmount}>
                                  {user?.creditAmount}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select onValueChange={(value) => handleFilterChange("status", value)}>
                          <SelectTrigger className="w-[180px] text-base">
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
                    <div className="xl:flex xl:place-content-end">
                        <Button onClick={handleFilterReset} className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Reset Filter</Button>
                    </div>
                </div>
            </div>
         
            <div className="mb-7 flex items-center justify-end">
                <GenerateCredit></GenerateCredit>
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
                                Transaction ID
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
                                Assigned To
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Status</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredUsers?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="font-medium">{list?._id}</TableCell>
                                <TableCell className="font-medium">{list?.transactionId}</TableCell>
                                <TableCell>{moment(new Date(`${list?.createdAt}`)).format('DD MMMM YYYY') || "N/A"}</TableCell>
                                <TableCell>+ {list?.creditAmount}</TableCell>
                                <TableCell>{list?.resellerId?.name}</TableCell>
                                <TableCell>{list?.status}</TableCell>
                                <TableCell className="">
                                    <FaEllipsis onClick={() => handleTransferCreditToReseller(list?._id)} className="text-right w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
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

export default CreditManagement;


