import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sidebar from './components/Sidebar/Sidebar';
import AboutMe from './components/AboutMe/AboutMe';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
