/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card";
import { FaEllipsis } from "react-icons/fa6";
import { LiaServerSolid } from "react-icons/lia";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { Filter, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePDF } from "react-to-pdf";
import { useGetAllServerQuery } from "@/pages/redux/features/admin/serverMonitoring/serverMonitoringApi";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

//data for chart
const data = [
    { name: "Jan", upload: 75, download: 45 },
    { name: "Feb", upload: 65, download: 55 },
    { name: "Mar", upload: 85, download: 35 },
    { name: "Apr", upload: 70, download: 50 },
    { name: "May", upload: 90, download: 40 },
    { name: "Jun", upload: 80, download: 45 },
  ];


const ResellerServerDetails = () => {
    const { toPDF, targetRef } = usePDF({filename: 'export.pdf'});
    const {data: getAllServer} = useGetAllServerQuery(undefined)

    return (
        <div>
            <div className="mb-3">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Reseller Server Monitoring</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Server Details</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
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
            <div className="mb-6">
                <h1 className="text-[#2B2D42] text-lg font-medium">Search Filters</h1>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-between gap-5">
                    <div>
                        <Input type="text" placeholder="User ID" />
                    </div>
                    <div>
                        <Input type="text" placeholder="User Email" />
                    </div>
                    <div>
                        <Select>
                          <SelectTrigger className="w-[180px] text-base">
                            <SelectValue placeholder="Subscription Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Subscription Status</SelectLabel>
                              <SelectItem value="Guest User">Guest User</SelectItem>
                              <SelectItem value="Normal User">Normal User</SelectItem>
                              <SelectItem value="Premium User">Premium User</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Input type="text" placeholder="Reseller Reference" />
                    </div>
                    <div className="xl:flex xl:place-content-end">
                        <Button className="bg-[#4406CB] text-[#FFFFFF] font-semibold text-lg leading-6 py-6">Apply Filter</Button>
                    </div>
                </div>
            </div>
       
            <div className="mb-5 flex items-center justify-end">
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
                                    Subscription Type
                                    <Filter className="w-3 h-3 ml-2 cursor-pointer" />
                                </div>
                              </TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Credits</TableHead>
                              <TableHead className="text-[#000000] font-medium text-base">Reseller Reference</TableHead>
                              <TableHead className="text-[#000000] text-start font-medium text-base">Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getAllServer?.data?.map((list: any) => (
                              <TableRow key={list._id}>
                                <TableCell className="">{list.serverName}</TableCell>
                                <TableCell>{list?.status}</TableCell>
                                <TableCell>{list?.CPUallocation}</TableCell>
                                <TableCell>{list?.memoryAllocation}</TableCell>
                                <TableCell>{list?.status}</TableCell>
                                <TableCell className="">
                                    <FaEllipsis className="w-[25px] h-[25px] text-[#1E1E1E]"></FaEllipsis>
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

export default ResellerServerDetails;