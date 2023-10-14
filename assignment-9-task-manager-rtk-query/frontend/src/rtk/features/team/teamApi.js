import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: () => ({
        url: `/team`,
      }),
    }),
  }),
});

export const {
  useGetTeamMembersQuery,
} = teamApi;