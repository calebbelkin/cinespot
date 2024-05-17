import { configureStore } from '@reduxjs/toolkit'
import textColorSlice from './textSlice'

export const store = configureStore({
  reducer: {
    textColor: textColorSlice,
  },
})