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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { toast } from "sonner";
import { useQueryClient } from "react-query";

type TFormData = {
    creditAmount : string,
    reseller : string,
    remarks: string,
  }

const GenerateCredit = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<TFormData>();
    const queryClient = useQueryClient();


    //Handle submit
    const onSubmit : SubmitHandler<TFormData>= (data: any) =>{
    const toastId = toast.loading("announcement in");
    try {
      console.log("updated data", data);
    //   addNewServer(data)
      toast.success("Server Added Successfully!", { id: toastId, duration: 2000 });
      queryClient.invalidateQueries("server");
      
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
                      <div className="w-full">
                        <Label htmlFor="assignTo" className="text-[#242426] text-base">
                          Assign To
                        </Label>
                        <Select onValueChange={(value) => setValue("reseller", value)}>
                          <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-[#BFBFBF] focus-visible:ring-0 focus:outline-none">
                            <SelectValue placeholder="Select Reseller" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Memory Allocation</SelectLabel>
                              {["Reseller1", "Reseller2", "Reseller3", "Reseller4"].map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                  
                    <div className="mt-4">
                      <Label htmlFor="remarks" className="text-[#242426] text-base">
                        Remarks
                      </Label>
                      <Input
                        {...register("remarks", {
                          required: "Please write remarks if you want",
                        })}
                        className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                        placeholder="Please write remarks if you want"
                      />
                      {errors.remarks && (
                        <p className="text-red-500">{errors.remarks.message}</p>
                      )}
                    </div>
                   
                  </div>
                  <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Button type="submit">Confirm</Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default GenerateCredit;