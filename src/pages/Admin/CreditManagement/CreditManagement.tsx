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
import GenerateCredit from "./GenerateCredit";
import { useCountPendingRequestCreditsQuery, useGetAllCreditQuery, useGetAllRequestsQuery, useGetMonthlyCreditSummaryQuery } from "@/pages/redux/features/admin/creditManagement/CreditManagementApi";


const CreditManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getAllCredit} = useGetAllCreditQuery(undefined)
    const {data: getAllRequests} = useGetAllRequestsQuery(undefined)
    const {data: getCountPendingRequestCredits} = useCountPendingRequestCreditsQuery(undefined)
    const {data: getMonthlyCreditSummary} = useGetMonthlyCreditSummaryQuery(undefined)
    console.log(getMonthlyCreditSummary?.data);
    

    //handle delete
    const handleDelete = async(id: string) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async(result) => {
        if (result.isConfirmed) {
          await deleteServer(id).unwrap();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getAllCredit?.data?.[0]?.credit}</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getAllCredit?.data?.[0]?.totalCredit}</h1>
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
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Search by reseller" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Resellers</SelectLabel>
                              <SelectItem value="reseller1">reseller1</SelectItem>
                              <SelectItem value="reseller2">reseller2</SelectItem>
                              <SelectItem value="reseller3">reseller3</SelectItem>
                              <SelectItem value="reseller4">reseller4</SelectItem>
                              <SelectItem value="reseller5">reseller5</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Credit Issued" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Credits</SelectLabel>
                              <SelectItem value="reseller1">reseller1</SelectItem>
                              <SelectItem value="reseller2">reseller2</SelectItem>
                              <SelectItem value="reseller3">reseller3</SelectItem>
                              <SelectItem value="reseller4">reseller4</SelectItem>
                              <SelectItem value="reseller5">reseller5</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Credit Transferred" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Credit Transferred</SelectLabel>
                              <SelectItem value="reseller1">reseller1</SelectItem>
                              <SelectItem value="reseller2">reseller2</SelectItem>
                              <SelectItem value="reseller3">reseller3</SelectItem>
                              <SelectItem value="reseller4">reseller4</SelectItem>
                              <SelectItem value="reseller5">reseller5</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Assigned To" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Assigned To</SelectLabel>
                              <SelectItem value="reseller1">reseller1</SelectItem>
                              <SelectItem value="reseller2">reseller2</SelectItem>
                              <SelectItem value="reseller3">reseller3</SelectItem>
                              <SelectItem value="reseller4">reseller4</SelectItem>
                              <SelectItem value="reseller5">reseller5</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className="xl:flex xl:place-content-end">
                        <Button className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Apply Filter</Button>
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
                              <TableHead className="text-[#000000] font-medium text-base">balance After</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getAllRequests?.data?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="font-medium">{list?.transactionId}</TableCell>
                                <TableCell>{moment(new Date(`${list?.createdAt}`)).format('DD MMMM YYYY') || "N/A"}</TableCell>
                                <TableCell>+ {list?.creditAmount}</TableCell>
                                <TableCell>{list?.resellerId?.name}</TableCell>
                                <TableCell>{list.paymentMethod}</TableCell>
                                <TableCell className="">
                                    <FaEllipsis className="text-right w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
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


