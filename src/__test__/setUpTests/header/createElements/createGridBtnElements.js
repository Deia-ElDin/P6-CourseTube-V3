import createElements from '../../createElements';

const handleGridBtnTest = () => {
  const [
    themeBtn,
    gridBtn,
    slider,
    contactMeBtn,
    rightHeaderCloseBtn,
    coursetubePage,
  ] = createElements({
    themeBtn: true,
    gridBtn: true,
    contactMeBtn: true,
    slider: true,
    rightHeaderCloseBtn: true,
    coursetubePage: true,
  });

  return {
    themeBtn,
    gridBtn,
    slider,
    contactMeBtn,
    rightHeaderCloseBtn,
    coursetubePage,
  };
};

export default handleGridBtnTest;
