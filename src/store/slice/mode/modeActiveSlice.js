import { createSlice } from '@reduxjs/toolkit';

export const modeActiveSlice = createSlice({
    name: 'modeActive',
    initialState: {
        active: false,
    },
    reducers: {
        setActive: (state) => {
            if (state.active) {
                state.active = false;
            } else {
                state.active = true;
            }
        }
    }
});


// Action creators are generated for each case reducer function
export const { setActive } = modeActiveSlice.actions;