/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import {Eye, Mail } from "lucide-react";
  import { FaPhone } from "react-icons/fa6";
  import { ScrollArea } from "@/components/ui/scroll-area";
  
  
  const UserDetails = ({list}: {list: any}) => {
    const { email, name, phone, resellerDetails, subscriptionStatus, userId} = list
  
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
                      <h1 className="text-[#23272E] font-semibold text-xl">{userId}</h1>
                      <p className="text-[#2B2D42] text-xl">User ID</p>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="text-[#3B3B3B]" />
                      <p className="text-[#3B3B3B] font-medium text-lg">{email}</p>
                    </div>
                    <div className="flex items-center justify-center pr-24 mt-3 gap-3">
                      <FaPhone className="text-[#3B3B3B] h-[20px] w-[20px]" />
                      <p className="text-[#3B3B3B] font-medium text-xl">{phone}</p>
                    </div>
                  </div>
                  <hr className="border-[#3B3B3B] my-4"></hr>
                  <div>
                    <h1 className="pt-1 text-[#2B2D42] font-semibold text-2xl">Personal Information</h1>
                    <div className="mt-2 flex items-center justify-start gap-10">
                        <div>
                            <div>
                                <h1 className="text-[#3B3B3B] text-xl">Full Name</h1>
                                <h2 className="text-[#2B2D42] font-semibold text-xl">{name}</h2>
                            </div>
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
                                <h2 className="text-[#56BA28] text-base flex items-center justify-start gap-1"><p className="bg-[#56BA28] rounded-full w-[11px] h-[11px]"></p>{subscriptionStatus}</h2>
                            </div>
                            <div className="mt-4">
                                <h1 className="text-[#3B3B3B] text-xl">Reseller Manager</h1>
                                <h2 className="text-[#737373] font-semibold text-xl">{resellerDetails?.name}</h2>
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