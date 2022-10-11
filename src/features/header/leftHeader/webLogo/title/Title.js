import { useAppDispatch } from '../../../../../hooks/hooks';
import { handleLogoClick } from '../../leftHeaderSlice';

function Title() {
  const dispatch = useAppDispatch();

  return <h1 onClick={() => dispatch(handleLogoClick())}>CourseTube</h1>;
}

export default Title;
