import ToggleBtn from './toggleBtn/ToggleBtn';
import WebLogo from './webLogo/WebLogo';

function LeftHeader() {
  return (
    <section className="left-header" data-testid="left-header">
      <ToggleBtn />
      <WebLogo />
    </section>
  );
}

export default LeftHeader;
