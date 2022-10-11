import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import CourseTube from '../../../features/webBody/courseTube/CourseTube';
import handleDetails from '../../setUpTests/handleDetails';
import handleCourseTubeTest from '../../setUpTests/webBody/handleCourseTubeTest';
import createElements from '../../setUpTests/createElements';

describe('CourseTube', () => {
  beforeEach(() => {
    renderWithProviders(<CourseTube />);
  });

  describe('Features', () => {
    describe('CourseTube', () => {
      test('should render the courseTubePage', () => {
        const [coursetubePage] = createElements({
          coursetubePage: true,
        });
        expect(coursetubePage).toBeInTheDocument();
      });

      describe('Video Container', () => {
        test('should render (totalCourses) courses', () => {
          const [videoContainers] = createElements({
            videoContainers: true,
          });
          const totalCourses = handleDetails({ target: 'courses' });
          expect(videoContainers.length).toBe(totalCourses);
        });
      });

      describe('Top Section & Bottom Section / Testing Courses Rendering', () => {
        describe('1st Instructor', () => {
          test('should render the 1st course with the right details', () => {
            const infos = handleDetails({
              instructorIndex: 0,
              courseIndex: 0,
            });

            handleCourseTubeTest({ infos: infos });
          });

          test('should render the 2nd course with the right details', () => {
            const infos = handleDetails({
              instructorIndex: 0,
              courseIndex: 1,
            });

            handleCourseTubeTest({ infos: infos });
          });
        });

        describe('last instructor', () => {
          test('should render the last course', () => {
            const totalInstructors = handleDetails({
              target: 'instructors',
            });

            const totalInstructorCourses = handleDetails({
              target: 'courses/instructorIndex',
              instructorIndex: totalInstructors - 1,
            });

            const infos = handleDetails({
              instructorIndex: totalInstructors - 1,
              courseIndex: totalInstructorCourses - 1,
            });

            handleCourseTubeTest({ infos: infos });
          });
        });
      });
    });
  });
});
