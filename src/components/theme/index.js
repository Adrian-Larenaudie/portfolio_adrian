/* eslint-disable jsx-a11y/label-has-associated-control */
import Fade from 'react-reveal/Fade';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeIsLoadingStatus } from '../../actions';

const Theme = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const handleChange = () => {
    localStorage.setItem('isThemeDark', JSON.stringify(!isDarkTheme));
    dispatch(changeIsLoadingStatus(!isDarkTheme));
  };
  return (
    <div className="theme">
      <Fade delay={1500} duration={1000}>
        <div className="theme__switcher">
          <input checked={!isDarkTheme} onChange={handleChange} type="checkbox" id="input" />
          <label htmlFor="input">Theme {isDarkTheme ? 'Light' : 'Dark'}</label>
          <label className="label" htmlFor="input">
            <span className="slider-check" />
          </label>
        </div>
      </Fade>
    </div>
  );
};

export default Theme;
