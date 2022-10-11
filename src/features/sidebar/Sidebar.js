import { useAppSelector } from '../../hooks/hooks';
import { ToggleBtnState } from '../header/leftHeader/leftHeaderSlice';
import { MainClass, SecondaryClass } from './sidebarSlice';
import ArrowBtn from './arrowBtn/ArrowBtn';
import Home from './home/Home';
import Courses from './courses/Courses';
import Instructors from './instructors/Instructors';
import Footer from './footer/Footer';

function Sidebar() {
  const toggleBtn = useAppSelector(ToggleBtnState);
  const mainClass = useAppSelector(MainClass);
  const secondaryClass = useAppSelector(SecondaryClass);

  return (
    <section
      className={toggleBtn ? secondaryClass : mainClass}
      data-testid="sidebar"
    >
      <ArrowBtn />
      <Home />
      <Courses />
      <Instructors />
      <Footer />
    </section>
  );
}

export default Sidebar;
