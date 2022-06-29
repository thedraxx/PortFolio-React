import { configureStore } from '@reduxjs/toolkit'
import { modeActiveSlice } from './slice/mode/modeActiveSlice'

export const store = configureStore({
    reducer: {
        isActive: modeActiveSlice.reducer,
    },
})