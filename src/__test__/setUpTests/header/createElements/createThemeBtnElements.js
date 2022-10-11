import createElements from '../../createElements';

const handleThemeBtnTest = () => {
  const [themeBtn, themeBlocks, gridBtn, contactMeBtn, rightHeaderCloseBtn] =
    createElements({
      themeBtn: true,
      themeBlocks: true,
      gridBtn: true,
      contactMeBtn: true,
      rightHeaderCloseBtn: true,
    });

  return {
    themeBtn,
    themeBlocks,
    gridBtn,
    contactMeBtn,
    rightHeaderCloseBtn,
  };
};

export default handleThemeBtnTest;
