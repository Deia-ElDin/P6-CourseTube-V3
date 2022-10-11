import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { DisplayAllCourses } from '../../webBody/webBodySlice';
import { handleSidebarHomeClick } from '../../webBody/webBodySlice';
import { IoMdHome } from 'react-icons/io';
import Title from '../dependencies/Title';

function Home() {
  const displayAllCourses = useAppSelector(DisplayAllCourses);
  const dispatch = useAppDispatch();

  return (
    <section
      className={displayAllCourses ? null : 'shiny-effect'}
      aria-label="Home"
      onClick={() => dispatch(handleSidebarHomeClick())}
    >
      <Title
        title="Home"
        icon={<IoMdHome className="sidebar-icon" data-testid="home-icon" />}
      />
    </section>
  );
}

export default Home;
