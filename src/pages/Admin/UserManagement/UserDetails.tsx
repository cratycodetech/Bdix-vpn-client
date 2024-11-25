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
  import {Eye, Mail } from "lucide-react";
  import { FaEllipsis, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaPen, FaPhone } from "react-icons/fa6";
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
  
  
  
  const UserDetails = () => {
  
    return (
        <div className="">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Eye className="border-r-2 pr-1 w-[25px] h-[25px] text-[#1E1E1E]"></Eye>
              </AlertDialogTrigger>
              <AlertDialogContent className="border">
                <AlertDialogHeader></AlertDialogHeader>
                {/* Custom ScrollArea */}
                <ScrollArea className="h-[440px] overflow-y-auto ">
                  <div className="flex items-center justify-start gap-5 px-4">
                    <div>
                      <img
                        className="w-[80px] h-[80px] rounded-full"
                        src="https://i.ibb.co.com/rxsrLYF/Ellipse-459.webp"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-[#23272E] font-semibold text-3xl">11236564164</h1>
                      <p className="text-[#2B2D42] text-xl">User ID</p>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="text-[#3B3B3B]" />
                      <p className="text-[#3B3B3B] font-medium text-xl">robert24@gmail.com</p>
                    </div>
                    <div className="flex items-center justify-center pr-5 mt-3 gap-3">
                      <FaPhone className="text-[#3B3B3B] h-[20px] w-[20px]" />
                      <p className="text-[#3B3B3B] font-medium text-xl">+880 1345118027</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-5 p-4">
                    <Button
                      className="text-[#4406CB] border-[#4406CB] text-xl font-medium"
                      variant="outline"
                    >
                      Edit Info <FaPen className="w-[24px] h-[24px]" />
                    </Button>
                    <Button
                      className="text-[#737373] border-[#737373] text-xl font-medium"
                      variant="outline"
                    >
                      Send Message <FaLocationArrow className="w-[30px] h-[30px]" />
                    </Button>
                  </div>
                  <hr className="border-[#3B3B3B] my-4"></hr>
                  <div>
                    <h1 className="pt-1 text-[#2B2D42] font-semibold text-2xl">Personal Information</h1>
                    <div className="mt-2 flex items-center justify-start gap-10">
                        <div>
                            <div>
                                <h1 className="text-[#3B3B3B] text-xl">Full Name</h1>
                                <h2 className="text-[#2B2D42] font-semibold text-xl">Alfred Maxwell</h2>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-[#3B3B3B] text-xl">Gender</h1>
                                <h2 className="text-[#2B2D42] font-semibold text-xl">Male</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#3B3B3B] text-xl">Birthday</h1>
                                <h2 className="text-[#2B2D42] font-semibold text-xl">22/10/2005</h2>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-[#3B3B3B] text-xl">Address</h1>
                                <h2 className="text-[#2B2D42] font-semibold text-xl">5th street, NY, USA</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-[#3B3B3B] text-xl">Contact</h1>
                        <div className="mt-1 flex items-center gap-3">
                            <FaLinkedinIn className="w-[24px] h-[24px]"></FaLinkedinIn>
                            <FaFacebookF className="w-[13px] h-[24px]"></FaFacebookF>
                            <FaInstagram className="w-[24px] h-[24px]"></FaInstagram>
                        </div>
                    </div>
                  </div>
                  <hr className="border-[#3B3B3B] my-4"></hr>

                  <div>
                    <h1 className="pt-1 text-[#2B2D42] font-semibold text-2xl">User Status</h1>
                    <div className="mt-2 flex items-center justify-start gap-10">
                        <div>
                            <div>
                                <h1 className="text-[#3B3B3B] text-xl">Subscription Status</h1>
                                <h2 className="text-[#56BA28] text-base flex items-center justify-start gap-1"><p className="bg-[#56BA28] rounded-full w-[11px] h-[11px]"></p>Active</h2>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-[#3B3B3B] text-xl">Reseller Manager</h1>
                                <h2 className="text-[#737373] font-semibold text-xl">Alex Dunphy</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-[#3B3B3B] text-xl">Credit Score</h1>
                                <h2 className="text-[#737373] font-semibold text-xl">150 / 500</h2>
                            </div>
                        </div>
                    </div>
                    <hr className="border-[#00000026] my-4"></hr>
                    <div className="mb-5">
                        <h1 className="text-[#3B3B3B] text-xl">User Activity Log</h1>
                    </div>
                  </div>
                </ScrollArea>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-[#4406CB] text-white w-[70%] mx-auto font-semibold text-xl py-6">Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
        </div>

    );
  };
  
  export default UserDetails;