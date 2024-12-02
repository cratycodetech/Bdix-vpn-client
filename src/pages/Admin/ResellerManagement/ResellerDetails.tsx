/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Mail } from "lucide-react";
import { FaEllipsis, FaPhone } from "react-icons/fa6";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGetAllUsersForSingleResellerQuery } from "@/pages/redux/features/admin/AdminResellerManagement/AdminResellerManagementApi";



const ResellerDetails = ({list}: {list: any}) => {
  const { resellerEmail, resellerId, resellerName, resellerPhone} = list
  const {data: getAllUsersForSingleReseller} = useGetAllUsersForSingleResellerQuery(resellerId)

  return (
      <div className="">
          <AlertDialog>
            <AlertDialogTrigger asChild>
                <FaEllipsis className="text-right w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
            </AlertDialogTrigger>
            <AlertDialogContent className="border">
              <AlertDialogHeader>
              </AlertDialogHeader>
              <div className="flex items-center justify-start gap-5 px-4">
                <div>
                    <img className="w-[80px] h-[80px] rounded-full" src="https://i.ibb.co.com/rxsrLYF/Ellipse-459.webp" alt="" />
                </div>
                <div>
                    <h1 className="text-[#2B2D42] font-semibold text-3xl">{resellerName}</h1>
                    <p className="text-[#2B2D42] text-xl">Reseller</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-3">
                    <Mail className="text-[#3B3B3B]"></Mail>
                    <p className="text-[#3B3B3B] font-medium text-xl">{resellerEmail}</p>
                </div>
                <div className="flex items-center justify-center pr-5 mt-3 gap-3">
                    <FaPhone className="text-[#3B3B3B] h-[20px] w-[20px]"></FaPhone>
                    <p className="text-[#3B3B3B] font-medium text-xl">{resellerPhone}</p>
                </div>
              </div>
              <Card>
                    <ScrollArea className="h-60 rounded-md border">
                        <div className="p-4">
                            <Table>
                              <TableCaption>A list of your reseller user management.</TableCaption>
                              <TableHeader className="bg-[#F0F4FA]">
                                <TableRow className="border-b border-[#DBDADE]">
                                  <TableHead className="text-[#8B909A] font-medium text-sm">User Name</TableHead>
                                  <TableHead className="text-[#8B909A] font-medium text-sm">Subscription</TableHead>
                                  <TableHead className="text-[#8B909A] font-medium text-sm">Credits Assigned</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {getAllUsersForSingleReseller?.premiumUsers?.map((list: any) => (
                                  <TableRow key={list.list}>
                                    <TableCell>{list?.userId?.name}</TableCell>
                                    <TableCell>{list?.subscriptionStatus}</TableCell>
                                    <TableCell className="">
                                        {list?.credits} credit
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                        </div>
                    </ScrollArea>
                </Card>
                <AlertDialogFooter>
                    <AlertDialogCancel className="bg-[#4406CB] text-white w-full">Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
      </div>
  );
};

export default ResellerDetails;