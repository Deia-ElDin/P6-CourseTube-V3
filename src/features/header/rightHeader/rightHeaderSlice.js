import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayRightHeader: true,
  displayMiniOptionsButton: false,
  displayOptionsArrowBtn: false,
  themeBtn: true,
  displayThemes: false,
  theme: 'light',
  gridBtn: true,
  displaySlider: false,
  userControlSlider: false,
  sliderValue: 0,
  sliderMin: 0,
  sliderMax: 0,
  contactMeBtn: true,
  closeBtn: false,
};

export const rightHeaderSlice = createSlice({
  name: 'rightHeader',
  initialState,
  reducers: {
    handleRightHeaderSetUp: (state, action) => {
      state.displayRightHeader = action.payload.displayRightHeader;
      state.displayMiniOptionsButton = action.payload.displayMiniOptionsButton;
      state.displayOptionsArrowBtn = action.payload.displayOptionsArrowBtn;
      state.gridBtn = action.payload.gridBtn;
      state.sliderMin = action.payload.sliderMin;
      state.sliderMax = action.payload.sliderMax;
      state.sliderValue = state.userControlSlider
        ? state.sliderValue
        : action.payload.sliderValue;
    },
    handleThemeBtnClick: (state) => {
      state.themeBtn = !state.themeBtn;
      if (window.innerWidth <= 450) state.gridBtn = false;
      else state.gridBtn = !state.gridBtn;
      state.contactMeBtn = !state.contactMeBtn;
      state.displayThemes = !state.displayThemes;
      state.closeBtn = !state.closeBtn;
    },
    handleThemeClick: (state, action) => {
      state.theme = action.payload;
    },
    handleGridBtnClick: (state) => {
      state.themeBtn = !state.themeBtn;
      state.gridBtn = !state.gridBtn;
      state.contactMeBtn = !state.contactMeBtn;
      state.displaySlider = true;
      state.closeBtn = !state.closeBtn;
    },
    handleSliderChange: (state, action) => {
      state.sliderValue = action.payload;
      state.userControlSlider = true;
    },
    handleCloseBtnClick: (state) => {
      state.themeBtn = true;
      if (window.innerWidth <= 450) state.gridBtn = false;
      else state.gridBtn = true;
      state.contactMeBtn = true;
      state.closeBtn = false;
      state.displayThemes = false;
      state.displaySlider = false;
    },
    handleMiniSearchBtnClickEffectOnRightHeader: (state) => {
      // check middleHeaderSlice.js (line 25) ---> IMPORTANT
      if (window.innerWidth <= 585) {
        // MiddleHeader / Search Componenets takes all the width
        // Everything else disappear
        state.displayRightHeader = false;
        state.displayMiniOptionsButton = false;
      } else {
        state.displayRightHeader = false;
        state.displayMiniOptionsButton = true;
      }
    },
    handleMiniOptionsBtnClickEffectOnRightHeader: (state) => {
      state.displayRightHeader = true;
      state.displayMiniOptionsButton = false;
    },
    handleBothArrowBtnsClickEffectOnRightHeader: (state) => {
      state.displayRightHeader = false;
      state.displayMiniOptionsButton = true;
    },
  },
});

export const {
  handleRightHeaderSetUp,
  handleThemeBtnClick,
  handleThemeClick,
  handleGridBtnClick,
  handleSliderChange,
  handleCloseBtnClick,
  displayGridBtnOrNot,
  setSliderMinValue,
  setSliderMaxValue,
  handleMiniSearchBtnClickEffectOnRightHeader,
  handleMiniOptionsBtnClickEffectOnRightHeader,
  handleBothArrowBtnsClickEffectOnRightHeader,
} = rightHeaderSlice.actions;

export const DisplayRightHeader = (state) =>
  state.rightHeader.displayRightHeader;
export const DisplayMiniOptionsButton = (state) =>
  state.rightHeader.displayMiniOptionsButton;
export const DisplayOptionsArrowBtn = (state) =>
  state.rightHeader.displayOptionsArrowBtn;
export const ThemeBtnState = (state) => state.rightHeader.themeBtn;
export const ActiveTheme = (state) => state.rightHeader.theme;
export const DisplayThemes = (state) => state.rightHeader.displayThemes;
export const GridBtnState = (state) => state.rightHeader.gridBtn;
export const DisplaySlider = (state) => state.rightHeader.displaySlider;
export const UserControlSlider = (state) => state.rightHeader.userControlSlider;
export const SliderValue = (state) => state.rightHeader.sliderValue;
export const SliderMin = (state) => state.rightHeader.sliderMin;
export const SliderMax = (state) => state.rightHeader.sliderMax;
export const ContactMeBtnState = (state) => state.rightHeader.contactMeBtn;
export const CloseBtnState = (state) => state.rightHeader.closeBtn;

export default rightHeaderSlice.reducer;
