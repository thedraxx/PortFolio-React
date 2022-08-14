import { createSlice } from '@reduxjs/toolkit'

export const modeActiveSlice = createSlice({
  name: 'modeActive',
  initialState: {
    active: false
  },
  reducers: {
    setActive: (state) => {
      state.active = !state.active
    }
  }
})
export const { setActive } = modeActiveSlice.actions
