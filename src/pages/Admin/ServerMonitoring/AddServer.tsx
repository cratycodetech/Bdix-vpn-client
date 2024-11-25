/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { SubmitHandler, useForm } from "react-hook-form";


  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
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
import { useState } from "react"
import { useAddNewServerMutation } from "@/pages/redux/features/admin/serverMonitoring/serverMonitoringApi";
import { toast } from "sonner";
import { useQueryClient } from "react-query";
import { Ban, Check } from "lucide-react";

//option for multiple select
const options = [
    "Instagram",
    "Facebook",
    "Google Ads",
    "LinkedIn",
    "Twitter",
    "TikTok",
    "YouTube",
  ];

  type TFormData = {
    serverName : string,
    ipAddress : string,
    CPUallocation: string,
    memoryAllocation  : string,
    serverLocation : string,
    serverTags : string,
  }

const AddServer = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<TFormData>();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [addNewServer] = useAddNewServerMutation()
    const queryClient = useQueryClient();

    //handle multiple select
    const handleSelect = (value: string) => {
      setSelectedTags((prev) =>
        prev.includes(value)
          ? prev.filter((tag) => tag !== value)
          : [...prev, value]
      );
    };


    //Handle submit
    const onSubmit : SubmitHandler<TFormData>= (data: any) =>{
    const toastId = toast.loading("announcement in");
    try {
      const updatedData = { ...data, serverTags: selectedTags };
      console.log("updated data", updatedData);
      addNewServer(updatedData)
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
                Add Server</Button>

              </AlertDialogTrigger>
              <AlertDialogContent className="border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl text-[#000000] font-semibold">Add a New Server</AlertDialogTitle>
                  <AlertDialogDescription className="text text-[#575F6E]">
                    Provide the required details to add a new server to the system.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded-xl">
                  <div>
                    <div>
                      <Label htmlFor="serverName" className="text-[#242426] text-base">
                        Server Name
                      </Label>
                      <Input
                        {...register("serverName", { required: "Please write server Name" })}
                        className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                        placeholder="Enter a unique server name"
                      />
                      {errors.serverName && <p className="text-red-500">{errors.serverName.message}</p>}
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="IPAddress" className="text-[#242426] text-base">
                        Server IP Address
                      </Label>
                      <Input
                        {...register("ipAddress", {
                          required: "Please write server Address",
                        })}
                        className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                        placeholder="e.g., 192.168.1.1"
                      />
                      {errors.ipAddress && (
                        <p className="text-red-500">{errors.ipAddress.message}</p>
                      )}
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="serverLocation" className="text-[#242426] text-base">
                          Server Location
                        </Label>
                        <Select onValueChange={(value) => setValue("serverLocation", value)}>
                          <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-[#BFBFBF] focus-visible:ring-0 focus:outline-none">
                            <SelectValue placeholder="e.g., Pallabi, Mirpur-12" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>server Location</SelectLabel>
                              {["Pallabi, Mirpur-12", "Dhanmondi, Dhaka", "Bashundhara R/A, Dhaka", "Tejgaon, Dhaka"].map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    <div className="mt-4">
                      <Label htmlFor="marketingTags" className="text-[#242426] text-base">
                        Server Tags
                      </Label>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            className="w-full border-0 border-b text-[#BFBFBF] text-base border-[#BFBFBF] focus-visible:ring-0 focus:outline-none text-left"
                          >
                            {selectedTags.length > 0 ? selectedTags.join(", ") : "Select Tags"}
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <div>
                            {options.map((option) => (
                              <div
                                key={option}
                                className={`flex items-center px-4 py-2 cursor-pointer ${
                                  selectedTags.includes(option) ? "bg-gray-200" : ""
                                }`}
                                onClick={() => handleSelect(option)}
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedTags.includes(option)}
                                  onChange={() => handleSelect(option)}
                                  className="mr-2"
                                />
                                {option}
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
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

export default AddServer;