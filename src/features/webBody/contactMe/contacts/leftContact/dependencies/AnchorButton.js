import PropTypes from 'prop-types';

function AnchorButton({ link, icon }) {
  return (
    <a
      className="form-btn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

AnchorButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default AnchorButton;
