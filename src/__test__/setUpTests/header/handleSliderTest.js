import userEvent from '@testing-library/user-event';
import createElements from '../createElements';

const handleSliderTest = ({ width, min, max }) => {
  if (min && max) {
    if (width <= 810) {
      const [miniOptionsBtn] = createElements({ miniOptionsBtn: true });
      userEvent.click(miniOptionsBtn);
      const [gridBtn] = createElements({ gridBtn: true });
      userEvent.click(gridBtn);
    } else {
      const [gridBtn] = createElements({ gridBtn: true });
      userEvent.click(gridBtn);
    }

    const [slider] = createElements({ slider: true });
    expect(slider).toHaveAttribute('min', `${min}`);
    expect(slider).toHaveAttribute('max', `${max}`);
    expect(slider).toHaveAttribute('value', `${max}`);

    const [coursetubePage] = createElements({ coursetubePage: true });
    expect(coursetubePage).toHaveAttribute(
      'style',
      `grid-template-columns: repeat(${max}, 1fr);`
    );
  }
};

export default handleSliderTest;
