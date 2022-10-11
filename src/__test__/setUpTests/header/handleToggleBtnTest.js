import { fireEvent } from '@testing-library/react';
import createElements from '../createElements';
import handleClasses from '../width/handleClasses';

const handleToggleBtnTest = (width) => {
  const [toggleBtn, sidebarSection, webBodySection] = createElements({
    toggleBtn: true,
    sidebarSection: true,
    webBodySection: true,
  });
  expect(sidebarSection).toHaveClass(handleClasses(width)[0]);
  expect(webBodySection).toHaveClass(handleClasses(width)[1]);

  fireEvent.click(toggleBtn);

  expect(sidebarSection).toHaveClass(handleClasses(width)[2]);
  expect(webBodySection).toHaveClass(handleClasses(width)[3]);
};

export default handleToggleBtnTest;
