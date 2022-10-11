import PropTypes from 'prop-types';

function ColorDiv({ color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="color-div"
      data-testid="color-div"
    ></div>
  );
}

ColorDiv.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ColorDiv;
