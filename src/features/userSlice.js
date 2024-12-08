import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    id: "",
    username: "",
    email: "",
  },
  reducers: {
    userLogin: (state, action) => {
      state.loggedIn = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      localStorage.setItem(
        "nsm-cinema-user",
        JSON.stringify({
          loggedIn: true,
          id: action.payload.id,
          username: action.payload.username,
          email: action.payload.email,
        })
      );
    },
    userLogout: (state) => {
      state.loggedIn = false;
      state.id = "";
      state.username = "";
      state.email = "";
      localStorage.removeItem("nsm-cinema-user");
    },
    checkUserLocalStorage: (state) => {
      const user = JSON.parse(localStorage.getItem("nsm-cinema-user"));
      if (user && user.id && user.username && user.email) {
        state.id = user.id;
        state.loggedIn = true;
        state.username = user.username;
        state.email = user.email;
      } else {
        state.loggedIn = false;
        state.username = "";
        state.email = "";
      }
    },
  },
});

export const { userLogin, userLogout, checkUserLocalStorage } =
  userSlice.actions;
export default userSlice.reducer;
