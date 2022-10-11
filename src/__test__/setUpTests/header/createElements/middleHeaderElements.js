import createElements from '../createElements';

const middleHeaderElements = () => {
  const [
    middleHeaderSection,
    searchArrowBtn,
    searchLabel,
    searchInput,
    searchBtn,
    searchBtnIcon,
    micBtn,
    micOffIcon,
    micOnIcon,
  ] = createElements({
    middleHeaderSection: true,
    searchArrowBtn: true,
    searchLabel: true,
    searchInput: true,
    searchBtn: true,
    searchBtnIcon: true,
    micBtn: true,
    micOffIcon: true,
    micOnIcon: true,
  });

  return {
    middleHeaderSection,
    searchArrowBtn,
    searchLabel,
    searchInput,
    searchBtn,
    searchBtnIcon,
    micBtn,
    micOffIcon,
    micOnIcon,
  };
};

export default middleHeaderElements;
