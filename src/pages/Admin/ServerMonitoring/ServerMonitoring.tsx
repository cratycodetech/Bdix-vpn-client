import {
    Card,
  } from "@/components/ui/card"
import {  Cpu, Hourglass, Share, TrendingUp } from "lucide-react";
import { FaEllipsis } from "react-icons/fa6";
import { LiaServerSolid } from "react-icons/lia";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import AddServer from "./AddServer";
   
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

  ]



const ServerMonitoring = () => {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <LiaServerSolid className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></LiaServerSolid>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Active Servers</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">12</h1>
                                <p className="text-[#1E1E1E] text-base">Total active servers</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.6%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <Hourglass className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></Hourglass>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Active Sessions</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">345</h1>
                                <p className="text-[#1E1E1E] text-base">Total active sessions</p>
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
                                    <Cpu className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></Cpu>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">CPU Load</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">65%</h1>
                                <p className="text-[#1E1E1E] text-base">Current CPU Load</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">20%</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    <Card className="py-4">
                        <div className="px-3 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <Cpu className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></Cpu>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Bandwidth Usage</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="px-1 mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">75%</h1>
                                <p className="text-[#1E1E1E] text-[15px]">Current bandwidth usage</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] px-1 text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="my-8 flex flex-col lg:flex-row gap-10">
                <div className="w-full">
                    <Card className="p-5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <h1 className="text-[#414D55] text-xl font-bold">CPU Usage</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-3">
                            <div className="border-r-2 border-[#3B3B3B80] pr-6">
                                <h1 className="text-[#BE62FA] font-bold text-3xl">30.8%</h1>
                                <p className="text-[#727677] text-sm mt-1">Idle CPU Time</p>
                            </div>
                            <div>
                                <h1 className="text-[#9FB76A] font-bold text-3xl">70.2%</h1>
                                <p className="text-[#727677] text-sm mt-1">used CPU Time</p>
                            </div>
                        </div>
                       
                    </Card>
                </div>
                <div className="w-full">
                    <Card className="p-5">
                    <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <h1 className="text-[#414D55] text-xl font-bold">Bandwidth Usage</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-3">
                            <div className="border-r-2 border-[#3B3B3B80] pr-6">
                                <h1 className="text-[#BE62FA] font-bold text-3xl">75 Mbps</h1>
                                <p className="text-[#727677] text-sm mt-1">Upload Bandwidth</p>
                            </div>
                            <div>
                                <h1 className="text-[#9FB76A] font-bold text-3xl">45 Mbps</h1>
                                <p className="text-[#727677] text-sm mt-1">Download Bandwidth</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="mb-5 flex items-center justify-end">
                
                <AddServer></AddServer>
                <Button variant="outline" className=" text-sm ml-5">
                <div className="">
                    <Share></Share>
                </div>Export</Button>
            </div>


            <div className="">
                <Card>
                    <h1 className="text-xl font-semibold text-[#000000] px-5 py-4">Server Status Indicators</h1>
                <Table>
                  <TableHeader>
                    <TableRow className="text-[#000000] text-sm">
                      <TableHead className="bg-[#DBDADE]">Server Name</TableHead>
                      <TableHead className="bg-[#DBDADE]">Status</TableHead>
                      <TableHead className="bg-[#DBDADE]">CPU Load</TableHead>
                      <TableHead className="bg-[#DBDADE]">Bandwidth Usage</TableHead>
                      <TableHead className="bg-[#DBDADE]">Active Sessions</TableHead>
                      <TableHead className="bg-[#DBDADE]">Last Update</TableHead>
                      <TableHead className="bg-[#DBDADE]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="">{invoice.invoice}</TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell>{invoice.totalAmount}</TableCell>
                        <TableCell><FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                  </TableFooter>
                </Table>
                </Card>
            </div>
        </div>
    );
};

export default ServerMonitoring;