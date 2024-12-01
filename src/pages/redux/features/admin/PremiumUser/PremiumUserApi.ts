import { baseApi } from "@/pages/redux/api/baseApi";


const PremiumUserApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllPremiumUser: builder.query({
            query: (userInfo) =>({
                url: "/premium-user/all",
                method: "GET",
                body: userInfo
            }),
            providesTags: ['premiumUser'],
        }),
        GetSinglePremiumUser: builder.query({
            query: (userId) =>({
                url: `/premium-user/single/${userId}`,
                method: "GET",
            }),
            providesTags: ['premiumUser'],
        }),
        EditPremiumUser: builder.mutation({
            query: (userInfo) =>({
                url: "/premium-user/create",
                method: "POST",
                body: userInfo
            }),
            invalidatesTags: ['premiumUser'],
        }),
        updateSubscriptionStatus: builder.mutation({
            query: (userId: string) => ({
                url: `/premium-user/update-status/${userId}`,
                method: "PUT",
            }),
            invalidatesTags: ['premiumUser'], 
        }),
    })
})

export const {
    useGetAllPremiumUserQuery,
    useGetSinglePremiumUserQuery,
    useEditPremiumUserMutation,
    useUpdateSubscriptionStatusMutation

 } = PremiumUserApi;