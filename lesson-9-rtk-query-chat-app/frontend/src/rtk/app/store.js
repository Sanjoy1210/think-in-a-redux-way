import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@rtk/features/api/apiSlice";
import authSliceReducer from "@rtk/features/auth/authSlice";
import conversationsSliceReducer from "@rtk/features/conversations/conversationsSlice";
import messagesSliceReducer from "@rtk/features/messages/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    conversations: conversationsSliceReducer,
    messages: messagesSliceReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
