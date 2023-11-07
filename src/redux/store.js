"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/src/redux/slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
