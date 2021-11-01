import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  userName:"",
  authToken: "",
  userId: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUsername: (state,action) =>{
      state.userName = action.payload;
    }
  },
});
export const {  setAuthentication, setUsername } =
  authSlice.actions;
export default authSlice.reducer;
