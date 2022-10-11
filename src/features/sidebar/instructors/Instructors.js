import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { InstructorsState, handleSidebarTitlesClick } from '../sidebarSlice';
import { FaChalkboardTeacher } from 'react-icons/fa';
import Title from '../dependencies/Title';
import List from '../dependencies/List';

function Instructors() {
  const instructors = useAppSelector(InstructorsState);
  const dispatch = useAppDispatch();

  return (
    <section className="instructors" aria-label="Instructors">
      <Title
        title="Instructors"
        handleClick={() => dispatch(handleSidebarTitlesClick('instructors'))}
        icon={
          <FaChalkboardTeacher
            className="sidebar-icon"
            data-testid="instructors-icon"
          />
        }
      />

      {instructors && <List target="instructors" />}
    </section>
  );
}

export default Instructors;
