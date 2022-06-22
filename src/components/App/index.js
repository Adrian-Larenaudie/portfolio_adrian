import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from '../nav';
import About from '../pages/about';
import Contact from '../pages/contact';
import Home from '../pages/home';
import Skills from '../pages/skills';
import Works from '../pages/works';
import Theme from '../theme';
import NotFound from '../pages/notFound';
import Thanks from '../pages/thanks';
import './styles.scss';

function App() {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const { pathname: pathName } = useLocation();

  return (
    <div className={isDarkTheme ? 'app' : 'app--light'}>
      <Theme />
      { pathName !== '/thanks' && pathName !== '/Cv' && <Nav /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills&technos" element={<Skills />} />
        <Route path="/myworks" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
