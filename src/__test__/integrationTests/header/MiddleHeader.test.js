import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import userEvent from '@testing-library/user-event';

import handleDetails from '../../setUpTests/handleDetails';
import handleCourseTubeTest from '../../setUpTests/webBody/handleCourseTubeTest';
import createElements from '../../setUpTests/createElements';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../../../App';

// Note: we will test the MiddleHeader compoenent's effect on the whole web within a fixed width

describe('App / MiddleHeader (Desktop / Pc)', () => {
  beforeEach(() => {
    global.innerWidth = 1300;
    renderWithProviders(<App />);
  });

  describe('Search Input & Search Button', () => {
    test('should be able to type into the searchInput and clicking on the searchBtn', () => {
      // Step 1: Initially the searchInput should be empty
      const [searchInput, searchBtn, videoContainers] = createElements({
        searchInput: true,
        searchBtn: true,
        testCoursetubePage: true,
        videoContainers: true,
      });

      const totalCourses = handleDetails({ target: 'courses' });

      expect(searchInput.value).toBe('');
      expect(videoContainers.length).toBe(totalCourses);

      // Step 2: Typing into the searchInput
      userEvent.type(searchInput, 'React');
      expect(searchInput.value).toBe('React');

      // Step 3: Clicking on the searchBtn
      userEvent.click(searchBtn);

      // Step 4: should render only the courses that matche the user search & clears the searchInput
      const [searchInput2, videoContainers2] = createElements({
        searchInput: true,
        testCoursetubePage: true,
        videoContainers: true,
      });
      // finding the matching courses
      const infosObject = handleDetails({
        target: 'coursesByName',
        requiredCourse: 'react',
      });

      expect(searchInput2.value).toBe('');
      expect(videoContainers2.length).toBe(infosObject.totalRelatedCourses);

      // getting all the details related to that course / courses[0]
      const infos = handleDetails({
        instructorIndex: infosObject.instructorsArray[0],
        courseIndex: infosObject.coursesArray[0],
      });

      // ..................... IMPORTANT NOTES ..................... //
      // 1st Note: Log the totoalCourses in Line 26 => result = 15
      // 2nd Note: the first React course will appear is the 8th courses
      // 3rd Note: if we are not searching for any thing, then we will use handleVideoIndex function
      //           which exist in (handleDetails line 62 && 83),
      //           which will return videoIndex: 8
      // 4th Note: but since we are searching for react courses, then we get total (3 courses)
      // 5th Note: then using videoIndex: 8 will return undefind with all the courseTube elements
      //           check (createElements line 303 && 317)
      // 6th Note: our videoIndex must be one of the 3 values (3 courses) => (0, 1, 2)
      // 7th Note: if you select instructorIndex: infosObject.instructorsArray[0]
      //           && courseIndex: infosObject.coursesArray[0], then you must use videoIndex: 0
      // 8th Note: instructorsArray[1] & coursesArray[1] => videoIndex: 1
      // 9th Note: instructorsArray[2] & coursesArray[2] => videoIndex: 2
      // 10 Note: YOU CAN'T USE (infos.videoIndex) cuz you will get (8 as the result),
      //          check (handleDetails line 83 && 105), then
      //          check (CourseTube.test.js line 41 && 98 && 166) for better understanding

      // Step 7: creating the courseTube elements with the details obtained from step 6
      handleCourseTubeTest({ infos: infos, videoIndex: 0 });
    });
  });
});
