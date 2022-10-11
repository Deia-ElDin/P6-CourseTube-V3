import { useAppDispatch } from '../../../../hooks/hooks';
import { handleMiniOptionsBtnClickEffectOnLeftHeader } from '../../leftHeader/leftHeaderSlice';
import { handleMiniOptionsBtnClickEffectOnMiddleHeader } from '../../middleHeader/middleHeaderSlice';
import { handleMiniOptionsBtnClickEffectOnRightHeader } from '../../rightHeader/rightHeaderSlice';
import { IoIosOptions } from 'react-icons/io';
import Button from '../../dependencies/Button';

function MiniOptionsButton() {
  const dispatch = useAppDispatch();

  const handleMiniOptionsBtnClick = () => {
    dispatch(handleMiniOptionsBtnClickEffectOnLeftHeader());
    dispatch(handleMiniOptionsBtnClickEffectOnMiddleHeader());
    dispatch(handleMiniOptionsBtnClickEffectOnRightHeader());
  };

  return (
    <div className="mini-options">
      <Button
        title="Options"
        ariaLabel="Options"
        handleBtnClick={handleMiniOptionsBtnClick}
        icon={
          <IoIosOptions
            className="icon-2"
            data-testid="mini-options-btn-icon"
          />
        }
      />
    </div>
  );
}

export default MiniOptionsButton;
