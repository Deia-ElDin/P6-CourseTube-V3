import createElements from '../createElements';

const middleHeaderElements = () => {
  const [
    rightHeaderSection,
    optionsArrowBtn,
    themeBtn,
    themeBtnIcon,
    themeBlocks,
    colorDivs,
    gridBtn,
    gridBtnIcon,
    slider,
    contactMeBtn,
    contactMeBtnIcon,
    rightHeaderCloseBtn,
    rightHeaderCloseBtnIcon,
  ] = createElements({
    rightHeaderSection: true,
    optionsArrowBtn: true,
    themeBtn: true,
    themeBtnIcon: true,
    themeBlocks: true,
    colorDivs: true,
    gridBtn: true,
    gridBtnIcon: true,
    slider: true,
    contactMeBtn: true,
    contactMeBtnIcon: true,
    rightHeaderCloseBtn: true,
    rightHeaderCloseBtnIcon: true,
  });

  return {
    rightHeaderSection,
    optionsArrowBtn,
    themeBtn,
    themeBtnIcon,
    themeBlocks,
    colorDivs,
    gridBtn,
    gridBtnIcon,
    slider,
    contactMeBtn,
    contactMeBtnIcon,
    rightHeaderCloseBtn,
    rightHeaderCloseBtnIcon,
  };
};

export default middleHeaderElements;
