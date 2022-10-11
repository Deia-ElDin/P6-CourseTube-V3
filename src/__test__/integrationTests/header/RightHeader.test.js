import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import createThemeBtnElements from '../../setUpTests/header/createElements/createThemeBtnElements';
import createGridBtnElements from '../../setUpTests/header/createElements/createGridBtnElements';
import createContactMeBtnElements from '../../setUpTests/header/createElements/createContactMeBtnElements';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';

// Note: we will test the RiddleHeader compoenent's effect on the whole web within a fixed width

describe('App / RightHeader (Desktop / Pc)', () => {
  beforeEach(() => {
    global.innerWidth = 1300;
    renderWithProviders(<App />);
  });

  describe('Click on themeBtn', () => {
    test('once the user clicks on the themeBtn, the 3 buttons (themeBtn, gridBtn, contactMeBtn) should disappear, 3 theme buttons should appear (not including the current theme) and the rightHeaderCloseBtn should appear', () => {
      // Step 1: Initially we should have (themeBtn, gridBtn, contactMeBtn) rendered on the screen
      const elements1 = createThemeBtnElements();
      expect(elements1.themeBtn).toBeInTheDocument();
      expect(elements1.gridBtn).toBeInTheDocument();
      expect(elements1.contactMeBtn).toBeInTheDocument();
      expect(elements1.themeBlocks.length).toBe(0);
      expect(elements1.rightHeaderCloseBtn).not.toBeInTheDocument();

      // Step 2: Clicking on the themeBtn
      fireEvent.click(elements1.themeBtn);

      // Step 3: (themeBtn, gridBtn, contactMeBtn) should disappear
      expect(elements1.themeBtn).not.toBeInTheDocument();
      expect(elements1.gridBtn).not.toBeInTheDocument();
      expect(elements1.contactMeBtn).not.toBeInTheDocument();

      // Step 4: 3 themeBlocks (blue, lightBrown, dark) should appear + rightHeaderCloseBtn
      // Note: The initial theme id === light (rightHeaderSlice.js Line 9)
      const elements2 = createThemeBtnElements();
      expect(elements2.rightHeaderCloseBtn).toBeInTheDocument();
      expect(elements2.themeBlocks.length).toBe(3);
      const [firstTheme1, secondTheme1, thirdTheme1] = elements2.themeBlocks;
      expect(firstTheme1).toBeInTheDocument();
      expect(firstTheme1).toHaveAttribute('id', 'blue');
      expect(secondTheme1).toBeInTheDocument();
      expect(secondTheme1).toHaveAttribute('id', 'lightBrown');
      expect(thirdTheme1).toBeInTheDocument();
      expect(thirdTheme1).toHaveAttribute('id', 'dark');

      // Step 5: Clicking on the theme1 which got the id === blue
      fireEvent.click(firstTheme1);

      // Step 6: The 3 themeBlocks should disappear
      expect(firstTheme1).not.toBeInTheDocument();
      expect(secondTheme1).not.toBeInTheDocument();
      expect(thirdTheme1).not.toBeInTheDocument();

      // Step 7: (themeBtn, gridBtn, contactMeBtn) should appear back again
      const elements3 = createThemeBtnElements();
      expect(elements3.themeBtn).toBeInTheDocument();
      expect(elements3.gridBtn).toBeInTheDocument();
      expect(elements3.contactMeBtn).toBeInTheDocument();
      expect(elements3.themeBlocks.length).toBe(0);
      expect(elements3.rightHeaderCloseBtn).not.toBeInTheDocument();

      // Step 8: Clicking on the themeBtn again (confirming that the theme with id === blue doesn't exist in the list and already applied)
      fireEvent.click(elements3.themeBtn);

      // Step 9: (themeBtn, gridBtn, contactMeBtn) should disappear
      expect(elements3.themeBtn).not.toBeInTheDocument();
      expect(elements3.gridBtn).not.toBeInTheDocument();
      expect(elements3.contactMeBtn).not.toBeInTheDocument();

      // Step 10: 3 themeBlocks (light, lightBrown, dark) should appear + rightHeaderCloseBtn
      const elements4 = createThemeBtnElements();
      expect(elements4.rightHeaderCloseBtn).toBeInTheDocument();
      expect(elements4.themeBlocks.length).toBe(3);
      const [firstTheme2, secondTheme2, thirdTheme2] = elements4.themeBlocks;
      expect(firstTheme2).toHaveAttribute('id', 'light');
      expect(secondTheme2).toHaveAttribute('id', 'lightBrown');
      expect(thirdTheme2).toHaveAttribute('id', 'dark');

      // Step 11: Clicking on the rightHeaderCloseBtn (incase the user doesn't want to change the theme)
      fireEvent.click(elements4.rightHeaderCloseBtn);

      // Step 12: The 3 themeBlocks should disappear
      expect(firstTheme2).not.toBeInTheDocument();
      expect(secondTheme2).not.toBeInTheDocument();
      expect(thirdTheme2).not.toBeInTheDocument();

      // Step 13: (themeBtn, gridBtn, contactMeBtn) should appear back again
      const elements5 = createThemeBtnElements();
      expect(elements5.themeBtn).toBeInTheDocument();
      expect(elements5.gridBtn).toBeInTheDocument();
      expect(elements5.contactMeBtn).toBeInTheDocument();
      expect(elements5.themeBlocks.length).toBe(0);
      expect(elements5.rightHeaderCloseBtn).not.toBeInTheDocument();
    });
  });

  describe('Click on gridBtn', () => {
    test('once the user clicks on the gridBtn, the 3 buttons (themeBtn, gridBtn, contactMeBtn) should disappear, the slider and the rightHeaderCloseBtn should appear, the user can change the slder value and the courseTubePage should change accordingly', () => {
      // Step 1: Initially we should have (themeBtn, gridBtn, contactMeBtn) rendered on the screen
      const elements1 = createGridBtnElements();
      expect(elements1.themeBtn).toBeInTheDocument();
      expect(elements1.gridBtn).toBeInTheDocument();
      expect(elements1.contactMeBtn).toBeInTheDocument();
      expect(elements1.slider).not.toBeInTheDocument();
      expect(elements1.rightHeaderCloseBtn).not.toBeInTheDocument();
      expect(elements1.coursetubePage).toBeInTheDocument();

      // Step 2: Clicking on the gridBtn
      fireEvent.click(elements1.gridBtn);

      // Step 3: (themeBtn, gridBtn, contactMeBtn) should disappear
      expect(elements1.themeBtn).not.toBeInTheDocument();
      expect(elements1.gridBtn).not.toBeInTheDocument();
      expect(elements1.contactMeBtn).not.toBeInTheDocument();

      // Step 4: the rightHeaderCloseBtn & the slider should appear
      // Note: innerwidth === 1300, slider min === 2, slider max === 3, slider value === max value (useWindowSize.js Lines 138 to 149), unless the user controls it (rightHeaderSlice.js Lines 52 to 55)
      const elements2 = createGridBtnElements();
      expect(elements2.slider).toBeInTheDocument();
      expect(elements2.rightHeaderCloseBtn).toBeInTheDocument();
      expect(elements2.slider).toHaveAttribute('min', '2');
      expect(elements2.slider).toHaveAttribute('max', '3');
      expect(elements2.slider).toHaveAttribute('value', '3');
      expect(elements1.coursetubePage).toHaveAttribute(
        'style',
        'grid-template-columns: repeat(3, 1fr);'
      );

      // Step 4: Changing the slider value, and the courseTube page style should change accordingly
      // Note: once the user starts changing the slider value, the userControlSlider state in the rightHeaderSlice.js Line 54 will switch to true & there's nothing will switch it back to false, the slider value will be always controlled by the user and not by the max value any more
      fireEvent.change(elements2.slider, { target: { value: 2 } });
      expect(elements2.slider).toHaveAttribute('value', '2');
      expect(elements1.coursetubePage).toHaveAttribute(
        'style',
        'grid-template-columns: repeat(2, 1fr);'
      );

      // Step 5: The slider still on the screen after changing the value
      expect(elements2.slider).toBeInTheDocument();
      expect(elements2.rightHeaderCloseBtn).toBeInTheDocument();
      expect(elements2.themeBtn).not.toBeInTheDocument();
      expect(elements2.gridBtn).not.toBeInTheDocument();
      expect(elements2.contactMeBtn).not.toBeInTheDocument();

      // Step 6: The user must click on the rightHeaderCloseBtn to get out of the slider section, and the courseTubePage should still contain the same inline style
      fireEvent.click(elements2.rightHeaderCloseBtn);

      const elements3 = createThemeBtnElements();
      expect(elements3.themeBtn).toBeInTheDocument();
      expect(elements3.gridBtn).toBeInTheDocument();
      expect(elements3.contactMeBtn).toBeInTheDocument();
      expect(elements3.themeBlocks.length).toBe(0);
      expect(elements3.rightHeaderCloseBtn).not.toBeInTheDocument();
      expect(elements1.coursetubePage).toHaveAttribute(
        'style',
        'grid-template-columns: repeat(2, 1fr);'
      );
    });
  });

  describe('Click on contactMeBtn', () => {
    test('once the user clicks on the contactMeBtn, the 3 buttons (themeBtn, gridBtn, contactMeBtn) will remain in the document, but the coursetubePage should disappear, the contactMePage and the contactMeCloseBtn should appear', () => {
      // Step 1: Initially we should have (themeBtn, gridBtn, contactMeBtn) rendered on the screen
      const elements1 = createContactMeBtnElements();
      expect(elements1.themeBtn).toBeInTheDocument();
      expect(elements1.gridBtn).toBeInTheDocument();
      expect(elements1.contactMeBtn).toBeInTheDocument();
      expect(elements1.coursetubePage).toBeInTheDocument();
      expect(elements1.contactMePage).not.toBeInTheDocument();
      expect(elements1.contactMeCloseBtn).not.toBeInTheDocument();

      // Step 2: Clicking on the contactMeBtn
      fireEvent.click(elements1.contactMeBtn);

      // Step 3: (themeBtn, gridBtn, contactMeBtn) will remain in the document, the coursetubePage should disappear, the contactMePage and the contactMeCloseBtn should appear
      expect(elements1.themeBtn).toBeInTheDocument();
      expect(elements1.gridBtn).toBeInTheDocument();
      expect(elements1.contactMeBtn).toBeInTheDocument();
      expect(elements1.coursetubePage).not.toBeInTheDocument();

      const elements2 = createContactMeBtnElements();
      expect(elements2.contactMePage).toBeInTheDocument();
      expect(elements2.contactMeCloseBtn).toBeInTheDocument();

      // Step 5: Clicking on the contactMeCloseBtn
      fireEvent.click(elements2.contactMeCloseBtn);

      // Step6: the contactMePage should disappear, the coursetubePage should appear
      const elements3 = createContactMeBtnElements();
      expect(elements1.themeBtn).toBeInTheDocument();
      expect(elements1.gridBtn).toBeInTheDocument();
      expect(elements1.contactMeBtn).toBeInTheDocument();
      expect(elements3.coursetubePage).toBeInTheDocument();
      expect(elements3.contactMePage).not.toBeInTheDocument();
      expect(elements3.contactMeCloseBtn).not.toBeInTheDocument();
    });
  });
});
