import createElements from '../../createElements';

const createMiniBtnsElements = () => {
  const [
    leftHeaderSection,
    logo,
    middleHeaderSection,
    searchArrowBtn,
    searchInput,
    searchBtn,
    micBtn,
    rightHeaderSection,
    optionsArrowBtn,
    themeBtn,
    gridBtn,
    contactMeBtn,
    miniSearchBtn,
    miniOptionsBtn,
  ] = createElements({
    leftHeaderSection: true,
    logo: true,
    middleHeaderSection: true,
    searchArrowBtn: true,
    searchInput: true,
    searchBtn: true,
    micBtn: true,
    rightHeaderSection: true,
    optionsArrowBtn: true,
    themeBtn: true,
    gridBtn: true,
    contactMeBtn: true,
    miniSearchBtn: true,
    miniOptionsBtn: true,
  });

  return {
    leftHeaderSection,
    logo,
    middleHeaderSection,
    searchArrowBtn,
    searchInput,
    searchBtn,
    micBtn,
    rightHeaderSection,
    optionsArrowBtn,
    themeBtn,
    gridBtn,
    contactMeBtn,
    miniSearchBtn,
    miniOptionsBtn,
  };
};

export default createMiniBtnsElements;
