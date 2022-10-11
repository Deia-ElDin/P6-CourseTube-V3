import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { CoursesState, handleSidebarTitlesClick } from '../sidebarSlice';
import { MdOutlineCastForEducation } from 'react-icons/md';
import Title from '../dependencies/Title';
import List from '../dependencies/List';

function Courses() {
  const courses = useAppSelector(CoursesState);
  const dispatch = useAppDispatch();

  return (
    <section className="courses" aria-label="Courses">
      <Title
        title="Courses"
        handleClick={() => dispatch(handleSidebarTitlesClick('courses'))}
        icon={
          <MdOutlineCastForEducation
            className="sidebar-icon"
            data-testid="courses-icon"
          />
        }
      />

      {courses && <List target="courses" />}
    </section>
  );
}

export default Courses;
