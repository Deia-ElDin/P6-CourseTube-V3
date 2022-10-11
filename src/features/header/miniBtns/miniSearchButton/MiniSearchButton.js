import { useAppDispatch } from '../../../../hooks/hooks';
import { handleMiniSearchBtnClickEffectOnLeftHeader } from '../../leftHeader/leftHeaderSlice';
import { handleMiniSearchBtnClickEffectOnMiddleHeader } from '../../middleHeader/middleHeaderSlice';
import { handleMiniSearchBtnClickEffectOnRightHeader } from '../../rightHeader/rightHeaderSlice';
import { handleMiniSearchBtnClickEffectOnUser } from '../../user/userSlice';
import { BsSearch } from 'react-icons/bs';
import Button from '../../dependencies/Button';

function MiniSearchButton() {
  const dispatch = useAppDispatch();

  const handleMiniSearchBtnClick = () => {
    dispatch(handleMiniSearchBtnClickEffectOnLeftHeader());
    dispatch(handleMiniSearchBtnClickEffectOnMiddleHeader());
    dispatch(handleMiniSearchBtnClickEffectOnRightHeader());
    dispatch(handleMiniSearchBtnClickEffectOnUser());
  };

  return (
    <div className="mini-search">
      <Button
        title="Search"
        ariaLabel="Search"
        handleBtnClick={handleMiniSearchBtnClick}
        icon={
          <BsSearch className="icon-2" data-testid="mini-search-btn-icon" />
        }
      />
    </div>
  );
}

export default MiniSearchButton;
