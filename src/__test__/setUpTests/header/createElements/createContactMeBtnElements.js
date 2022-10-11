import createElements from '../../createElements';

const handleContactMeBtnTest = () => {
  const [
    themeBtn,
    gridBtn,
    contactMeBtn,
    coursetubePage,
    contactMePage,
    contactMeCloseBtn,
  ] = createElements({
    themeBtn: true,
    gridBtn: true,
    contactMeBtn: true,
    coursetubePage: true,
    contactMePage: true,
    testContactMePage: true,
    contactMeCloseBtn: true,
  });

  return {
    themeBtn,
    gridBtn,
    contactMeBtn,
    coursetubePage,
    contactMePage,
    contactMeCloseBtn,
  };
};

export default handleContactMeBtnTest;
