import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import {
  ThemeBtnState,
  DisplayThemes,
  handleThemeBtnClick,
} from '../rightHeaderSlice';
import { VscColorMode } from 'react-icons/vsc';
import Button from '../../dependencies/Button';
import Themes from './themes/Themes';

function ThemeBtn() {
  const themeBtn = useAppSelector(ThemeBtnState);
  const displayThemes = useAppSelector(DisplayThemes);
  const dispatch = useAppDispatch();

  return (
    <>
      {themeBtn && (
        <Button
          title="Select Theme"
          ariaLabel="Select theme"
          handleBtnClick={() => dispatch(handleThemeBtnClick())}
          icon={<VscColorMode className="icon" data-testid="theme-btn-icon" />}
        />
      )}

      {displayThemes && <Themes />}
    </>
  );
}

export default ThemeBtn;
