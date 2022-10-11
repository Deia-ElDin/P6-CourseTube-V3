import { useAppSelector } from './hooks/hooks';
import { ActiveTheme } from './features/header/rightHeader/rightHeaderSlice';
import Header from './features/header/Header';
import Sidebar from './features/sidebar/Sidebar';
import WebBody from './features/webBody/WebBody';
import useWindowSize from './hooks/useWindowSize';
import './sass/App.css';

function App() {
  const theme = useAppSelector(ActiveTheme);

  useWindowSize();

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <main className="App" id={theme}>
      <Header />
      <Sidebar />
      <WebBody />
    </main>
  );
}

export default App;
