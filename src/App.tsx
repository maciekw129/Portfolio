import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
