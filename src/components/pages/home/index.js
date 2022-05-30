/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
import './styles.scss';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../../../data/data';

const Home = () => {
  const tags = data.homeTags;

  const letterTodisplay = (index, letterIndex = 0) => {
    if (document.querySelector('.home__dynamicWords') != undefined) {
      setTimeout(() => {
        if (document.querySelector('.home__dynamicWords') != undefined) {
          document.querySelector('.home__dynamicWords').textContent += tags[index][letterIndex];
          if (letterIndex < tags[index].length - 1) {
            letterTodisplay(index, letterIndex += 1);
          }
        }
      }, 100);
    }
  };

  const loopOnTags = (index = 0) => {
    if (document.querySelector('.home__dynamicWords') != undefined) {
      if (index === tags.length) {
        index = 0;
      }
      const time = (tags[index].length * 250);
      setTimeout(() => {
        if (document.querySelector('.home__dynamicWords') != undefined) {
          letterTodisplay(index);
          if (index < tags.length) {
            loopOnTags(index + 1);
          }
          document.querySelector('.home__dynamicWords').textContent = '';
        }
      }, time);
    }
  };

  useEffect(() => {
    loopOnTags();
  }, []);

  return (
    <div className="home" id="home">
      <Fade duration={1000} delay={800} top distance="30%">
        <h1 className="pageBackground">home</h1>
      </Fade>
      <Fade duration={500} delay={200} left distance="10%">
        <h1 className="home__title">
          Bienvenue sur mon site,
          <br />
          je suis
          <span> Adrian</span>
        </h1>
      </Fade>
      <Fade duration={500} delay={400} left distance="10%">
        <p className="home__subtitle">
          Développeur Web Front-End / React
        </p>
      </Fade>
      <Fade duration={500} delay={600} left distance="10%">
        <p className="home__dynamicWords" />
      </Fade>
    </div>
  );
};

export default Home;
