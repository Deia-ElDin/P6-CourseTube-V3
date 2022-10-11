import { useAppDispatch } from '../../../../hooks/hooks';
import { handleCloseBtnClick } from '../../webBodySlice';
import CloseButton from '../../../dependencies/CloseButton';

function CloseBtn() {
  const dispatch = useAppDispatch();

  return (
    <CloseButton
      handleBtnClick={() => dispatch(handleCloseBtnClick())}
      testId="contact-close-btn"
    />
  );
}

export default CloseBtn;
