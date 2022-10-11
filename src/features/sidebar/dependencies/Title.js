import PropTypes from 'prop-types';

function Title({ className, handleClick, icon, title }) {
  return (
    <title
      className={className}
      data-testid="section-title"
      onClick={handleClick}
    >
      {icon}
      <h2>{title}</h2>
    </title>
  );
}

Title.defaultProps = {
  className: 'title',
};

Title.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default Title;
