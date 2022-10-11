import PropTypes from 'prop-types';

function Button({ className, title, handleBtnClick, ariaLabel, icon }) {
  return (
    <button
      className={className}
      title={title}
      onClick={handleBtnClick}
      aria-label={ariaLabel}
    >
      {icon}
      <div className="outer"></div>
    </button>
  );
}

Button.defaultProps = {
  className: 'btn',
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  handleBtnClick: PropTypes.func.isRequired,
  icon: PropTypes.element.isRequired,
};

export default Button;
