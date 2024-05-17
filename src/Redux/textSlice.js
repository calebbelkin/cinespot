import { createSlice } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';

const initialState = {
  color: 'black',
  canChangeColor: true  // Flag to control color changes
};

const textColorSlice = createSlice({
  name: 'textColor',
  initialState,
  reducers: {
    // setColor: (state, action) => {
    //   // Only change color if canChangeColor is true
    //   if (state.canChangeColor) {
    //     state.color = action.payload;
    //     state.canChangeColor = false;  // Optionally reset the flag
    //   }
    // },
    enableColorChange: (state) => {
      state.canChangeColor = true;  // Action to re-enable color changing
    },
    disableColorChange: (state) => {
      state.canChangeColor = false; // Action to disable color changing
    },
    setLastClickedId:(state, action) => {

        state.lastClickedId = action.payload
    }
  },
});

export const { setColor, enableColorChange, disableColorChange, setLastClickedId } = textColorSlice.actions;
export default textColorSlice.reducer;