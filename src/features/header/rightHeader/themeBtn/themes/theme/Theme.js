import ColorDiv from './colorDiv/ColorDiv';
import PropTypes from 'prop-types';

function Theme({ id, handleClick, colorsArray }) {
  const themeBlock = colorsArray.map((color) => (
    <ColorDiv key={color} color={color} />
  ));

  return (
    <div
      className="theme-block"
      id={id}
      onClick={handleClick}
      data-testid="theme-block"
    >
      {themeBlock}
    </div>
  );
}

Theme.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  colorsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Theme;
