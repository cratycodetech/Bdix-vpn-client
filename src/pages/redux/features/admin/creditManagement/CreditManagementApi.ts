import { baseApi } from "@/pages/redux/api/baseApi";


const CreditManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllCredit: builder.query({
            query: (creditInfo) =>({
                url: "/credit/all",
                method: "GET",
                body: creditInfo
            }),
            providesTags: ['credit'],
        }),
        getAllRequests: builder.query({
            query: (creditInfo) =>({
                url: "/credit/all-request",
                method: "GET",
                body: creditInfo
            }),
            providesTags: ['credit'],
        }),
        countPendingRequestCredits: builder.query({
            query: (creditInfo) =>({
                url: "/credit/pending-request-count",
                method: "GET",
                body: creditInfo
            }),
            providesTags: ['credit'],
        }),
        getMonthlyCreditSummary: builder.query({
            query: (creditInfo) =>({
                url: "/credit/credit-summary",
                method: "GET",
                body: creditInfo
            }),
            providesTags: ['credit'],
        }),
        GenerateCredits: builder.mutation({
            query: (creditInfo) =>({
                url: "/credit/add",
                method: "POST",
                body: creditInfo
            }),
            invalidatesTags: ['credit'],
        }),
        transferCreditToReseller: builder.mutation({
            query: (creditInfo) =>({
                url: "/credit/credit-transfer",
                method: "POST",
                body: creditInfo
            }),
            invalidatesTags: ['credit'],
        }),

    })
})

export const {
    useGetAllCreditQuery,
    useGetAllRequestsQuery,
    useCountPendingRequestCreditsQuery,
    useGetMonthlyCreditSummaryQuery,
    useGenerateCreditsMutation,
    useTransferCreditToResellerMutation,


 } = CreditManagementApi;