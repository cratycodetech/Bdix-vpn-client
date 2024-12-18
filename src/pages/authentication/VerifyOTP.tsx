/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { useVerifyOTPMutation } from "../redux/features/auth/authApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const VerifyOtp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ otp: string }>();
  const [verifyOTP] = useVerifyOTPMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const email = location.state?.email;

  if (!email) {
    toast.error("Email not provided. Redirecting to login...");
    navigate("/login");
    return null;
  }

  // Handle Verify OTP
  const onSubmit = async (data: { otp: string }) => {
    const toastId = toast.loading("Verifying OTP...");

    try {
      const response = await verifyOTP({ email, otp: data.otp }).unwrap();
      setIsOtpVerified(true);
      localStorage.setItem("isOtpVerified", "true");
      toast.success(response.message, { id: toastId });
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error verifying OTP:", error);
      toast.error(error?.data?.message || "Invalid OTP.", { id: toastId });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-7 py-5 rounded-lg w-full max-w-md border-2">
        <h2 className="text-3xl font-semibold text-center mb-3">Verify OTP</h2>
        <p className="text-center text-gray-400 mb-4">
          Enter the OTP sent to your email: <strong>{email}</strong>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="otp" className="text-base leading-5">
              OTP
            </Label>
            <Controller
              name="otp"
              control={control}
              defaultValue=""
              rules={{
                required: "OTP is required.",
                pattern: {
                  value: /^[0-9]{6}$/, // Assuming OTP is a 6-digit number
                  message: "Invalid OTP format. Must be 6 digits.",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  className={`${errors.otp ? "border-red-500" : ""}`}
                />
              )}
            />
            {errors.otp && (
              <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-blue-600 text-white">
            Verify OTP
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
