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
import { Ban, Check, PencilLine } from "lucide-react";

type TFormData = {
  fullName : string,
  email : string,
  subscriptionType : string,
  resellerAssignment: string,
}

const EditResellerUser = () => {
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
                <PencilLine className="border-r-2 pr-1 w-[25px] h-[25px] text-[#1E1E1E]"></PencilLine>
            </AlertDialogTrigger>
            <AlertDialogContent className="border">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-3xl text-center text-[#2B2D42] font-bold">EDIT USER</AlertDialogTitle>
              </AlertDialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-xl">
                <div className="space-y-5">
                    <div>
                        <h1 className="text-[#242731] font-semibold text-xl">Personal data</h1>
                        <p className="text-[#575F6E] text-sm">Update your personal details to tailor your user profile.</p>
                    </div>
                  <div>
                    <Label htmlFor="fullName" className="text-[#242426] text-base">
                       Full Name
                    </Label>
                    <Input
                      {...register("fullName", { required: "Please write credit amount" })}
                      className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                      placeholder="Alexander"
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#242426] text-base">
                       Email
                    </Label>
                    <Input
                      {...register("email", { required: "Please write credit amount" })}
                      className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                      placeholder="alex_manager@gmail.com"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                  </div>

                    <div className="w-full">
                      <Label htmlFor="subscriptionType" className="text-[#242426] text-base">
                        Subscription Type
                      </Label>
                      <Select onValueChange={(value) => setValue("subscriptionType", value)}>
                        <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-[#BFBFBF] focus-visible:ring-0 focus:outline-none">
                          <SelectValue placeholder="select from menu" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Subscription Type</SelectLabel>
                            {["Free", "Premium", "Business", "Entrepreneur"].map((item) => (
                              <SelectItem key={item} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                </div>
                <AlertDialogFooter className="mt-5">
                  <AlertDialogCancel className="bg-[#C5B2EF]"> <Ban /> Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction>
                    <Button type="submit"><Check /> Save</Button>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </AlertDialogContent>
          </AlertDialog>
      </div>
  );
};

export default EditResellerUser;