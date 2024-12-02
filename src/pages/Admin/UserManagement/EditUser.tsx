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
import { useGetTotalPremiumUsersForAllResellerQuery } from "@/pages/redux/features/admin/AdminResellerManagement/AdminResellerManagementApi";

type TFormData = {
  fullName : string,
  email : string,
  subscriptionType : string,
  resellerAssignment: string,
}

const EditUser = ({ list }: { list: any }) => {
  const { name, email, subscriptionType, resellerDetails } = list;
  const {data: getTotalPremiumUsersForAllReseller} = useGetTotalPremiumUsersForAllResellerQuery(undefined)
  const { register, handleSubmit, setValue, watch, formState: { errors },} = useForm<TFormData>({
      defaultValues: {
        fullName: name || "",
        email: email || "",
        subscriptionType: subscriptionType || "",
        resellerAssignment: resellerDetails?.name || "",
    },
  });

  const queryClient = useQueryClient();
   // Watch values for controlled fields
   const selectedSubscriptionType = watch("subscriptionType");
   const selectedResellerAssignment = watch("resellerAssignment");

  // Handle submit
  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    const toastId = toast.loading("Updating user...");
    try {
      console.log("Updated data", data);
      // Add logic to update user here (e.g., API call)
      toast.success("User updated successfully!", { id: toastId, duration: 2000 });
      queryClient.invalidateQueries("server");
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <PencilLine className="border-r-2 pr-1 w-[25px] h-[25px] text-[#1E1E1E]" />
        </AlertDialogTrigger>
        <AlertDialogContent className="border">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl text-center text-[#2B2D42] font-bold">
              EDIT USER
            </AlertDialogTitle>
          </AlertDialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-xl">
            <div className="space-y-5">
              <div>
                <h1 className="text-[#242731] font-semibold text-xl">Personal data</h1>
                <p className="text-[#575F6E] text-sm">Add personal information to update the user</p>
              </div>
              <div>
                <Label htmlFor="fullName" className="text-[#242426] text-base">
                  Full Name
                </Label>
                <Input
                  {...register("fullName", { required: "Full name is required" })}
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
                  {...register("email", { required: "Email is required" })}
                  className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                  placeholder="alex_manager@gmail.com"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="w-full">
                <Label htmlFor="subscriptionType" className="text-[#242426] text-base">
                  Subscription Type
                </Label>
                <Select
                  onValueChange={(value) => setValue("subscriptionType", value)}
                  // defaultValue={selectedSubscriptionType || "Free"}
                >
                  <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-black focus-visible:ring-0 focus:outline-none">
                  <SelectValue placeholder={selectedSubscriptionType || "Select from menu"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Subscription Type</SelectLabel>
                      {["Monthly","Half-Yearly", "Yearly"].map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full">
                <Label htmlFor="resellerAssignment" className="text-[#242426] text-base">
                  Reseller Assignment
                </Label>
                <Select
                  onValueChange={(value) => setValue("resellerAssignment", value)}
                  // defaultValue={selectedResellerAssignment || ""}
                >
                  <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-black focus-visible:ring-0 focus:outline-none">
                  <SelectValue placeholder={selectedResellerAssignment || "Select from menu"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Reseller Assignment</SelectLabel>
                      {getTotalPremiumUsersForAllReseller?.data?.map((item) => (
                        <SelectItem key={item?.resellerName} value={item?.resellerName}>
                          {item?.resellerName}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <AlertDialogFooter className="mt-4">
              <AlertDialogCancel className="bg-[#C5B2EF]">
                <Ban /> Cancel
              </AlertDialogCancel>
              <AlertDialogAction>
                <Button type="submit">
                  <Check /> Confirm
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EditUser;
