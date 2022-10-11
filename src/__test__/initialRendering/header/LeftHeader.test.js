import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import LeftHeader from '../../../features/header/leftHeader/LeftHeader';
import createElements from '../../setUpTests/createElements';

describe('LeftHeader', () => {
  beforeEach(() => {
    renderWithProviders(<LeftHeader />);
  });

  describe('Features', () => {
    describe('Toggle Btn', () => {
      test('should render the toggleBtn & the toggleBtn icon', () => {
        const [toggleBtn, toggleBtnIcon] = createElements({
          toggleBtn: true,
          toggleBtnIcon: true,
        });
        expect(toggleBtn).toBeInTheDocument();
        expect(toggleBtnIcon).toBeInTheDocument();
      });
    });

    describe('WebLogo', () => {
      describe('Logo', () => {
        test('should render the logo', () => {
          const [logo] = createElements({ logo: true });
          expect(logo).toBeInTheDocument();
        });
      });
      describe('name', () => {
        test('should render the name', () => {
          const [name] = createElements({ name: true });
          expect(name).toBeInTheDocument();
        });
      });
    });
  });
});
