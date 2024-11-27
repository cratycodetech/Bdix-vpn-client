import { baseApi } from "../../api/baseApi"


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (userInfo) =>({
                url: "/auth/login",
                method: "POST",
                body: userInfo
            })
        }),
        signUp: builder.mutation({
            query: (userInfo) =>({
                url: "/auth/signup",
                method: "POST",
                body: userInfo
            })
        }),
        sendOTP: builder.mutation({
            query: (email) => ({
              url: "/auth/send-otp",
              method: "POST",
              body: { email }, // Send only the email as required by your backend
            }),
        }),
          verifyOTP: builder.mutation({
            query: (otpInfo) => ({
              url: "/auth/verify-otp",
              method: "POST",
              body: otpInfo, // Accept `{ email, otp }` from the frontend
            }),
        }),
        resetPass: builder.mutation({
            query: (userInfo) =>({
                url: "/auth/reset-password",
                method: "POST",
                body: userInfo
            })
        }),
        logout: builder.mutation({
            query: (userInfo) =>({
                url: "/auth/logout",
                method: "DELETE",
                body: userInfo
            })
        }),
        checkAdmin: builder.query<boolean, string | undefined>({
            query: (email) => `/user/admin/${email}`, // API endpoint for admin check
            providesTags: ["Admin"], 
        }),
        checkReseller: builder.query<boolean, string | undefined>({
            query: (email) => `/user/reseller/${email}`, // API endpoint for admin check
            providesTags: ["reseller"], 
        }),
    })
})

export const {
    useLoginMutation, 
    useSignUpMutation, 
    useResetPassMutation, 
    useLogoutMutation,
    useSendOTPMutation,
    useVerifyOTPMutation,
    useCheckAdminQuery,
    useCheckResellerQuery
} = authApi