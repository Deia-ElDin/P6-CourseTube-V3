import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import {
  GridBtnState,
  DisplaySlider,
  handleGridBtnClick,
} from '../rightHeaderSlice';
import { CgMenuGridO } from 'react-icons/cg';
import Button from '../../dependencies/Button';
import Slider from './slider/Slider';

function GridBtn() {
  const gridBtn = useAppSelector(GridBtnState);
  const displaySlider = useAppSelector(DisplaySlider);
  const dispatch = useAppDispatch();

  return (
    <>
      {gridBtn && (
        <Button
          title="Select Grid"
          ariaLabel="Select grid"
          handleBtnClick={() => dispatch(handleGridBtnClick())}
          icon={<CgMenuGridO className="icon" data-testid="grid-btn-icon" />}
        />
      )}

      {displaySlider && <Slider />}
    </>
  );
}

export default GridBtn;
