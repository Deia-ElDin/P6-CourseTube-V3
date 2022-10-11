import handleWidthChangeTest from '../../setUpTests/width/handleWidthChangeTest';

// Note: we will test the app behavior with the changing of the width, Check useWindowSize.js Line (62 to 112)

describe('App on Pc/Desktop', () => {
  describe('Width > 1600', () => {
    handleWidthChangeTest({ width: 1601, sliderMin: 3, sliderMax: 5 });
  });
  describe('Width === 1600', () => {
    handleWidthChangeTest({ width: 1600, sliderMin: 3, sliderMax: 4 });
  });
  describe('Width === 1300', () => {
    handleWidthChangeTest({ width: 1300, sliderMin: 2, sliderMax: 3 });
  });
});

describe('App on IPad', () => {
  describe('Width === 1000', () => {
    handleWidthChangeTest({ width: 1000, sliderMin: 2, sliderMax: 3 });
  });

  describe('Width === 880', () => {
    handleWidthChangeTest({ width: 880, sliderMin: 1, sliderMax: 3 });
  });

  describe('Width === 810', () => {
    handleWidthChangeTest({ width: 810, sliderMin: 1, sliderMax: 2 });
  });
});

describe('App on Phone', () => {
  describe('Width === 585', () => {
    handleWidthChangeTest({ width: 585, sliderMin: 1, sliderMax: 2 });
  });

  describe('Width === 500', () => {
    handleWidthChangeTest({ width: 500, sliderMin: 1, sliderMax: 2 });
  });

  describe('Width === 450', () => {
    handleWidthChangeTest({ width: 450, sliderMin: 0, sliderMax: 0 });
  });
});
