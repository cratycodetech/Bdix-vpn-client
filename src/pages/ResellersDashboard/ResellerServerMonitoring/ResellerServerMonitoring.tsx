/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Card,
  } from "@/components/ui/card"
import {  Cpu, Eye, Filter, Hourglass, RefreshCcw, Share, Trash2 } from "lucide-react";
import { FaEllipsis } from "react-icons/fa6";
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
import { useDeleteServerMutation, useGetAllServerQuery, useGetCountActiveServerQuery } from "@/pages/redux/features/admin/serverMonitoring/serverMonitoringApi";
import moment from "moment";
import { usePDF } from 'react-to-pdf';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";




const ResellerServerMonitoring = () => {
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
                                    Active User
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
                                    <Link to="/dashboard/reseller-server-monitoring/server-details"><Eye className="border-r-2 pr-1 w-[25px] h-[25px] text-[#1E1E1E]"></Eye></Link>
                                    <RefreshCcw className="border-r-2 pr-1 w-[25px] h-[25px] text-[#1E1E1E]"></RefreshCcw>
                                    <Trash2 onClick={() => handleDelete(list?._id)} className="w-[25px] h-[25px] text-[#1E1E1E]"></Trash2>
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

export default ResellerServerMonitoring;
