import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null  // Flag to control color changes
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUsername: (state, action) => {
        state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;