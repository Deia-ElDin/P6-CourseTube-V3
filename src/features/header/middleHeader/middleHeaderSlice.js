import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayMiddleHeader: true,
  displayMiniSearchButton: false,
  displaySearchArrowBtn: false,
  searchInputValue: '',
};

export const middleHeaderSlice = createSlice({
  name: 'middleHeader',
  initialState,
  reducers: {
    handleMiddleHeaderSetUp: (state, action) => {
      state.displayMiddleHeader = action.payload.displayMiddleHeader;
      state.displayMiniSearchButton = action.payload.displayMiniSearchButton;
      state.displaySearchArrowBtn = action.payload.displaySearchArrowBtn;
    },
    handleSearchInputChange: (state, action) => {
      state.searchInputValue = action.payload;
    },
    clearSearchInput: (state) => {
      state.searchInputValue = '';
    },
    handleMiniSearchBtnClickEffectOnMiddleHeader: (state) => {
      // miniSearchBtn appears only in 2 cases:
      // 1st case: according to useWindowSize.js (line 74) at (width <= 585)
      // 2nd case: once we click on the miniOptionsBtn which appears at (width <= 810) check useWindowSize.js (line 83), it collapse the middleHeader and miniSearchBtn appears at (width > 585 && width <= 810)
      state.displayMiddleHeader = true;
      state.displayMiniSearchButton = false;
    },
    handleMiniOptionsBtnClickEffectOnMiddleHeader: (state) => {
      if (window.innerWidth <= 750) {
        state.displayMiddleHeader = false;
        state.displayMiniSearchButton = true;
      }
    },
    handleRightHeaderArrowBtnClickEffectOnMiddleHeader: (state) => {
      if (window.innerWidth <= 585) {
        state.displayMiddleHeader = false;
        state.displayMiniSearchButton = true;
      } else {
        state.displayMiddleHeader = true;
        state.displayMiniSearchButton = false;
      }
    },
    handleMiddleHeaderArrowBtnClickEffectOnMiddleHeader: (state) => {
      state.displayMiddleHeader = false;
      state.displayMiniSearchButton = true;
    },
  },
});

export const {
  handleMiddleHeaderSetUp,
  handleSearchInputChange,
  clearSearchInput,
  handleMiniSearchBtnClickEffectOnMiddleHeader,
  handleMiniOptionsBtnClickEffectOnMiddleHeader,
  handleRightHeaderArrowBtnClickEffectOnMiddleHeader,
  handleMiddleHeaderArrowBtnClickEffectOnMiddleHeader,
} = middleHeaderSlice.actions;

export const DisplayMiddleHeader = (state) =>
  state.middleHeader.displayMiddleHeader;
export const DisplayMiniSearchButton = (state) =>
  state.middleHeader.displayMiniSearchButton;
export const DisplaySearchArrowBtn = (state) =>
  state.middleHeader.displaySearchArrowBtn;
export const SearchInputValue = (state) => state.middleHeader.searchInputValue;

export default middleHeaderSlice.reducer;
