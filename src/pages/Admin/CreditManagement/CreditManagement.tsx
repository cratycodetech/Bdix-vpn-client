/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
  } from "@/components/ui/card"
import {  CircleDollarSign, DollarSign, RefreshCcw, Share, Trash2, TrendingUp, TriangleAlert } from "lucide-react";
import { FaEllipsis, FaShare } from "react-icons/fa6";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useDeleteServerMutation, useGetAllServerQuery } from "@/pages/redux/features/admin/serverMonitoring/serverMonitoringApi";
import moment from "moment";
import { usePDF } from 'react-to-pdf';
import Swal from 'sweetalert2'
import AddServer from "../ServerMonitoring/AddServer";
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

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

const CreditManagement = () => {
    const {data: getAllServer} = useGetAllServerQuery(undefined)
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const [deleteServer] = useDeleteServerMutation()

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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">10,000</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">7,500</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">2,500</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">5</h1>
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
                              <TableHead className="text-[#000000] font-medium text-base">Transaction ID</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Date</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">credit Amount</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Assigned To</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">balance After</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {invoices.map((invoice) => (
                              <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentStatus}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
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


