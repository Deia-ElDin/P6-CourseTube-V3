import PropTypes from 'prop-types';

function ContactBlock({ icon, title, text }) {
  return (
    <article className="contact-block">
      <div className="contact-header">
        <div className="icon">{icon}</div>
        <p>{title}</p>
      </div>
      <p className="contact-text">{text}</p>
    </article>
  );
}

ContactBlock.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactBlock;
