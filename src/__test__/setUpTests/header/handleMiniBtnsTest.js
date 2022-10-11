import userEvent from '@testing-library/user-event';
import createElements from '../createElements';
import createMiniBtnsElements from './createElements/createMiniBtnsElements';
import handleDetails from '../handleDetails';
import handleCourseTubeTest from '../webBody/handleCourseTubeTest';

const handleMiniBtnsTest = (width) => {
  if (width <= 450) {
    // Step 1: checking which elements should be rendered
    const elements1 = createMiniBtnsElements();
    expect(elements1.leftHeaderSection).toBeInTheDocument();
    expect(elements1.miniSearchBtn).toBeInTheDocument();
    expect(elements1.middleHeaderSection).not.toBeInTheDocument();
    expect(elements1.miniOptionsBtn).toBeInTheDocument();
    expect(elements1.rightHeaderSection).not.toBeInTheDocument();

    // Step 2: testing the miniSearchBtn
    userEvent.click(elements1.miniSearchBtn);

    // Step 3: checking which elements should be rendered
    const elements2 = createMiniBtnsElements();
    expect(elements2.leftHeaderSection).not.toBeInTheDocument();
    expect(elements2.miniSearchBtn).not.toBeInTheDocument();
    expect(elements2.middleHeaderSection).toBeInTheDocument();
    expect(elements2.searchArrowBtn).toBeInTheDocument();
    expect(elements2.searchInput).toBeInTheDocument();
    expect(elements2.searchBtn).toBeInTheDocument();
    expect(elements2.micBtn).toBeInTheDocument();
    expect(elements2.miniOptionsBtn).not.toBeInTheDocument();
    expect(elements2.rightHeaderSection).not.toBeInTheDocument();

    // Step 4: testing the searchInput in this particular case
    userEvent.type(elements2.searchInput, 'react testing library');
    userEvent.click(elements2.searchBtn);

    // finding the matching courses
    const infosObject = handleDetails({
      target: 'coursesByName',
      requiredCourse: 'react testing library',
    });

    const totalRelatedCourses = infosObject.totalRelatedCourses;

    // looping over these courses if they are more than one and calling handleCourseTubeTest() to test each one
    for (let i = 0; i < totalRelatedCourses; i++) {
      // getting all the details related to each course
      const infos = handleDetails({
        instructorIndex: infosObject.instructorsArray[i],
        courseIndex: infosObject.coursesArray[i],
      });

      // testing the rendered course
      handleCourseTubeTest({ infos: infos, videoIndex: i });
    }

    // Step 5: clicking on the searchArrowBtn to get out of the searching mode
    userEvent.click(elements2.searchArrowBtn);

    // Step 6: checking which elements should be rendered
    const elements3 = createMiniBtnsElements();
    expect(elements3.leftHeaderSection).toBeInTheDocument();
    expect(elements3.miniSearchBtn).toBeInTheDocument();
    expect(elements3.middleHeaderSection).not.toBeInTheDocument();
    expect(elements3.searchArrowBtn).not.toBeInTheDocument();
    expect(elements3.searchInput).not.toBeInTheDocument();
    expect(elements3.searchBtn).not.toBeInTheDocument();
    expect(elements3.micBtn).not.toBeInTheDocument();
    expect(elements3.miniOptionsBtn).toBeInTheDocument();
    expect(elements3.rightHeaderSection).not.toBeInTheDocument();

    // Step 7: testing the toggleBtn, the sidebarSection, sidebarArrowBtn, homeSection, videoContainers in this particular case
    const [
      toggleBtn,
      sidebarSection,
      sidebarArrowBtn,
      homeSection,
      videoContainers,
    ] = createElements({
      toggleBtn: true,
      sidebarSection: true,
      sidebarArrowBtn: true,
      homeSection: true,
      videoContainers: true,
    });
    // Note: should still have the right course / courses rendered after clicking on the searchArrowBtn
    expect(videoContainers.length).toBe(totalRelatedCourses);
    expect(sidebarSection).toHaveClass('sidebar-off');
    userEvent.click(toggleBtn);
    // Note: width < 450 => sidebarArrowBtn should never be rendered
    expect(sidebarArrowBtn).not.toBeInTheDocument();
    expect(sidebarSection).toHaveClass('sidebar-min');
    expect(homeSection).toHaveClass('shiny-effect');

    // Step 8: clicking on the homeSection to get back the whole courses
    userEvent.click(homeSection);
    const totalCourses = handleDetails({ target: 'courses' });
    const [videoContainers2] = createElements({ videoContainers: true });
    expect(videoContainers2.length).toBe(totalCourses);

    // homeSection should have no longer the class shiny-effect
    const [homeSection2] = createElements({ homeSection: true });
    expect(homeSection2).not.toHaveClass('shiny-effect');

    // Step 9: testing the miniOptionsBtn
    userEvent.click(elements3.miniOptionsBtn);

    // Step 10: checking which elements should be rendered
    const elements4 = createMiniBtnsElements();
    expect(elements4.leftHeaderSection).not.toBeInTheDocument();
    expect(elements4.logo).toBeInTheDocument();
    expect(elements4.miniSearchBtn).toBeInTheDocument();
    expect(elements4.middleHeaderSection).not.toBeInTheDocument();
    expect(elements4.searchArrowBtn).not.toBeInTheDocument();
    expect(elements4.searchInput).not.toBeInTheDocument();
    expect(elements4.searchBtn).not.toBeInTheDocument();
    expect(elements4.micBtn).not.toBeInTheDocument();
    expect(elements4.miniOptionsBtn).not.toBeInTheDocument();
    expect(elements4.rightHeaderSection).toBeInTheDocument();
    expect(elements4.optionsArrowBtn).toBeInTheDocument();
    expect(elements4.themeBtn).toBeInTheDocument();
    // Note: width < 450 gribBtn should never be rendered
    expect(elements4.gridBtn).not.toBeInTheDocument();
    expect(elements4.contactMeBtn).toBeInTheDocument();

    // Step 11: testing the gridBtn (shlould never appear) in this particular case
    // 1st Test => click on themeBtn, check rightHeaderSlice.js line 37
    userEvent.click(elements4.themeBtn);
    const [themeBlocks, gridBtn, rightHeaderCloseBtn] = createElements({
      themeBlocks: true,
      gridBtn: true,
      rightHeaderCloseBtn: true,
    });
    expect(elements4.themeBtn).not.toBeInTheDocument();
    expect(themeBlocks.length).toBe(3);
    expect(gridBtn).not.toBeInTheDocument();
    expect(rightHeaderCloseBtn).toBeInTheDocument();

    // 2nd Test => click on rightHeaderCloseBtn, check rightHeaderSlice.js line 59
    userEvent.click(rightHeaderCloseBtn);
    const elements5 = createMiniBtnsElements();
    expect(elements5.optionsArrowBtn).toBeInTheDocument();
    expect(elements5.themeBtn).toBeInTheDocument();
    expect(elements5.gridBtn).not.toBeInTheDocument();
    expect(elements5.contactMeBtn).toBeInTheDocument();

    // 2nd Test => click on contactMeBtn, changes only happen within the webBody, nothing will change in the header, check webBodySlice.js line 24
    userEvent.click(elements5.contactMeBtn);
    expect(elements5.optionsArrowBtn).toBeInTheDocument();
    expect(elements5.themeBtn).toBeInTheDocument();
    expect(elements5.gridBtn).not.toBeInTheDocument();
    expect(elements5.contactMeBtn).toBeInTheDocument();

    // Step 12: clicking on the optionsArrowBtn to get out of the options mode
    userEvent.click(elements5.optionsArrowBtn);

    // Step 13: checking which elements should be rendered
    const elements6 = createMiniBtnsElements();
    expect(elements6.leftHeaderSection).toBeInTheDocument();
    expect(elements6.miniSearchBtn).toBeInTheDocument();
    expect(elements6.middleHeaderSection).not.toBeInTheDocument();
    expect(elements6.searchArrowBtn).not.toBeInTheDocument();
    expect(elements6.searchInput).not.toBeInTheDocument();
    expect(elements6.searchBtn).not.toBeInTheDocument();
    expect(elements6.micBtn).not.toBeInTheDocument();
    expect(elements6.miniOptionsBtn).toBeInTheDocument();
    expect(elements6.rightHeaderSection).not.toBeInTheDocument();
    expect(elements6.optionsArrowBtn).not.toBeInTheDocument();
    expect(elements6.themeBtn).not.toBeInTheDocument();
    expect(elements6.gridBtn).not.toBeInTheDocument();
    expect(elements6.contactMeBtn).not.toBeInTheDocument();
  } else if (width <= 585) {
    // Step 1: checking which elements should be rendered
    handleDefaultRender(width);
    // Step 2: clicking on miniSearchBtn
    handleMiniSearchClick();
    // Step 3: checking which elements should be rendered
    handleDefaultRender(width);
    // Step 4: clicking on miniOptionsBtn
    handleMiniOptionsClick();
    // Step 5: checking which elements should be rendered
    handleDefaultRender(width);
  } else if (width <= 810) {
    // Step 1: checking which elements should be rendered
    handleDefaultRender(width);
    // Step 2: clicking on miniOptionsBtn
    handleMiniOptionsClick();
    // Step 3: checking which elements should be rendered
    handleDefaultRender(width);
  } else {
    handleDefaultRender(width);
  }
};

