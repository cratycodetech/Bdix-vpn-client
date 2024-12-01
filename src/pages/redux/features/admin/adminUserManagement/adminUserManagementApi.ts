import { baseApi } from "@/pages/redux/api/baseApi"



const adminUserManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getAllUsers: builder.query({
            query: (userInfo) =>({
                url: "/user/all",
                method: "GET",
                body: userInfo
            }),
            providesTags: ['user'],
        }),
    })
})

export const {
    useGetAllUsersQuery, 

} = adminUserManagementApi