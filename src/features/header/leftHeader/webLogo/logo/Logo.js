import { useAppDispatch } from '../../../../../hooks/hooks';
import { handleLogoClick } from '../../leftHeaderSlice';

function Logo() {
  const dispatch = useAppDispatch();

  return (
    <figure className="logo" onClick={() => dispatch(handleLogoClick())}>
      <img
        src={process.env.PUBLIC_URL + '/img/logo.png'}
        alt="CourseTube Logo"
      />
    </figure>
  );
}

export default Logo;
