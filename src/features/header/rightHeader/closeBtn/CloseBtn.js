import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import { CloseBtnState, handleCloseBtnClick } from '../rightHeaderSlice';
import CloseButton from '../../../dependencies/CloseButton';

function CloseBtn() {
  const closeBtn = useAppSelector(CloseBtnState);
  const dispatch = useAppDispatch();

  return (
    <>
      {closeBtn && (
        <CloseButton
          handleBtnClick={() => dispatch(handleCloseBtnClick())}
          testId="right-header-close-btn"
        />
      )}
    </>
  );
}

export default CloseBtn;
