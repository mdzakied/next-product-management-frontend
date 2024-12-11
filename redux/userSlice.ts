import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Gender = "Male" | "Female";
type Role = "Admin" | "Viewer";

export interface UserState {
  [x: string]: any;
  id: string | null;
  email: string | null;
  name: string | null;
  gender: Gender | null;
  role: Role | null;
}

const initialState: UserState = {
  id: null,
  email: null,
  name: null,
  gender: null,
  role: null,
};

const userSlice = createSlice({
  name: "user", // Nama slice
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.gender = action.payload.gender;
      state.role = action.payload.role;
    },
    clearUser: (state) => {
      state.id = null;
      state.email = null;
      state.name = null;
      state.gender = null;
      state.role = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
