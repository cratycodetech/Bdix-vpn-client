/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import {Mail } from "lucide-react";
import { FaEllipsis, FaLocationArrow, FaPen, FaPhone } from "react-icons/fa6";
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
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },

  ]



const ResellerDetails = () => {
    const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
      )

  return (
      <div className="">
          <AlertDialog>
            <AlertDialogTrigger asChild>
                <FaEllipsis className="text-right w-[18px] h-[18px] text-[#1E1E1E]"></FaEllipsis>
            </AlertDialogTrigger>
            <AlertDialogContent className="border">
              <AlertDialogHeader>
              </AlertDialogHeader>
              <div className="flex items-center justify-start gap-5">
                <div>
                    <img className="w-[100px] h-[100px] rounded-full" src="https://i.ibb.co.com/rxsrLYF/Ellipse-459.webp" alt="" />
                </div>
                <div>
                    <h1 className="text-[#2B2D42] font-semibold text-3xl">Alfred Maxwell</h1>
                    <p className="text-[#2B2D42] text-xl">Reseller</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-3">
                    <Mail className="text-[#3B3B3B]"></Mail>
                    <p className="text-[#3B3B3B] font-medium text-xl">robert24@gmail.com</p>
                </div>
                <div className="flex items-center justify-center pr-5 mt-3 gap-3">
                    <FaPhone className="text-[#3B3B3B] h-[20px] w-[20px]"></FaPhone>
                    <p className="text-[#3B3B3B] font-medium text-xl">+880 1345118027</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-5">
                <Button className="text-[#4406CB] border-[#4406CB] text-xl font-medium" variant="outline"> Edit Info <FaPen className="w-[24px] h-[24px]"></FaPen></Button>
                <Button className="text-[#737373] border-[#737373] text-xl font-medium" variant="outline"> Send Message <FaLocationArrow className="w-[30px] h-[30px]"></FaLocationArrow></Button>
              </div>

              <Card>
                    <ScrollArea className="h-60 rounded-md border">
                        <div className="p-4">
                            <Table>
                              <TableCaption>A list of your user management.</TableCaption>
                              <TableHeader className="bg-[#F0F4FA]">
                                <TableRow className="border-b border-[#DBDADE]">
                                  <TableHead className="text-[#000000] font-medium text-base">User Name</TableHead>
                                  <TableHead className="text-[#000000] font-medium text-base">Subscription</TableHead>
                                  <TableHead className="text-[#000000] font-medium text-base">Credits Assigned</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {invoices.map((invoice) => (
                                  <TableRow key={invoice.invoice}>
                                    <TableCell>Jhon Doe</TableCell>
                                    <TableCell>Active</TableCell>
                                    <TableCell className="">
                                        +100 credit
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