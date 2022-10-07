import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import spaceReducer from "./spaces/space-slice";
import registerSlice from "./register/registerSlice";

const store = configureStore({
  reducer: {
    spaces: spaceReducer,
    auth: authSlice,
    register: registerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
