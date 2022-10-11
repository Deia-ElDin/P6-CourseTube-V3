import ArrowBtn from './arrowBtn/ArrowBtn';
import CloseBtn from './closeBtn/CloseBtn';
import ThemeBtn from './themeBtn/ThemeBtn';
import GridBtn from './gridBtn/GridBtn';
import ContactMeBtn from './contactMeBtn/ContactMeBtn';

function RightHeader() {
  return (
    <section className="right-header" data-testid="right-header">
      <ArrowBtn />
      <CloseBtn />
      <ThemeBtn />
      <GridBtn />
      <ContactMeBtn />
    </section>
  );
}

export default RightHeader;
