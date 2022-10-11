import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import RightHeader from '../../../features/header/rightHeader/RightHeader';
import createElements from '../../setUpTests/createElements';

describe('RightHeader', () => {
  beforeEach(() => {
    renderWithProviders(<RightHeader />);
  });

  describe('Features', () => {
    describe('Options Arrow Btn', () => {
      test('should not render the OptionsArrowBtn', () => {
        const [optionsArrowBtn] = createElements({ optionsArrowBtn: true });
        expect(optionsArrowBtn).not.toBeInTheDocument();
      });
    });

    describe('Theme Btn', () => {
      test('should render the themeBtn & the themeBtn icon', () => {
        const [themeBtn, themeBtnIcon] = createElements({
          themeBtn: true,
          themeBtnIcon: true,
        });
        expect(themeBtn).toBeInTheDocument();
        expect(themeBtnIcon).toBeInTheDocument();
      });
      test('should not render any of the themeBlock/colorDivs', () => {
        const [themeBlocks, colorDivs] = createElements({
          themeBlocks: true,
          colorDivs: true,
        });
        expect(themeBlocks.length).toBe(0);
        expect(colorDivs.length).toBe(0);
      });
    });

    describe('Grid Btn', () => {
      test('should render the gridBtn & the gridBtn icon', () => {
        const [gridBtn, gridBtnIcon] = createElements({
          gridBtn: true,
          gridBtnIcon: true,
        });
        expect(gridBtn).toBeInTheDocument();
        expect(gridBtnIcon).toBeInTheDocument();
      });
      test('should not render the slider', () => {
        const [slider] = createElements({ slider: true });
        expect(slider).not.toBeInTheDocument();
      });
    });

    describe('Contact Me Btn', () => {
      test('should render the contactMeBtn & the contactMeBtn icon', () => {
        const [contactMeBtn, contactMeBtnIcon] = createElements({
          contactMeBtn: true,
          contactMeBtnIcon: true,
        });
        expect(contactMeBtn).toBeInTheDocument();
        expect(contactMeBtnIcon).toBeInTheDocument();
      });
    });

    describe('Close Btn', () => {
      test('should not render the closeBtn or the closeBtn icon', () => {
        const [rightHeaderCloseBtn, rightHeaderCloseBtnIcon] = createElements({
          rightHeaderCloseBtn: true,
          rightHeaderCloseBtnIcon: true,
        });
        expect(rightHeaderCloseBtn).not.toBeInTheDocument();
        expect(rightHeaderCloseBtnIcon).not.toBeInTheDocument();
      });
    });

    describe('Mini Options Btn', () => {
      test('should not render the miniOptionsBtn or the miniOptionsBtn icon', () => {
        const [miniOptionsBtn, miniOptionsBtnIcon] = createElements({
          miniOptionsBtn: true,
          miniOptionsBtnIcon: true,
        });
        expect(miniOptionsBtn).not.toBeInTheDocument();
        expect(miniOptionsBtnIcon).not.toBeInTheDocument();
      });
    });
  });
});
