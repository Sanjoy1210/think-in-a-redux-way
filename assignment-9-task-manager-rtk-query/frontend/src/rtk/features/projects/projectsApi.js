/* eslint-disable no-empty */
import { apiSlice } from "../api/apiSlice";
import { setInitialSelected } from "../filters/filtersSlice";

export const projectsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: `/projects`,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: projects } = await queryFulfilled;
          const selectedProjects = projects?.map((project) => project?.projectName);
          dispatch(setInitialSelected(selectedProjects));
        } catch (error) {
          console.log({ error });
        }
      }
    }),
  }),
});

export const {
  useGetProjectsQuery,
} = projectsApi;
