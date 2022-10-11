import { useAppDispatch } from '../../../../hooks/hooks';
import { handleToggleBtnClick } from '../leftHeaderSlice';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from '../../dependencies/Button';

function ToggleBtn() {
  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        title="Toggle Button"
        ariaLabel="Toggle button"
        handleBtnClick={() => dispatch(handleToggleBtnClick())}
        icon={<AiOutlineMenu className="icon" data-testid="toggle-btn-icon" />}
      />
    </>
  );
}

export default ToggleBtn;
