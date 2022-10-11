import { useAppSelector, useAppDispatch } from '../../../../hooks/hooks';
import {
  handleSearchInputFocus,
  handleSearchInputBlur,
} from '../../leftHeader/leftHeaderSlice';
import {
  SearchInputValue,
  handleSearchInputChange,
  clearSearchInput,
} from '../middleHeaderSlice';
import { handleUserSearch } from '../../../webBody/webBodySlice';
import { BsSearch } from 'react-icons/bs';

function SearchForm() {
  const searchInputValue = useAppSelector(SearchInputValue);
  const dispatch = useAppDispatch();
  const width = window.innerWidth;

  const handleChange = (e) => dispatch(handleSearchInputChange(e.target.value));

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) dispatch(clearSearchInput());
  };

  const handleFocus = () => {
    if (width > 585 && width <= 900) dispatch(handleSearchInputFocus());
  };

  const handleBlur = () => {
    if (width > 585 && width <= 900) dispatch(handleSearchInputBlur());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleUserSearch(searchInputValue.toLowerCase()));
    dispatch(clearSearchInput());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Search: </label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search"
        className="search-input"
        value={searchInputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button
        className="search-btn"
        title="Search Button"
        aria-label="Search button"
      >
        <BsSearch className="icon-2" data-testid="search-btn-icon" />
      </button>
    </form>
  );
}

export default SearchForm;
