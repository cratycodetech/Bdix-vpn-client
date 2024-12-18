import { baseApi } from "@/pages/redux/api/baseApi";

const adminUserManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (userInfo) => ({
        url: "/user/all",
        method: "GET",
        body: userInfo,
      }),
      providesTags: ["user"],
    }),
    updateProfile: builder.mutation({
      query: ({ userId, userInfo }) => ({
        url: `/user/update-profile/${userId}`,
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: ["premiumUser"],
    }),
    GetASingleUser: builder.query({
      query: (id) => ({
        url: `/user/single/${id}`,
        method: "GET",
      }),
      providesTags: ["premiumUser"],
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/user/change-role/${userId}`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["premiumUser"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useUpdateProfileMutation,
  useGetASingleUserQuery,
  useUpdateUserRoleMutation,
} = adminUserManagementApi;
