import { configureStore } from '@reduxjs/toolkit'
import { modeActiveSlice } from './slice/mode/modeActiveSlice'
import { projectSlice } from './slice/Skills/projects'

export const store = configureStore({
  reducer: {
    isActive: modeActiveSlice.reducer,
    projects: projectSlice.reducer
  }
})
