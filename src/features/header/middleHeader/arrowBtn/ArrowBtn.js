import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import { handleBothArrowBtnsClickEffectOnLeftHeader } from '../../leftHeader/leftHeaderSlice';
import {
  DisplaySearchArrowBtn,
  handleMiddleHeaderArrowBtnClickEffectOnMiddleHeader,
} from '../middleHeaderSlice';
import { handleBothArrowBtnsClickEffectOnRightHeader } from '../../rightHeader/rightHeaderSlice';
import { handleMiddleHeaderArrowBtnsClickEffectOnUser } from '../../user/userSlice';
import ArrowButton from '../../../dependencies/ArrowButton';

function ArrowBtn() {
  const displaySearchArrowBtn = useAppSelector(DisplaySearchArrowBtn);
  const dispatch = useAppDispatch();

  const handleArrowBtnClick = () => {
    dispatch(handleBothArrowBtnsClickEffectOnLeftHeader());
    dispatch(handleMiddleHeaderArrowBtnClickEffectOnMiddleHeader());
    dispatch(handleBothArrowBtnsClickEffectOnRightHeader());
    dispatch(handleMiddleHeaderArrowBtnsClickEffectOnUser());
  };

  return (
    <>
      {displaySearchArrowBtn && (
        <ArrowButton
          handleClick={handleArrowBtnClick}
          ariaLabel="Search arrow button"
        />
      )}
    </>
  );
}

export default ArrowBtn;
