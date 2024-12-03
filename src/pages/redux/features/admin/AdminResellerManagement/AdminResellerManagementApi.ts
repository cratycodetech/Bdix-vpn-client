import { baseApi } from "@/pages/redux/api/baseApi";


const AdminResellerApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getTotalResellers: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller/total-resellers",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getLowCreditResellers: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller/low-credits",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getCountTotalActivePremiumUsers: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller/count",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getTotalAvailableCredits: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller/total-credits",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getTotalPremiumUsersForAllReseller: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller/users/counts",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getAllUsersForSingleReseller: builder.query({
            query: (resellerId) =>({
                url: `/reseller/single/${resellerId}`,
                method: "GET",
            }),
            providesTags: ['reseller'],
        }),
        getCountActiveResellers: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller/active/count",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getSingleResellerAvailableCredit: builder.query({
            query: (email) =>({
                url: `/reseller/single-reseller/${email}`,
                method: "GET",
            }),
            providesTags: ['reseller'],
        }),
    })
})

export const {
    useGetTotalResellersQuery,
    useGetLowCreditResellersQuery,
    useGetCountTotalActivePremiumUsersQuery,
    useGetTotalAvailableCreditsQuery,
    useGetTotalPremiumUsersForAllResellerQuery,
    useGetAllUsersForSingleResellerQuery,
    useGetCountActiveResellersQuery,
    useGetSingleResellerAvailableCreditQuery


 } = AdminResellerApi;