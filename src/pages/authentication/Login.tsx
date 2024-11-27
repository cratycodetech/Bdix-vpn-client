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
import {
  useLoginMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
} from "../redux/features/auth/authApi";
import { setUser, TUserToken } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { googleLogin } from "@/components/providers/AuthProvider";

// TypeScript type for form data
type TFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TFormData>();
  const [showPassword, setShowPassword] = useState(false);
  // const [isOTPRequested, setIsOTPRequested] = useState(false);
  const [login] = useLoginMutation();
  const [sendOTP] = useSendOTPMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // // Handle sending OTP
  // const handleSendOTP = async () => {
  //   const email = watch("email");
  //   if (!email) {
  //     toast.error("Please enter your email before requesting OTP.");
  //     return;
  //   }

  //   const toastId = toast.loading("Sending OTP...");
  //   try {
  //     const res = await sendOTP(email).unwrap();
  //     console.log("response,", res);
  //     toast.success("OTP sent successfully. Please check your email.", { id: toastId });
  //     setIsOTPRequested(true);
  //   } catch (error: any) {
  //     console.error("Error sending OTP:", error);
  //     toast.error(error?.data?.message || "Failed to send OTP.", { id: toastId });
  //   }
  // };

  // // Handle OTP verification
  // const handleVerifyOTP = async () => {
  //   const email = watch("email");
  //   if (!email || !otp) {
  //     toast.error("Please provide both email and OTP to verify.");
  //     return;
  //   }

  //   const toastId = toast.loading("Verifying OTP...");
  //   try {
  //     await verifyOTP({ email, otp }).unwrap();
  //     toast.success("OTP verified successfully.", { id: toastId });
  //     navigate("/"); // Redirect to the home page after verification
  //   } catch (error: any) {
  //     console.error("Error verifying OTP:", error);
  //     setIsOTPRequested(false); // Reset OTP request on failure
  //     toast.error(error?.data?.message || "Invalid OTP.", { id: toastId });
  //   }
  // };

  // Handle login
  // const onSubmit: SubmitHandler<TFormData> = async (data) => {
  //   const toastId = toast.loading("Logging in...");
  //   try {
  //     const res = await login(data).unwrap();
  //     const token = res?.data?.token;

  //     // console.log("res", res);
  //     // console.log("token", token);

  //     dispatch(setUser({ user: data, token }));
  //     toast.success("Login successful.", { id: toastId });
  //     navigate("/");
  //   } catch (error: any) {
  //     console.error("Error during login:", error);
  //     toast.error(
  //       error?.data?.message || "Something went wrong! Please try again.",
  //       { id: toastId }
  //     );
  //   }
  // };

  // Handle login and OTP request
  const onSubmit: SubmitHandler<TFormData> = async (data) => {
    const toastId = toast.loading("Processing...");

    try {
      //for verify mail and password / login functionality
      const resLogin = await login(data).unwrap();
      const token = resLogin?.data?.token;
      dispatch(setUser({ user: data, token }));

      // Send OTP to the provided email
      const res = await sendOTP(data.email).unwrap();
      console.log("OTP Sent:", res);

      toast.success("OTP sent successfully. Please verify.", { id: toastId });

      // Navigate to the OTP verification page with email as state
      navigate("/verify-otp", { state: { email: data.email } });
    } catch (error: any) {
      console.error("Error sending OTP:", error);
      toast.error(
        error?.data?.message || "Failed to send OTP. Please try again.",
        { id: toastId }
      );
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in...");
    try {
      const result = await googleLogin();
      const loggedUser = result?.user;

      if (!loggedUser?.email || !loggedUser?.displayName) {
        toast.error("Google login failed. Invalid user information.", { id: toastId });
        return;
      }

      const userInfo = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        phone: loggedUser.phoneNumber || "N/A",
        password: "defaultPassword123", // Default placeholder password
      };

      const token: TUserToken = {
        id: loggedUser.uid,
        name: loggedUser.displayName,
        email: loggedUser.email,
      };

      dispatch(setUser({ user: userInfo, token }));
      toast.success("Google login successful.", { id: toastId });
      navigate("/");
    } catch (error: any) {
      console.error("Error during Google login:", error);
      toast.error("Google login failed. Please try again.", { id: toastId });
    }
  };

  return (
    <Container className="pt-5">
      <div className="flex items-center justify-center">
        <div className="px-7 py-5 rounded-lg w-full max-w-md border-2">
          <h2 className="text-3xl font-semibold text-center mb-1">Login</h2>
          <p className="text-center text-gray-400 mb-3">
            Use your account info to log in to our service.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base leading-5">
                Email
              </Label>
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

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-base leading-5">
                  Password
                </Label>
                <a href="/forgotPassword" className="text-xs text-red-800 underline hover:underline">
                  Forget Password?
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

            {/* OTP Verification
           {!isOTPRequested ? (
              <Button
                type="button"
                className="w-full bg-blue-600 text-white"
                onClick={handleSendOTP}
              >
                Send OTP
              </Button>
            ) : (
              <div>
                <Label className="text-base leading-5">Enter OTP</Label>
                <Input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
                <Button onClick={handleVerifyOTP} className="mt-2 w-full">
                  Verify OTP
                </Button>
              </div>
            )}  */}

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-blue-600 text-white">
              Login
            </Button>
          </form>

          {/* Google Login */}
          <div className="mt-4 flex items-center justify-center">
            <Button
              onClick={handleGoogleLogin}
              className="text-base py-3 rounded-xl"
              variant="outline"
            >
              <IoLogoGoogle className="mr-2" />
              Login with <span className="ml-1 font-bold">Google</span>
            </Button>
          </div>

          {/* Registration Redirect */}
          <p className="text-center mt-4 text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
