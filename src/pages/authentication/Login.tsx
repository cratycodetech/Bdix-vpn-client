/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { setUser, TUserToken } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { googleLogin } from "@/components/providers/AuthProvider";

type TFormData = {
    name : string,
    email : string,
    phone: string,
    password  : string,
  }

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TFormData>();
    const [showPassword, setShowPassword] = useState(false);
    const [login] = useLoginMutation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

  //handle login
  const onSubmit : SubmitHandler<TFormData> = async (data) => {
    const toastId = toast.loading("logging in");
    try {
      const res = await login(data).unwrap()
      const token = res.token;
      dispatch(setUser({user: data, token: token}))
      toast.success("Login Done.", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (error: any) {
      console.error(error)
      if (error?.data?.message) {
        toast.error(error.data.message, { id: toastId, duration: 2000 });
      } else {
        toast.error("Something went wrong!", { id: toastId, duration: 2000 });
      }
    }
  };

  // const handleGoogleLogin = async () => {
  //   await googleLogin();
  // };

  //handle google login
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in...");
  
    try {
      const result = await googleLogin();
      const loggedUser = result?.user;
      console.log("logged user", loggedUser);
  
      if (!loggedUser) {
        toast.error("Google login failed", { id: toastId });
        return;
      }
      const userInfo = {
        name: loggedUser?.displayName,
        email: loggedUser?.email,
        phone: loggedUser?.phoneNumber,
        password: "defaultPassword123", // Default password for Google users
      };
  
      console.log("User info from Google login:", userInfo);
  
      // Trigger login mutation
      await login(userInfo).unwrap();

      // Retrieve the user's token
    // const idToken = await loggedUser.getIdToken();
    // console.log("idToken", idToken);

    // Construct the token object to match TUserToken type
    const token: TUserToken = {
      id: loggedUser?.uid,
      name: loggedUser.displayName ?? "Unknown User",
      email: loggedUser.email ?? "Unknown Email",
    };
  
      // Update Redux store with user data
      // const token = loggedUser?.token;
      dispatch(setUser({ user: userInfo, token }));
      toast.success("Login successful", { id: toastId, duration: 2000 });
      navigate("/");
  
    } catch (err) {
      console.error("Error during login:", err);
      toast.error("Login failed. Please try again.", { id: toastId });
    }
  };
  
    return (
        <Container className="pt-5">  
            <div className="flex items-center justify-center">
                <div className="px-7 py-5 rounded-lg  w-full max-w-md border-2">
                    <h2 className="text-3xl font-semibold text-center mb-1">Login</h2>
                    <p className="text-center text-gray-400 mb-3">
                      Use your account info to login into our service.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">           
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
                      {/* Password */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label className="text-base text-[#242426] leading-5" htmlFor="password">Password</Label>
                            <a href="/forgotPassword" className="text-sm underline text-[#4406CB] hover:underline">
                            Forgot Password?
                          </a>
                        </div>
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
                        Login
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
                      <Button onClick={handleGoogleLogin} className="text-base py-6 rounded-xl" variant="outline">
                        <IoLogoGoogle className="w-[30px] h-[30px]"></IoLogoGoogle>
                        Login with <span className="text-[#1C1C1C] font-bold">Google</span></Button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="w-1/12 border-b border-gray-600 lg:w-2/12 md:w-1/4"></span>
                      <span className="text-base text-gray-500">
                      Don't have an account?{" "}
                        <Link
                          to="/register"
                          className="hover:text-blue-800 font-bold text-[#83b446] text-lg"
                        >
                          Register
                        </Link>
                      </span>
                      <span className="w-1/12 border-b border-gray-600 lg:w-2/12 md:w-1/4"></span>
                    </div>
                </div>
            </div>
            
        </Container>
    );
};

export default Login;