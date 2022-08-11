import { createSlice } from '@reduxjs/toolkit'

export const modeActiveSlice = createSlice({
  name: 'modeActive',
  initialState: {
    active: false
  },
  reducers: {
    setActive: (state) => {
      if (state.active) {
        state.active = false
      } else {
        state.active = true
      }
    }
  }
})
export const { setActive } = modeActiveSlice.actions
