/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: `/tasks`
      })
    }),
    getTask: builder.query({
      query: (id) => ({
        url: `/tasks/${id}`,
      }),
      keepUnusedDataFor: 0,
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const {data: task } = await queryFulfilled;
          
          // update task pessimistically start
          const patchResult = dispatch(
            apiSlice.util.updateQueryData(
              "getTasks",
              undefined,
              (draft) => {
                console.log("draft", draft);
                draft.push(task);
              }
            )
          );
          // update task pessimistically end
        
        } catch (err) {
        }
      }
    }),
    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedTask } = await queryFulfilled;

          // update task cache pessimistically start
          dispatch(
            apiSlice.util.updateQueryData(
              "getTasks",
              undefined,
              (draft) => {
                const idx = draft.findIndex((d) => d.id == arg?.id);
                Object.assign(draft[idx], updatedTask);
              }
            )
          );
          // update task cache pessimistically end
        } catch (error) {
          
        }
      }
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // update tasks cache optimistically start
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getTasks",
            undefined,
            (draft) => {
              const idx = draft.findIndex(d => d.id === arg);
              
              draft.splice(idx, 1);
            }
          )
        );
        // update tasks cache optimistically end

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      }
    })
  }),
});

export const {
  useGetTaskQuery,
  useGetTasksQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation
} = tasksApi;
