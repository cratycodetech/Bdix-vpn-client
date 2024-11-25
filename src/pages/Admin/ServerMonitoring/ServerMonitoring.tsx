/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
  } from "@/components/ui/card"
import {  Cpu, Filter, Hourglass, RefreshCcw, Share, Trash2, TrendingUp } from "lucide-react";
import { FaEllipsis } from "react-icons/fa6";
import { LiaServerSolid } from "react-icons/lia";
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
import AddServer from "./AddServer";
import { useDeleteServerMutation, useGetAllServerQuery, useGetCountActiveServerQuery } from "@/pages/redux/features/admin/serverMonitoring/serverMonitoringApi";
import moment from "moment";
import { usePDF } from 'react-to-pdf';
import Swal from 'sweetalert2'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

  const data = [
    { name: "Jan", upload: 75, download: 45 },
    { name: "Feb", upload: 65, download: 55 },
    { name: "Mar", upload: 85, download: 35 },
    { name: "Apr", upload: 70, download: 50 },
    { name: "May", upload: 90, download: 40 },
    { name: "Jun", upload: 80, download: 45 },
  ];


const ServerMonitoring = () => {
    const {data: getAllServer} = useGetAllServerQuery(undefined)
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getCountActiveServer} = useGetCountActiveServerQuery(undefined)
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                <h1 className="text-[#2B2D42] text-4xl font-bold">{getCountActiveServer?.data}</h1>
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
                        <div className=" flex items-center justify-between gap-4">
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
                        <div className=" mt-5 flex items-center justify-between gap-4">
                            <div>
                                <h1 className="text-[#2B2D42] text-4xl font-bold">75%</h1>
                                <p className="text-[#1E1E1E] text-[15px]">Current bandwidth usage</p>
                            </div>
                            <div className="bg-[#405F1F4D] text-[#395917] text-sm rounded-lg flex items-center justify-center gap-1">
                                <TrendingUp className="w-[15px]"></TrendingUp>
                                <p className="">0.3%</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="my-8 flex flex-col lg:flex-row gap-10">
                <div className="w-full lg:w-1/3">
                    <Card className="p-5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#BE62FA] rounded-full">
                                    <LiaServerSolid className="p-2 w-[35px] h-[35px] rounded-full text-[#FFFFFF]"></LiaServerSolid>

                                </div>
                                <h1 className="text-[#2B2D42] text-lg font-semibold">Server Name</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="mt-7">
                            <h1 className="text-[#2B2D42] text-4xl font-bold">215A</h1>
                            <div className="mt-4 flex items-center justify-start gap-8">
                                <p className="text-[#1E1E1E] text-base">Status : </p>
                                <div className="flex items-center justify-center gap-2">
                                    <p className="bg-[#56BA28] w-[11px] h-[11px] rounded-full"></p>
                                    <p className="text-[#56BA28] text-[15px]">Active</p>
                                </div>
                            </div>
                        </div>
                        
                    </Card>
                </div>
                <div className="w-full lg:w-2/3">
                    <Card className="p-5">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <h1 className="text-[#414D55] text-xl font-bold">Bandwidth Usage</h1>
                            </div>
                            <div>
                                <FaEllipsis className="w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 mt-1 mb-3">
                            <div className="border-r-2 border-[#3B3B3B80] pr-6">
                                <h1 className="text-[#BE62FA] font-bold text-3xl">75 Mbps</h1>
                                <p className="text-[#727677] text-sm mt-1">Upload Bandwidth</p>
                            </div>
                            <div>
                                <h1 className="text-[#9FB76A] font-bold text-3xl">45 Mbps</h1>
                                <p className="text-[#727677] text-sm mt-1">Download Bandwidth</p>
                            </div>
                        </div>
                        <div className="h-[200px] w-full">
                          <ResponsiveContainer>
                            <AreaChart data={data}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Area type="monotone" dataKey="upload" stroke="#BE62FA" fill="#BE62FA" />
                              <Area type="monotone" dataKey="download" stroke="#9FB76A" fill="#9FB76A" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="mb-5 flex items-center justify-end">
                
                <AddServer></AddServer>
                <Button onClick={() => toPDF()} variant="outline" className=" text-sm ml-5">
                <div className="">
                    <Share></Share>
                </div>Export</Button>
            </div>

            <div className="" ref={targetRef}>
                <Card>
                    <div className="p-3">
                        <div className="px-4 py-3">
                            <h1 className="text-xl font-semibold text-[#000000] leading-7">Server Status Indicators</h1>
                        </div>
                        <Table>
                          <TableCaption>A list of your credit management.</TableCaption>
                          <TableHeader className="bg-[#F0F4FA]">
                            <TableRow className="border-b border-[#DBDADE]">
                              <TableHead className="text-[#000000] font-medium text-base">
                                <div className="flex items-center justify-between">
                                Server Name
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
                                Bandwidth Usage
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Active Sessions</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Last Update</TableHead>
                              <TableHead className="text-[#000000] text-center font-medium text-base">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getAllServer?.data?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="">{list.serverName}</TableCell>
                                <TableCell>{list?.status}</TableCell>
                                <TableCell>{list?.CPUallocation}</TableCell>
                                <TableCell>{list?.memoryAllocation}</TableCell>
                                <TableCell>
                                {moment(new Date(`${list?.updatedAt}`)).format('DD MMMM YYYY') || "N/A"}
                                </TableCell>
                                <TableCell className="">
                                    <div className="flex gap-1 items-center justify-center">
                                    <RefreshCcw className="border-r-2 pr-1 w-[25px] h-[25px] text-[#1E1E1E]"></RefreshCcw>
                                    <Trash2 onClick={() => handleDelete(list?._id)} className="w-[25px] h-[25px] text-[#1E1E1E] border-r-2 pr-1"></Trash2>
                                    <FaEllipsis className="w-[20px] h-[25px] text-[#1E1E1E]"></FaEllipsis>
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

export default ServerMonitoring;
