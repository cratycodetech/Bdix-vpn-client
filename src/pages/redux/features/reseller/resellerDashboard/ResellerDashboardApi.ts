import { baseApi } from "@/pages/redux/api/baseApi";


const ResellerDashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getCountAllUsers: builder.query({
            query: (resellerInfo) =>({
                url: "/reseller-dashboard/count-user",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getAllNormalUsers: builder.query({
            query: (resellerInfo) =>({
                url: "/user-dashboard/all/normal",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getTotalUsers: builder.query({
            query: (resellerInfo) =>({
                url: "/user-dashboard/all",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        getAllPremiumUsers: builder.query({
            query: (resellerInfo) =>({
                url: "/user-dashboard/all/premium",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),

    })
})

export const {
    useGetCountAllUsersQuery,
    useGetAllNormalUsersQuery,
    useGetTotalUsersQuery,
    useGetAllPremiumUsersQuery

 } = ResellerDashboardApi;