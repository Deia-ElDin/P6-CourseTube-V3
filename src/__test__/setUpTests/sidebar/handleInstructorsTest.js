import userEvent from '@testing-library/user-event';
import handleDetails from '../handleDetails';
import createElements from '../createElements';
import handleCourseTubeTest from '../webBody/handleCourseTubeTest';

const handleInstructorsTest = (index) => {
  const totalCourses = handleDetails({ target: 'courses' });

  // Step 1: Initially the homeSection should have class title & videoContainers.length === totalCourses (renders all the courses)
  const [homeSection, instructors, videoContainers] = createElements({
    homeSection: true,
    instructors: true,
    videoContainers: true,
  });
  expect(homeSection).not.toHaveClass('shiny-effect');
  expect(videoContainers.length).toBe(totalCourses);

  // Step 2: Clicking on the instructor
  userEvent.click(instructors[index]);

  // finding the matching courses
  const totalInstructorCourses = handleDetails({
    target: 'courses/instructorIndex',
    instructorIndex: index,
  });

  // Step 3: should render (only the courses) that match the user search & the homeSection should have shiny-effect class
  const [videoContainers2] = createElements({
    videoContainers: true,
  });
  expect(videoContainers2.length).toBe(totalInstructorCourses);
  expect(homeSection).toHaveClass('shiny-effect');

  for (let i = 0; i < totalInstructorCourses; i++) {
    // getting all the details related to each course
    const infos = handleDetails({
      instructorIndex: index,
      courseIndex: i,
    });

    // testing all the courses
    handleCourseTubeTest({ infos: infos, videoIndex: i });
  }

  // Step 4: Clicking on the Home
  userEvent.click(homeSection);

  // Setp 5: should render back the whole courses
  const [videoContainers3] = createElements({
    videoContainers: true,
  });
  expect(videoContainers3.length).toBe(totalCourses);
};

export default handleInstructorsTest;
