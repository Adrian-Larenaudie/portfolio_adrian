import './styles.scss';
import './animations.scss';
import Fade from 'react-reveal/Fade';
// eslint-disable-next-line import/no-unresolved
import Redux from '../../svg/technos/Redux';
import Bootstrap from '../../svg/technos/Bootstrap';
import Css from '../../svg/technos/Css';
import GitIcon from '../../svg/technos/GitIcon';
import GitHub from '../../svg/technos/GitHub';
import Html from '../../svg/technos/Html';
import Javascript from '../../svg/technos/Javascript';
import MySql from '../../svg/technos/MySql';
import Php from '../../svg/technos/Php';
import React from '../../svg/technos/React';
import Sass from '../../svg/technos/Sass';

const Skills = () => {
  console.log('');
  return (
    <div className="skills" id="skills">

      <Fade duration={1000} delay={1000} left distance="20%">
        <h1 className="pageBackground">skills</h1>
      </Fade>

      <div className="skills__techContainer">

        <Fade duration={800} delay={200} left distance="10%">
          <h1 className="skills__techContainer__title">
            Je travaille
            <span> avec</span>
          </h1>
        </Fade>

        <div className="skills__techContainer__technos">
          <Fade duration={1000} delay={1200}><GitIcon /></Fade>
          <Fade duration={800} delay={800}><GitHub /></Fade>
          <Fade duration={1000} delay={1200}><Html /></Fade>
          <Fade duration={800} delay={800}><Css /></Fade>
          <Fade duration={1000} delay={1200}><Javascript /></Fade>
          <Fade duration={800} delay={800}><Php /></Fade>
          <Fade duration={1000} delay={1200}><MySql /></Fade>
          <Fade duration={800} delay={800}><Bootstrap /></Fade>
          <Fade duration={1000} delay={1200}><Sass /></Fade>
          <Fade duration={800} delay={800}><React /></Fade>
          <Fade duration={1000} delay={1200}><Redux /></Fade>
        </div>

      </div>

      <Fade duration={700} delay={800} top distance="20%">
        <div className="skills__trainingContainer">
          <div className="skills__trainingContainer__panel">
            <p className="skills__trainingContainer__text">Formation Développeur Web</p>
            <p className="skills__trainingContainer__text">Ecole
              <a
                href="https://oclock.io/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&adgroupname=Oclock&keyword=oclock&gclid=CjwKCAjw7IeUBhBbEiwADhiEMWhpCi3SVz8Menlmjw7R5L1lFWYRHIHSS9mvcpWBQX2g11rUkbVZkhoC92wQAvD_BwE"
                target="_blank"
                rel="noreferrer"
              // eslint-disable-next-line react/jsx-closing-tag-location
              > O'Clock </a>
              promo Boson
            </p>
          </div>
        </div>
      </Fade>

      <div className="skills__softSkillsContainer">

        <Fade duration={400} delay={700} top distance="25%">
          <h1 className="skills__softSkillsContainer__title">
            Soft
            <span> skills</span>
          </h1>
        </Fade>

        <ul className="skills__softSkillsContainer__liste">
          <Fade duration={400} delay={200} right distance="25%"><li className="skills__softSkillsContainer__liste__item">Organisation</li></Fade>
          <Fade duration={400} delay={300} right distance="25%"><li className="skills__softSkillsContainer__liste__item">Communication</li></Fade>
          <Fade duration={400} delay={400} right distance="25%"><li className="skills__softSkillsContainer__liste__item">Esprit d'équipe</li></Fade>
          <Fade duration={400} delay={500} right distance="25%"><li className="skills__softSkillsContainer__liste__item">Gestion du stress</li></Fade>
          <Fade duration={400} delay={600} right distance="25%"><li className="skills__softSkillsContainer__liste__item">Résolution de problème</li></Fade>
        </ul>

      </div>
    </div>
  );
};

export default Skills;
