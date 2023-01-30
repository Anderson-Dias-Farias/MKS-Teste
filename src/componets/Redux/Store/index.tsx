"use client";

import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Action } from "redux";
import Products from "../Slice/index";

export const store = configureStore({
  reducer: {
    Produtos: Products,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });
