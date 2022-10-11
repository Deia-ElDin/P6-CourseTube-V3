import ArrowBtn from './arrowBtn/ArrowBtn';
import SearchForm from './searchForm/SearchForm';
import Mic from './mic/Mic';

function MiddleHeader() {
  return (
    <section className="middle-header" data-testid="middle-header">
      <ArrowBtn />
      <SearchForm />
      <Mic />
    </section>
  );
}

export default MiddleHeader;
