/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaPhone, FaUser } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSignUpMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";

type TFormData = {
    name : string,
    email : string,
    phone: string,
    password  : string,
  }

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>();
    const [showPassword, setShowPassword] = useState(false);
    const [signUp] = useSignUpMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

  //handle registration
  const onSubmit : SubmitHandler<TFormData> = async (data) => {
    const toastId = toast.loading("Registering in");
    try {
      await signUp(data).unwrap();
      dispatch(setUser({ user: data }));
      toast.success("Registration Done.", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error: any) {
        if (error?.data?.message) {
            toast.error(error.data.message, { id: toastId, duration: 2000 });
          } else {
            toast.error("Something went wrong!", { id: toastId, duration: 2000 });
        }
    }
  };

    return (
        <Container className="pt-5">  
            <div className="flex items-center justify-center min-h-screen">
                <div className="px-7 py-5 rounded-lg  w-full max-w-md border-2">
                    <h2 className="text-3xl font-semibold text-center mb-1">Register</h2>
                    <p className="text-center text-gray-400 mb-3">
                      Use personal details to register into our service.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                      {/* User Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base text-[#242426] leading-5">User Name</Label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-3 text-gray-500" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter full name"
                            className="pl-10"
                            {...register("name", { required: "User name is required" })}
                          />
                        </div>
                        {errors.name && (
                          <p className="text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
            
                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base text-[#242426] leading-5">Email</Label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter email address"
                            className="pl-10"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                              },
                            })}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
            
                      {/* Contact Number */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base text-[#242426] leading-5">Contact No.</Label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-3 text-gray-500" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter phone number"
                            className="pl-10"
                            {...register("phone", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9]{10,15}$/,
                                message: "Invalid phone number",
                              },
                            })}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
            
                      {/* Password */}
                      <div className="space-y-2">
                        <Label className="text-base text-[#242426] leading-5" htmlFor="password">Password</Label>
                        <div className="relative">
                          <FaLock className="absolute left-3 top-3 text-gray-500" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="pl-10"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters long",
                              },
                            })}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-500"
                            onClick={() => setShowPassword((prev) => !prev)}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </button>
                        </div>
                        {errors.password && (
                          <p className="text-sm text-red-500">{errors.password.message}</p>
                        )}
                      </div>
                     
                      {/* Submit Button */}
                      <Button type="submit" className="w-full bg-[#4406CB] text-[#FFFFFF] text-base font-semibold">
                        Register
                      </Button>
                    </form>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="w-3/12 border-b border-gray-600 lg:w-3/12 md:w-1/4"></span>
                      <p className="text-base font-bold">
                        Sign In{" "}
                        <span
                          className="font-normal text-[#525252] text-base"
                        >
                          with Others
                        </span>
                      </p>
                      <span className="w-3/12 border-b border-gray-600 lg:w-3/12 md:w-1/4"></span>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <Button className="text-base py-6 rounded-xl" variant="outline">
                        <IoLogoGoogle className="w-[30px] h-[30px]"></IoLogoGoogle>
                        Login with <span className="text-[#1C1C1C] font-bold">Google</span></Button>
                    </div>




                    <div className="flex items-center justify-between mt-4">
                      <span className="w-1/12 border-b border-gray-600 lg:w-2/12 md:w-1/4"></span>
                      <span className="text-base text-gray-500">
                      Already have an account?{" "}
                        <Link
                          to="/login"
                          className="hover:text-blue-800 font-bold text-[#83b446] text-lg"
                        >
                          Login
                        </Link>
                      </span>
                      <span className="w-1/12 border-b border-gray-600 lg:w-2/12 md:w-1/4"></span>
                    </div>
            
                </div>
            </div>
            
        </Container>
    );
};

export default Register;