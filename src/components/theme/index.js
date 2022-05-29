/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className="theme__switcher">
        <input checked={!isDarkTheme} onChange={handleChange} type="checkbox" id="input" />
        <label htmlFor="input">Theme {isDarkTheme ? 'Light' : 'Dark'}</label>
        <label className="label" htmlFor="input">
          <span className="slider-check" />
        </label>
      </div>
    </div>
  );
};

export default Theme;
