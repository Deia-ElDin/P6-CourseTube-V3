import { useAppSelector } from '../../hooks/hooks';
import {
  DisplayLeftHeader,
  DisplayMiniLogo,
} from './leftHeader/leftHeaderSlice';
import {
  DisplayMiddleHeader,
  DisplayMiniSearchButton,
} from './middleHeader/middleHeaderSlice';
import {
  DisplayRightHeader,
  DisplayMiniOptionsButton,
} from './rightHeader/rightHeaderSlice';
import { DisplayUser } from './user/userSlice';
import LeftHeader from './leftHeader/LeftHeader';
import Logo from './leftHeader/webLogo/logo/Logo';
import MiddleHeader from './middleHeader/MiddleHeader';
import MiniSearchButton from './miniBtns/miniSearchButton/MiniSearchButton';
import RightHeader from './rightHeader/RightHeader';
import MiniOptionsButton from './miniBtns/miniOptionsButton/MiniOptionsButton';
import User from './user/User';

function Header() {
  const displayLeftHeader = useAppSelector(DisplayLeftHeader);
  const displayMiniLogo = useAppSelector(DisplayMiniLogo);

  const displayMiddleHeader = useAppSelector(DisplayMiddleHeader);
  const displayMiniSearchButton = useAppSelector(DisplayMiniSearchButton);

  const displayRightHeader = useAppSelector(DisplayRightHeader);
  const displayMiniOptionsButton = useAppSelector(DisplayMiniOptionsButton);

  const displayUser = useAppSelector(DisplayUser);

  return (
    <header>
      {displayLeftHeader && <LeftHeader />}
      {displayMiniLogo && <Logo />}

      {displayMiddleHeader && <MiddleHeader />}
      {displayMiniSearchButton && <MiniSearchButton />}

      {displayRightHeader && <RightHeader />}
      {displayMiniOptionsButton && <MiniOptionsButton />}

      {displayUser && <User />}
    </header>
  );
}

export default Header;
