import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { DisplayArrowBtn } from '../sidebarSlice';
import { handleToggleBtnClick } from '../../header/leftHeader/leftHeaderSlice';
import ArrowButton from '../../dependencies/ArrowButton';

function ArrowBtn() {
  const displayArrowBtn = useAppSelector(DisplayArrowBtn);
  const dispatch = useAppDispatch();

  return (
    <>
      {displayArrowBtn && (
        <ArrowButton
          handleClick={() => dispatch(handleToggleBtnClick())}
          ariaLabel="Sidebar arrow btn"
        />
      )}
    </>
  );
}

export default ArrowBtn;
