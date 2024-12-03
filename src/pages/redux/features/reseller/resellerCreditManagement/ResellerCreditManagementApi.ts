import { baseApi } from "@/pages/redux/api/baseApi";


const ResellerCreditManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllUserCreditRequest: builder.query({
            query: (resellerInfo) =>({
                url: "/user-credit-request/all",
                method: "GET",
                body: resellerInfo
            }),
            providesTags: ['reseller'],
        }),
        createCreditRequest: builder.mutation({
            query: (creditInfo) =>({
                url: "/request/create",
                method: "POST",
                body: creditInfo
            }),
            invalidatesTags: ['credit'],
        }),
    })
})

export const {
    useGetAllUserCreditRequestQuery,
    useCreateCreditRequestMutation


 } = ResellerCreditManagementApi;