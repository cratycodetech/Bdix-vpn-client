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
            query: (userInfo) =>({
                url: "/auth/send-otp",
                method: "POST",
                body: userInfo
            })
        }),
        verifyOTP: builder.mutation({
            query: (userInfo) =>({
                url: "/auth/verify-otp",
                method: "POST",
                body: userInfo
            })
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
                method: "POST",
                body: userInfo
            })
        }),
    })
})

export const {
    useLoginMutation, 
    useSignUpMutation, 
    useResetPassMutation, 
    useLogoutMutation,
    useSendOTPMutation,
    useVerifyOTPMutation
} = authApi