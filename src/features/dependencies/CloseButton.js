import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

function CloseButton({ handleBtnClick, testId }) {
  return (
    <div className="btn-div">
      <button
        className="close-btn"
        title="Close"
        aria-label="Close"
        onClick={handleBtnClick}
        data-testid={testId}
      >
        <AiOutlineClose className="icon" data-testid={`${testId}-icon`} />
      </button>
    </div>
  );
}

CloseButton.propTypes = {
  handleBtnClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default CloseButton;
