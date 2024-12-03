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
import { useGenerateCreditsMutation } from "@/pages/redux/features/admin/creditManagement/CreditManagementApi";

type TFormData = {
    credit : string,
  }

const GenerateCredit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>();
    const queryClient = useQueryClient();
    const [generateCredits] = useGenerateCreditsMutation()


    //Handle submit
    const onSubmit : SubmitHandler<TFormData>= (data: any) =>{
    const toastId = toast.loading("adding Credit");
    try {
      console.log("updated data", data);
      const updatedData = {
        ...data,
        credit: Number(data.credit),
      };
      generateCredits(updatedData)
      toast.success("Credit Added Successfully!", { id: toastId, duration: 2000 });
      queryClient.invalidateQueries("credit");
      
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
                Generate Credit</Button>

              </AlertDialogTrigger>
              <AlertDialogContent className="border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-3xl text-center text-[#2B2D42] font-bold">Generate Credits</AlertDialogTitle>
                </AlertDialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-xl">
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="credit" className="text-[#242426] text-base">
                        Credit Amount
                      </Label>
                      <Input
                        {...register("credit", { required: "Please write credit amount" })}
                        className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                        placeholder="Enter credits to generate"
                      />
                      {errors.credit && <p className="text-red-500">{errors.credit.message}</p>}
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

export default GenerateCredit;