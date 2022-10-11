import { renderWithProviders } from '../../setUpTests/renderWithProviders';
import Sidebar from '../../../features/sidebar/Sidebar';
import handleDetails from '../../setUpTests/handleDetails';
import createElements from '../../setUpTests/createElements';

const totalCourses = handleDetails({ target: 'logos' });
const totalInstructors = handleDetails({ target: 'instructors' });
const currentYear = new Date().getFullYear();

describe('Sidebar', () => {
  beforeEach(() => {
    renderWithProviders(<Sidebar />);
  });

  describe('Features', () => {
    describe('Sidebar Arrow Btn', () => {
      test('should not render the sidebarArrowBtn', () => {
        const [sidebarArrowBtn] = createElements({ sidebarArrowBtn: true });
        expect(sidebarArrowBtn).not.toBeInTheDocument();
      });
    });

    describe('Home', () => {
      test('should render the homeSection & the home icon with a title === home', () => {
        const [homeSection, homeIcon, homeTitle] = createElements({
          homeSection: true,
          homeIcon: true,
          homeTitle: true,
        });
        expect(homeSection).toBeInTheDocument();
        expect(homeIcon).toBeInTheDocument();
        expect(homeTitle).toHaveTextContent('Home');
      });
    });

    describe('Courses', () => {
      test('should render the coursesSection & the courses icon', () => {
        const [coursesSection, coursesIcon, coursesTitle] = createElements({
          coursesSection: true,
          coursesIcon: true,
          coursesTitle: true,
        });
        expect(coursesSection).toBeInTheDocument();
        expect(coursesIcon).toBeInTheDocument();
        expect(coursesTitle).toHaveTextContent('Courses');
      });
      test('should render (totalCourses) course', () => {
        const [courses] = createElements({
          courses: true,
        });
        expect(courses.length).toBe(totalCourses);
      });
    });

    describe('Instructors', () => {
      test('should render the instructorsSection & the instructors icon', () => {
        const [instructorsSection, instructorsIcon, instructorsTitle] =
          createElements({
            instructorsSection: true,
            instructorsIcon: true,
            instructorsTitle: true,
          });
        expect(instructorsSection).toBeInTheDocument();
        expect(instructorsIcon).toBeInTheDocument();
        expect(instructorsTitle).toHaveTextContent('Instructors');
      });
      test('should render (totalInstructors) instructors', () => {
        const [instructors] = createElements({
          instructors: true,
        });
        expect(instructors.length).toBe(totalInstructors);
      });
    });

    describe('Footer', () => {
      test('should render the footer with the cuurentYear', () => {
        const [footer] = createElements({
          footer: true,
        });
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveTextContent(`© ${currentYear} Deia-Eldin`);
      });
    });
  });
});
