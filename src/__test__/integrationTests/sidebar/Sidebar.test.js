import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import handleDetails from '../../setUpTests/handleDetails';
import handleCoursesTest from '../../setUpTests/sidebar/handleCoursesTest';
import handleInstructorsTest from '../../setUpTests/sidebar/handleInstructorsTest';
import regeneratorRuntime from 'regenerator-runtime';
import App from '../../../App';

const totalCourses = handleDetails({ target: 'courses' });

describe('App / Sidebar (Desktop / Pc)', () => {
  beforeEach(() => {
    global.innerWidth = 1300;
    renderWithProviders(<App />);
  });

  describe('Courses & Home', () => {
    const totalCourses = handleDetails({ target: 'logos' });

    for (let i = 0; i < totalCourses; i++) {
      test('should render the right infos / testing each course', () => {
        handleCoursesTest(1);
      });
    }
  });

  describe('Instructors & Home', () => {
    const totalInstructors = handleDetails({ target: 'instructors' });

    for (let i = 0; i < totalInstructors; i++) {
      test('should render the right infos / testing each instructor', () => {
        handleInstructorsTest(1);
      });
    }
  });
});
