import PropTypes from 'prop-types';

function ArrowButton({ handleClick, ariaLabel }) {
  return (
    <div className="btn-container">
      <button
        className="arrows-btn"
        onClick={handleClick}
        aria-label={ariaLabel}
      ></button>
    </div>
  );
}

ArrowButton.propTypes = {
  ariaLabel: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ArrowButton;
