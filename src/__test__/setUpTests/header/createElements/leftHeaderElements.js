import createElements from '../../createElements';

const leftHeaderElements = () => {
  const [leftHeaderSection, toggleBtn, toggleBtnIcon, logo, name] =
    createElements({
      leftHeaderSection: true,
      toggleBtn: true,
      toggleBtnIcon: true,
      logo: true,
      name: true,
    });

  return { leftHeaderSection, toggleBtn, toggleBtnIcon, logo, name };
};

export default leftHeaderElements;
