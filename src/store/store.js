import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game";

export const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