const handleDefaultRender = (width) => {
  const elements = createMiniBtnsElements();
  if (width <= 585) {
    expect(elements.leftHeaderSection).toBeInTheDocument();
    expect(elements.miniSearchBtn).toBeInTheDocument();
    expect(elements.middleHeaderSection).not.toBeInTheDocument();
    expect(elements.miniOptionsBtn).toBeInTheDocument();
    expect(elements.rightHeaderSection).not.toBeInTheDocument();
  } else if (width <= 810) {
    expect(elements.leftHeaderSection).toBeInTheDocument();
    expect(elements.miniSearchBtn).not.toBeInTheDocument();
    expect(elements.middleHeaderSection).toBeInTheDocument();
    expect(elements.miniOptionsBtn).toBeInTheDocument();
    expect(elements.rightHeaderSection).not.toBeInTheDocument();
  } else {
    expect(elements.leftHeaderSection).toBeInTheDocument();
    expect(elements.miniSearchBtn).not.toBeInTheDocument();
    expect(elements.middleHeaderSection).toBeInTheDocument();
    expect(elements.miniOptionsBtn).not.toBeInTheDocument();
    expect(elements.rightHeaderSection).toBeInTheDocument();
  }
};

const handleMiniSearchClick = () => {
  const [miniSearchBtn] = createElements({ miniSearchBtn: true });
  userEvent.click(miniSearchBtn);

  const elements = createMiniBtnsElements();
  expect(elements.miniSearchBtn).not.toBeInTheDocument();
  expect(elements.middleHeaderSection).toBeInTheDocument();
  expect(elements.searchArrowBtn).toBeInTheDocument();
  expect(elements.searchInput).toBeInTheDocument();
  expect(elements.searchBtn).toBeInTheDocument();
  expect(elements.micBtn).toBeInTheDocument();

  userEvent.click(elements.searchArrowBtn);
};

const handleMiniOptionsClick = () => {
  const [miniOptionsBtn] = createElements({ miniOptionsBtn: true });
  userEvent.click(miniOptionsBtn);

  const elements = createMiniBtnsElements();
  expect(elements.miniOptionsBtn).not.toBeInTheDocument();
  expect(elements.rightHeaderSection).toBeInTheDocument();
  expect(elements.optionsArrowBtn).toBeInTheDocument();
  expect(elements.themeBtn).toBeInTheDocument();
  expect(elements.gridBtn).toBeInTheDocument();
  expect(elements.contactMeBtn).toBeInTheDocument();

  userEvent.click(elements.optionsArrowBtn);
};

export default handleMiniBtnsTest;
