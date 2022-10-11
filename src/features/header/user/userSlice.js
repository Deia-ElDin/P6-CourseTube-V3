import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayUser: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleMiniSearchBtnClickEffectOnUser: (state) => {
      // check middleHeaderSlice.js (line 25)
      if (window.innerWidth <= 585) {
        state.displayUser = false;
      }
    },
    handleMiddleHeaderArrowBtnsClickEffectOnUser: (state) => {
      state.displayUser = true;
    },
  },
});

export const {
  handleMiniSearchBtnClickEffectOnUser,
  handleMiddleHeaderArrowBtnsClickEffectOnUser,
} = userSlice.actions;

export const DisplayUser = (state) => state.user.displayUser;

export default userSlice.reducer;
