import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import regeneratorRuntime from 'regenerator-runtime';
import MiddleHeader from '../../../features/header/middleHeader/MiddleHeader';
import createElements from '../../setUpTests/createElements';

describe('MiddleHeader', () => {
  beforeEach(() => {
    renderWithProviders(<MiddleHeader />);
  });

  describe('Features', () => {
    describe('Search Arrow Btn', () => {
      test('should not render the searchArrowBtn', () => {
        const [searchArrowBtn] = createElements({ searchArrowBtn: true });
        expect(searchArrowBtn).not.toBeInTheDocument();
      });
    });

    describe('Form', () => {
      describe('Search Label', () => {
        test('should render the searchLabel', () => {
          const [searchLabel] = createElements({ searchLabel: true });
          expect(searchLabel).toBeInTheDocument();
        });
      });
      describe('Search Input', () => {
        test('should render the searchInput', () => {
          const [searchInput] = createElements({ searchInput: true });
          expect(searchInput).toBeInTheDocument();
        });
      });
      describe('Search Btn', () => {
        test('should render the searchBtn', () => {
          const [searchBtn] = createElements({ searchBtn: true });
          expect(searchBtn).toBeInTheDocument();
        });
      });
    });

    describe('Mic', () => {
      test("should render the mic with it's initial state micOff", () => {
        const [micBtn, micOffIcon, micOnIcon] = createElements({
          micBtn: true,
          micOffIcon: true,
          micOnIcon: true,
        });

        expect(micBtn).toBeInTheDocument();
        expect(micOffIcon).toBeInTheDocument();
        expect(micOnIcon).not.toBeInTheDocument();
      });
    });

    describe('Mini Search Btn', () => {
      test('should not render the miniSearchBtn or the miniSearchBtn icon', () => {
        const [miniSearchBtn, miniSearchBtnIcon] = createElements({
          miniSearchBtn: true,
          miniSearchBtnIcon: true,
        });
        expect(miniSearchBtn).not.toBeInTheDocument();
        expect(miniSearchBtnIcon).not.toBeInTheDocument();
      });
    });
  });
});
