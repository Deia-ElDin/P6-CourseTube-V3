import { renderWithProviders } from '../renderWithProviders';
import handleClasses from './handleClasses';
import handleInitialRenderingTest from './handleInitialRenderingTest';
import handleToggleBtnTest from '../header/handleToggleBtnTest';
import handleMiniBtnsTest from '../header/handleMiniBtnsTest';
import handleSliderTest from '../header/handleSliderTest';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';

const handleWidthChangeTest = ({ width, sliderMin, sliderMax }) => {
  const sidebarMainClass = handleClasses(width)[0];
  const webMainClass = handleClasses(width)[1];
  const sidebarSecondaryClass = handleClasses(width)[2];
  const webSecondaryClass = handleClasses(width)[3];

  beforeEach(() => {
    global.innerWidth = width;
    renderWithProviders(<App />);
  });

  test(`should render the header sections + sidebar should have className ${sidebarMainClass} & the web should have className ${webMainClass} & after clicking on the toggleBtn the sidebar should have className ${sidebarSecondaryClass} & the web should have className ${webSecondaryClass}`, () => {
    handleInitialRenderingTest(width);
    handleToggleBtnTest(width);
  });

  test(`testing the miniBtns & the arrowBtns at width === ${width})`, () => {
    handleMiniBtnsTest(width);
  });

  test(`should render the slider with the min value (${sliderMin}), max value (${sliderMax}) & the default value should be equal to the max value (${sliderMax})`, () => {
    handleSliderTest({
      width: width,
      min: sliderMin,
      max: sliderMax,
    });
  });
};

export default handleWidthChangeTest;
