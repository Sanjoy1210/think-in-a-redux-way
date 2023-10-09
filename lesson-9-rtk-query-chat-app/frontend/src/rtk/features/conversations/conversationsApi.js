/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../messages/messagesApi";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=${import.meta.env.VITE_CONVERSATIONS_PER_PAGE}`,
      }),
      transformResponse(apiResponse, meta) {
        const totalCount = meta.response.headers.get("X-Total-Count");

        return {
          data: apiResponse,
          totalCount
        };
      },
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
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
          socket.on("conversation", (data) => {
            updateCachedData((draft) => {
              const conversation = draft?.data?.find(c => c.id == data?.data?.id);

              if (conversation?.id) {
                conversation.message = data?.data?.message;
                conversation.timestamp = data?.data?.timestamp;
              } else {
                // draft?.data?.push(data?.data);
              }
            });
          })
        } catch (error) {
          console.log(error);
        }

        await cacheEntryRemoved;
        socket.close();
      },
    }),
    getMoreConversations: builder.query({
      query: ({email, page}) => ({
        url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=${page}&_limit=${import.meta.env.VITE_CONVERSATIONS_PER_PAGE}`,
      }),
      async onQueryStarted({ email }, { queryFulfilled, dispatch }) {
        try {
          const conversations = await queryFulfilled;
          if (conversations?.data?.length > 0) {
            // update conversations cache pessimistically start
            dispatch(
              apiSlice.util.updateQueryData(
                "getConversations",
                email,
                (draft) => {
                  return {
                    data: [
                      ...draft.data,
                      ...conversations.data,
                    ],
                    totalCount: Number(draft.totalCount),
                  }
                }
              )
            );
            // update conversations cache pessimistically end
          }
        } catch (error) {}
      }
    }),
    getConversation: builder.query({
      query: ({ userEmail, participantEmail }) => ({
        url: `/conversations?participants_like=${userEmail}-${participantEmail}&&participants_like=${participantEmail}-${userEmail}`,
      }),
    }),
    addConversation: builder.mutation({
      query: ({sender, data}) => ({
        url: "/conversations",
        method: "POST",
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const conversation = await queryFulfilled;
          
          // update conversations cache pessimistically start
          // dispatch(
          //   apiSlice.util.updateQueryData(
          //     "getConversations",
          //     arg.sender,
          //     (draft) => {
          //       draft.push(conversation.data);
          //     }
          //   )
          // );
          // update conversations cache pessimistically end
          
          if (conversation?.data?.id) {
            // silently entry to message table
            const users = arg.data.users;
            const senderUser = users.find(user => user.email === arg.sender);
            const receiverUser = users.find(user => user.email !== arg.sender);
            
            dispatch(messagesApi.endpoints.addMessage.initiate({
              conversationId: conversation?.data?.id,
              sender: senderUser,
              receiver: receiverUser,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            }));
          }
        } catch (error) {
          console.log({ error });
        }
      }
    }),
    editConversation: builder.mutation({
      query: ({ id, sender, data }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        // optimistic cache update start
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getConversations",
            arg.sender,
            (draft) => {
              const draftConversation = draft.data.find(d => d.id == arg.id);
              draftConversation.message = arg.data.message;
              draftConversation.timestamp = arg.data.timestamp;
            }
          )
        );
        // optimistic cache update end
        
        try {
          const conversation = await queryFulfilled;
          if (conversation?.data?.id) {
            // silently entry to message table
            const users = arg.data.users;
            const senderUser = users.find(user => user.email === arg.sender);
            const receiverUser = users.find(user => user.email !== arg.sender);

            dispatch(messagesApi.endpoints.addMessage.initiate({
              conversationId: conversation?.data?.id,
              sender: senderUser,
              receiver: receiverUser,
              message: arg.data.message,
              timestamp: arg.data.timestamp,
            }));

            // update messages cache pessimistically start
            // dispatch(
            //   apiSlice.util.updateQueryData(
            //     "getMessages",
            //     res.conversationId.toString(),
            //     (draft) => {
            //       draft.push(res);
            //     }
            //   )
            // )
            // update messages cache pessimistically end
          }  
        } catch (error) {
          patchResult.undo();
        }
        
      }
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation
} = conversationsApi;
