import { Card } from "@/components/ui/card";
import { CircleDollarSign, Filter, TrendingUp, TriangleAlert } from "lucide-react";
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


const ResellerManagement = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});


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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">75</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">3,250</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">15,000</h1>
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">5 <span className="text-[#2B2D42] font-bold text-xl">Resellers</span></h1>
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
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Reseller Name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Reseller Name</SelectLabel>
                              <SelectItem value="reseller-1">reseller-1</SelectItem>
                              <SelectItem value="reseller-2">reseller-2</SelectItem>
                              <SelectItem value="reseller-3">reseller-3</SelectItem>
                              <SelectItem value="reseller-4">reseller-4</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Reseller ID" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Reseller ID</SelectLabel>
                              <SelectItem value="ID-1">ID-1</SelectItem>
                              <SelectItem value="ID-2">ID-2</SelectItem>
                              <SelectItem value="ID-3">ID-3</SelectItem>
                              <SelectItem value="ID-4">ID-4</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Credit Balance" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Credit Balance</SelectLabel>
                              <SelectItem value="150">150</SelectItem>
                              <SelectItem value="200">200</SelectItem>
                              <SelectItem value="250">250</SelectItem>
                              <SelectItem value="300">300</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[200px] text-base">
                            <SelectValue placeholder="Total user managed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Total user managed</SelectLabel>
                              <SelectItem value="150">150</SelectItem>
                              <SelectItem value="200">200</SelectItem>
                              <SelectItem value="250">250</SelectItem>
                              <SelectItem value="300">300</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div className="xl:flex xl:place-content-end">
                        <Button className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Apply Filter</Button>
                    </div>
                </div>
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
                                User Name
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
                            {invoices.map((invoice) => (
                              <TableRow key={invoice.invoice}>
                                <TableCell className="font-medium">Ron</TableCell>
                                <TableCell>{invoice.invoice}</TableCell>
                                <TableCell>{invoice.paymentMethod}</TableCell>
                                <TableCell>150</TableCell>
                                <TableCell className="">
                                    <ResellerDetails></ResellerDetails>
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