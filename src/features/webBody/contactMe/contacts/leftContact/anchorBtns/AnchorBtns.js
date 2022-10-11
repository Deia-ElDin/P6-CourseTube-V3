import AnchorButton from '../dependencies/AnchorButton';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function AnchorBtns() {
  return (
    <div className="anchor-btns">
      <AnchorButton
        link="https://www.linkedin.com/in/deia-hamad-577a1814a/"
        icon={<AiFillLinkedin data-testid="linkedin-btn-icon" />}
      />
      <AnchorButton
        link="https://www.github.com/DeiaHamad"
        icon={<AiFillGithub data-testid="github-btn-icon" />}
      />
    </div>
  );
}

export default AnchorBtns;
