import { useAppSelector } from '../../hooks/hooks';
import { ToggleBtnState } from '../header/leftHeader/leftHeaderSlice';
import {
  MainClass,
  SecondaryClass,
  DisplayCourseTube,
  DisplayContactMe,
} from './webBodySlice';
import CourseTube from './courseTube/CourseTube';
import ContactMe from './contactMe/ContactMe';

function WebBody() {
  const toggleBtn = useAppSelector(ToggleBtnState);
  const mainClass = useAppSelector(MainClass);
  const secondaryClass = useAppSelector(SecondaryClass);
  const displayCourseTube = useAppSelector(DisplayCourseTube);
  const displayContactMe = useAppSelector(DisplayContactMe);

  return (
    <section
      className={toggleBtn ? secondaryClass : mainClass}
      data-testid="web-body"
    >
      {displayCourseTube && <CourseTube />}
      {displayContactMe && <ContactMe />}
    </section>
  );
}

export default WebBody;
