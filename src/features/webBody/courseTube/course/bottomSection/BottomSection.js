import LeftBottom from './leftBottom/LeftBottom';
import RightBottom from './rightBottom/RightBottom';

function BottomSection() {
  return (
    <section className="bottom-section" data-testid="bottom-section">
      <LeftBottom />
      <RightBottom />
    </section>
  );
}

export default BottomSection;
