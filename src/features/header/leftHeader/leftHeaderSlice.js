import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayLeftHeader: true,
  toggleBtn: false,
  displayMiniLogo: false,
};

export const leftHeaderSlice = createSlice({
  name: 'leftHeader',
  initialState,
  reducers: {
    handleToggleBtnClick: (state) => {
      state.toggleBtn = !state.toggleBtn;
    },
    handleLogoClick: () => {
      window.location.reload();
      window.scrollTo(0, 0);
    },
    handleSearchInputFocus: (state) => {
      state.displayLeftHeader = false;
      state.displayMiniLogo = true;
    },
    handleSearchInputBlur: (state) => {
      state.displayLeftHeader = true;
      state.displayMiniLogo = false;
    },
    handleMiniSearchBtnClickEffectOnLeftHeader: (state) => {
      // check middleHeaderSlice.js (line 25)
      if (window.innerWidth <= 585) {
        // MiddleHeader / Search Componenets takes all the width
        // Everything else disappear
        state.displayLeftHeader = false;
        state.displayMiniLogo = false;
      }
    },
    handleMiniOptionsBtnClickEffectOnLeftHeader: (state) => {
      // check rightHeaderSlice.js (line 71)
      if (window.innerWidth <= 585) {
        state.displayLeftHeader = false;
        state.displayMiniLogo = true;
      }
    },
    handleBothArrowBtnsClickEffectOnLeftHeader: (state) => {
      state.displayLeftHeader = true;
      if (window.innerWidth <= 585) {
        state.displayMiniLogo = false;
      }
    },
  },
});

export const {
  handleToggleBtnClick,
  handleLogoClick,
  handleSearchInputFocus,
  handleSearchInputBlur,
  handleMiniSearchBtnClickEffectOnLeftHeader,
  handleMiniOptionsBtnClickEffectOnLeftHeader,
  handleBothArrowBtnsClickEffectOnLeftHeader,
} = leftHeaderSlice.actions;

export const DisplayLeftHeader = (state) => state.leftHeader.displayLeftHeader;
export const ToggleBtnState = (state) => state.leftHeader.toggleBtn;
export const DisplayMiniLogo = (state) => state.leftHeader.displayMiniLogo;

export default leftHeaderSlice.reducer;
