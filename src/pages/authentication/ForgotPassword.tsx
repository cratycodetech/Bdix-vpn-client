/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, MoveLeft } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaLock} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useResetPassMutation } from "../redux/features/auth/authApi";
import { setUser } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";

type TFormData = {
    email : string,
    newPassword  : string,
    confirmPassword  : string,
  }

const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
    const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm<TFormData>();
    const [showPassword, setShowPassword] = useState(false);
    const [resetPassword] = useResetPassMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    // Move to the next step if validation passes
  const nextStep = async () => {
    const valid = await trigger(); 
    if (valid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  //handle login
   // Submit the form on the last step
   const onSubmit: SubmitHandler<TFormData> = async (data) => {
    const toastId = toast.loading("Resetting Password...");

    try {
      const responseData = await resetPassword(data).unwrap();
      dispatch(setUser({ user: responseData }));
      toast.success("Reset Password Done.", { id: toastId, duration: 2000 });
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
            <div className="flex items-center justify-center">
                <div className="px-7 py-5 rounded-lg  w-full max-w-md border-2">
                    <h2 className="text-3xl font-semibold text-center mb-1">Forgot Your Password?</h2>
                    <p className="text-center text-gray-400 mb-3">
                        Provide your email address and we will send you the instructions to reset your password.                    
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">           
                      {/* Email */}
                      {currentStep === 1 && (

                      <div>
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
                        <div className="pt-6">
                            <Button onClick={nextStep} className="uppercase rounded-lg px-4 lg:px-5 bg-[#463684] w-full hover:bg-green-700 hover:text-white">
                                Reset Password
                            </Button>
                        </div>
                      </div>
                      )}
                       

                      {/* step-2 */}
                      {currentStep === 2 && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="text-base text-[#242426] leading-5" htmlFor="newPassword">New Password</Label>
                          <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-500" />
                            <Input
                              id="newPassword"
                              type={showPassword ? "text" : "password"}
                              placeholder="New Password"
                              className="pl-10"
                              {...register("newPassword", {
                                required: "New Password is required",
                                minLength: {
                                  value: 6,
                                  message: "New Password must be at least 6 characters long",
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
                          {errors.newPassword && (
                            <p className="text-sm text-red-500">{errors.newPassword.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                            <Label className="text-base text-[#242426] leading-5" htmlFor="confirmPassword">Confirm Password</Label>
                          <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-500" />
                            <Input
                              id="confirmPassword"
                              type={showPassword ? "text" : "password"}
                              placeholder="New Password"
                              className="pl-10"
                              {...register("confirmPassword", { required: "Please confirm your password", validate: (value) => value === watch("newPassword") || "Passwords do not match"})} 
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-3 text-gray-500"
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                          </div>
                          {errors.confirmPassword && (
                            <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                          )}
                        </div>
                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-[#4406CB] text-[#FFFFFF] text-base font-semibold">
                            Reset Password
                        </Button>
                      </div>
                      )}
                      
                    </form>
                    <div className="mt-5">
                        <a href="/login" className="text-[#4406CB] text-base font-semibold underline flex items-center justify-center gap-2">
                            <MoveLeft></MoveLeft>
                            <span>Return to Sign In</span>
                        </a>
                    </div>
                    
                    
                   
                    
                </div>
            </div>
            
        </Container>
    );
};

export default ForgotPassword;