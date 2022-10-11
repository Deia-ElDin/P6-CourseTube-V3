import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import { handleBothArrowBtnsClickEffectOnLeftHeader } from '../../leftHeader/leftHeaderSlice';
import { handleRightHeaderArrowBtnClickEffectOnMiddleHeader } from '../../middleHeader/middleHeaderSlice';
import {
  DisplayOptionsArrowBtn,
  handleBothArrowBtnsClickEffectOnRightHeader,
} from '../rightHeaderSlice';
import ArrowButton from '../../../dependencies/ArrowButton';

function ArrowBtn() {
  const displayOptionsArrowBtn = useAppSelector(DisplayOptionsArrowBtn);
  const dispatch = useAppDispatch();

  const handleArrowBtnClick = () => {
    dispatch(handleBothArrowBtnsClickEffectOnLeftHeader());
    dispatch(handleRightHeaderArrowBtnClickEffectOnMiddleHeader());
    dispatch(handleBothArrowBtnsClickEffectOnRightHeader());
  };

  return (
    <>
      {displayOptionsArrowBtn && (
        <ArrowButton
          handleClick={handleArrowBtnClick}
          ariaLabel="Options arrow button"
        />
      )}
    </>
  );
}

export default ArrowBtn;
