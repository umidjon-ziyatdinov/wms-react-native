import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  profile: {
    name: "",
    id_admin: "",
  },
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, { payload }) => {
      state.authenticated = payload;
    },
    setProfile: (state, { payload }) => {
      state.profile = payload;
    },
  },
});
export const { setAuthenticated, setProfile } = authSlice.actions;
export default authSlice.reducer;
