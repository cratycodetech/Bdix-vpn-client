import { baseApi } from "@/pages/redux/api/baseApi";


const serverApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addNewServer: builder.mutation({
            query: (serverInfo) =>({
                url: "/server/create",
                method: "POST",
                body: serverInfo
            }),
            invalidatesTags: ['server'],
        }),
        getAllServer: builder.query({
            query: (serverInfo) =>({
                url: "/server/all",
                method: "GET",
                body: serverInfo
            }),
            providesTags: ['server'],
        }),
        getCountActiveServer: builder.query({
            query: (serverInfo) =>({
                url: "/server/count",
                method: "GET",
                body: serverInfo
            }),
            providesTags: ['server'],
        }),
        GetSingleServer: builder.query({
            query: (serverId) =>({
                url: `/server/single/${serverId}`,
                method: "GET",
            }),
            providesTags: ['server'],
        }),
        GetAllServerStatus: builder.query({
            query: (status) =>({
                url: `/server/single/${status}`,
                method: "GET",
            }),
            providesTags: ['server'],
        }),
        updateServer: builder.mutation({
            query: (options) =>({
                url: `/server/update-profile/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['server'],
        }),
        updateServerStatus: builder.mutation({
            query: (options) =>({
                url: `/server/change-status/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['server'],
        }),
        deleteServer: builder.mutation({
            query: (id) =>({
                url: `/server/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['server'],
        }),
    })
})

export const {
    useAddNewServerMutation, 
    useGetAllServerQuery, 
    useGetSingleServerQuery, 
    useDeleteServerMutation, 
    useUpdateServerMutation,
    useGetAllServerStatusQuery,
    useGetCountActiveServerQuery,
    useUpdateServerStatusMutation
 } = serverApi;