/* eslint-disable no-empty */
import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${import.meta.env.VITE_MESSAGES_PER_PAGE}`,
      }),
      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get("X-Total-Count");
        return {
          data: apiResponse,
          totalCount,
        };
      },
      async onCacheEntryAdded(
        arg, {
          cacheDataLoaded, cacheEntryRemoved, updateCachedData
        }
      ) {
        // create socket
        const socket = io(import.meta.env.VITE_BASE_URL, {
          reconnection: true,
          reconnectionDelay: 1000,
          reconnectionAttempts: 10,
          transports: ["websocket"],
          agent: false,
          upgrade: false,
          rejectUnauthorized: false,
        });

        try {
          await cacheDataLoaded;
          socket.on("message", (data) => {
            updateCachedData((draft) => {
              draft.data.push(data?.data);
            });
          })
        } catch (error) {
          console.log(error);
        }

        await cacheEntryRemoved;
        socket.close();
      }
    }),
    getMoreMessages: builder.query({
      query: ({id, page}) => ({
        url: `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=${page}&_limit=${import.meta.env.VITE_MESSAGES_PER_PAGE}`,
      }),
      async onQueryStarted({id}, { queryFulfilled, dispatch }) {
        try {
          const messages = await queryFulfilled;
          if (messages?.data?.length > 0) {
            // update conversations cache pessimistically start
            dispatch(
              apiSlice.util.updateQueryData(
                "getMessages",
                id,
                (draft) => {
                  return {
                    data: [
                      ...draft.data,
                      ...messages.data,
                    ],
                    totalCount: Number(draft.totalCount),
                  }
                }
              )
            );
            // update conversations cache pessimistically end
          }
        } catch (error) { }
      }
    }),
    addMessage: builder.mutation({
      query: (data) => ({
        url: `/messages`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
