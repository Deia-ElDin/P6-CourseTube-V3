import createElements from '../createElements';

const handleInitialRenderingTest = (width) => {
  const [
    leftHeaderSection,
    middleHeaderSection,
    rightHeaderSection,
    miniSearchBtn,
    miniOptionsBtn,
    sidebarArrowBtn,
  ] = createElements({
    leftHeaderSection: true,
    middleHeaderSection: true,
    rightHeaderSection: true,
    miniSearchBtn: true,
    miniOptionsBtn: true,
    sidebarArrowBtn: true,
  });

  expect(leftHeaderSection).toBeInTheDocument();

  if (width <= 450) {
    expect(miniSearchBtn).toBeInTheDocument();
    expect(middleHeaderSection).not.toBeInTheDocument();
    expect(miniOptionsBtn).toBeInTheDocument();
    expect(rightHeaderSection).not.toBeInTheDocument();
  } else if (width <= 585) {
    expect(miniSearchBtn).toBeInTheDocument();
    expect(middleHeaderSection).not.toBeInTheDocument();
    expect(miniOptionsBtn).toBeInTheDocument();
    expect(rightHeaderSection).not.toBeInTheDocument();
    expect(sidebarArrowBtn).toBeInTheDocument();
  } else if (width <= 810) {
    expect(miniSearchBtn).not.toBeInTheDocument();
    expect(middleHeaderSection).toBeInTheDocument();
    expect(miniOptionsBtn).toBeInTheDocument();
    expect(rightHeaderSection).not.toBeInTheDocument();
    expect(sidebarArrowBtn).not.toBeInTheDocument();
  } else {
    expect(miniSearchBtn).not.toBeInTheDocument();
    expect(middleHeaderSection).toBeInTheDocument();
    expect(miniOptionsBtn).not.toBeInTheDocument();
    expect(rightHeaderSection).toBeInTheDocument();
    expect(sidebarArrowBtn).not.toBeInTheDocument();
  }
};

export default handleInitialRenderingTest;
