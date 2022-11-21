import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "entites/auth";
import { registerReducer } from "entites/register";
import { yourSpacesReducer } from "entites/spaces/yours";
import { recentSpacesReducer } from "entites/spaces/recent";
import { additionalSpacesReducer } from "entites/spaces/additional";
import { searchSpacesReducer } from "entites/spaces/search";

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    yourSpaces: yourSpacesReducer,
    recentSpaces: recentSpacesReducer,
    additionalSpaces: additionalSpacesReducer,
    searchSpaces: searchSpacesReducer,
  },
});

export default store;
