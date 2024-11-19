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
    serverIPAddress : string,
    cpuAllocation: string,
    memoryAllocation  : string,
    serverLocation : string
  }

const AddServer = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<TFormData>();
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
    // Prepare payload
    const updatedData = { ...data, serverTags: selectedTags };
    console.log("Updated Server Data:", updatedData);

    // updateSupply(options);
    // toast.success("Supply Updated!");
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
                        {...register("serverIPAddress", {
                          required: "Please write server Address",
                        })}
                        className="border-0 border-b text-base border-[#BFBFBF] text-[#242426] focus-visible:ring-0 focus:outline-none"
                        placeholder="e.g., 192.168.1.1"
                      />
                      {errors.serverIPAddress && (
                        <p className="text-red-500">{errors.serverIPAddress.message}</p>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-8">
                      <div className="w-full">
                        <Label htmlFor="cpuAllocation" className="text-[#242426] text-base">
                          CPU Allocation
                        </Label>
                        <Select onValueChange={(value) => setValue("cpuAllocation", value)}>
                          <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-[#BFBFBF] focus-visible:ring-0 focus:outline-none">
                            <SelectValue placeholder="e.g., 50%" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>CPU Allocation</SelectLabel>
                              {["10%", "20%", "50%", "100%"].map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-full">
                        <Label htmlFor="memoryAllocation" className="text-[#242426] text-base">
                          Memory Allocation
                        </Label>
                        <Select onValueChange={(value) => setValue("memoryAllocation", value)}>
                          <SelectTrigger className="border-0 border-b text-base border-[#BFBFBF] text-[#BFBFBF] focus-visible:ring-0 focus:outline-none">
                            <SelectValue placeholder="e.g., 50%" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Memory Allocation</SelectLabel>
                              {["4gb", "8gb", "16gb", "32gb"].map((item) => (
                                <SelectItem key={item} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
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

export default AddServer;