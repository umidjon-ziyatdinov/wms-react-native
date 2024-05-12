import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  errorLP: null,
  error: null,
  info: null,
  onOk: null,
  lang: "ko",
  initialRender: false,
  rerender: false,
  openInquiry: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setErrorLP: (state, { payload }) => {
      state.error = payload;
    },
    setInfo: (state, { payload }) => {
      state.info = payload;
    },
    setOnOk: (state, { payload }) => {
      state.onOk = payload;
    },
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
    setRerender: (state, { payload }) => {
      state.rerender = payload;
    },
    setInquiry: (state, { payload }) => {
      state.openInquiry = payload;
    },
    setInitialRender: (state, { payload }) => {
      state.initialRender = payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setInfo,
  setOnOk,
  setLang,
  setRerender,
  setInquiry,
  setErrorLP,
  setInitialRender,
} = appSlice.actions;

export default appSlice.reducer;
