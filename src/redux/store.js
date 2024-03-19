import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import { movieReducer } from "./reducer";
import { optionsReducer } from "./themeSlice";

const movieConfig = {
  key: "movie",
  storage,
  whitelist: ["favorites"],
};

const themeConfig = {
  key: "options",
  storage,
};

const rootReducer = combineReducers({
  movie: persistReducer(movieConfig, movieReducer),
  options: persistReducer(themeConfig, optionsReducer),
});
export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
