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
            query: ({ id, status }) =>({
                url: `/server/change-status/${id}`,
                method: "PATCH",
                body: { status }
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
        connectServer: builder.mutation({
            query: (serverInfo) =>({
                url: "/server/connect",
                method: "POST",
                body: serverInfo
            }),
            invalidatesTags: ['server'],
        }),
        disconnectServer: builder.mutation({
            query: (serverInfo) =>({
                url: "/server/disconnect",
                method: "POST",
                body: serverInfo
            }),
            invalidatesTags: ['server'],
        }),
        getAServerActiveUser: builder.query({
            query: () => ({
              url: '/server/active-users',
              method: 'GET', 
            }),
            providesTags: ['server'],
        }),
        checkVpnServerStatus: builder.query({
            query: () => ({
              url: '/server/status',
              method: 'GET', 
            }),
            providesTags: ['server'],
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
    useUpdateServerStatusMutation,
    useConnectServerMutation,
    useDisconnectServerMutation,
    useGetAServerActiveUserQuery,
    useCheckVpnServerStatusQuery
 } = serverApi;