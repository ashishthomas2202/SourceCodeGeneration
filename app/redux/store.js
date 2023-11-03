"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
