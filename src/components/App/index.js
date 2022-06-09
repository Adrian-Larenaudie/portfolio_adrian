import { useSelector } from 'react-redux';
import { useEffect } from 'react';
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

  const handleSwipe = () => {
    let xDown = null;
    let yDown = null;
    function getTouches(evt) {
      return evt.touches;
    }
    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }
      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;
      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /* most significant */
        if (xDiff > 0) {
        /* right swipe */
          // console.log('right swipe');
        }
        else {
        /* left swipe */
          // console.log('left swipe');
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  };

  useEffect(() => {
    handleSwipe();
  }, []);

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
