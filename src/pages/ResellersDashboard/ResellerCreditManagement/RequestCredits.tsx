/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IoAdd } from "react-icons/io5";
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import { Ban, Check } from "lucide-react";
import { useCreateCreditRequestMutation } from "@/pages/redux/features/reseller/resellerCreditManagement/ResellerCreditManagementApi";

type TFormData = {
  creditAmount : string,
  resellerId : string,
  transactionId : string,
}

const RequestCredits = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TFormData>();
  const queryClient = useQueryClient();
  const [generateCreditRequest] = useCreateCreditRequestMutation()


  //Handle submit
  const onSubmit : SubmitHandler<TFormData>= (data: any) =>{
  const toastId = toast.loading("Generating in");
  try {
    generateCreditRequest(data)
    toast.success("credit Generate Successfully!", { id: toastId, duration: 2000 });
    queryClient.invalidateQueries("credit");
    reset();
  } catch (error) {
    toast.error("Something went wrong!", { id: toastId, duration: 2000 });
  }
};

  return (
      <div className="">
          <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button className="bg-[#4406CB] text-[#FFFFFF] text-sm">
              <div className="border rounded-full bg-white text-[#4406CB]">
                  <IoAdd></IoAdd>
              </div>
              Request Credits</Button>

            </AlertDialogTrigger>
            <AlertDialogContent className="border">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-3xl text-center text-[#2B2D42] font-bold">Request Credits</AlertDialogTitle>
              </AlertDialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-xl">
                <div className="space-y-5">
                    <div>
                        <h1 className="text-[#242731] font-semibold text-2xl">Data</h1>
                        <p className="text-[#575F6E] text-sm">Enter all details for credits request</p>
                    </div>
                  <div>
                    <Label htmlFor="creditAmount" className="text-[#242426] text-base">
                      Credit Amount
                    </Label>
                    <Input
                      {...register("creditAmount", { required: "Please write credit amount" })}
                      className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                      placeholder="Enter credits to generate"
                    />
                    {errors.creditAmount && <p className="text-red-500">{errors.creditAmount.message}</p>}
                  </div>
                  {/* <div className="w-full">
                      <Label htmlFor="assignTo" className="text-[#242426] text-base">
                        Assign To
                      </Label>
                      <Select onValueChange={(value) => setValue("Admin", value)}>
                        <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-[#BFBFBF] focus-visible:ring-0 focus:outline-none">
                          <SelectValue placeholder="Select Admin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Assign To</SelectLabel>
                            {["Admin"].map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                  </div> */}
                  <div>
                    <Label htmlFor="transactionId" className="text-[#242426] text-base">
                        Transaction ID
                    </Label>
                    <Input
                      {...register("transactionId", { required: "Please write Transaction Id" })}
                      className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                      placeholder="Enter ID"
                    />
                    {errors.transactionId && <p className="text-red-500">{errors.transactionId.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="resellerId" className="text-[#242426] text-base">
                        Reseller ID
                    </Label>
                    <Input
                      {...register("resellerId", { required: "Please write reseller Id" })}
                      className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                      placeholder="Enter ID"
                    />
                    {errors.resellerId && <p className="text-red-500">{errors.resellerId.message}</p>}
                  </div>
                 
                </div>
                <AlertDialogFooter className="mt-4">
                  <AlertDialogCancel className="bg-[#C5B2EF]"> <Ban /> Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button type="submit"><Check /> Confirm</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
      </div>
  );
};

export default RequestCredits;