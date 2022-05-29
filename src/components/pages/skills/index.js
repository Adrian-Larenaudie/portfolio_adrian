import './styles.scss';
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
  console.log('ici c\'est la skills page');
  return (
    <div className="skills" id="skills">
      <h1 className="pageBackground">skills</h1>
      <div className="skills__techContainer">
        <h1 className="skills__techContainer__title">
          Je travaille
          <span> avec</span>
        </h1>
        <div className="skills__techContainer__technos">
          <GitIcon />
          <GitHub />
          <Html />
          <Css />
          <Javascript />
          <Php />
          <MySql />
          <Bootstrap />
          <Sass />
          <React />
          <Redux />
        </div>
      </div>
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
      <div className="skills__softSkillsContainer">
        <h1 className="skills__softSkillsContainer__title">
          Soft
          <span> skills</span>
        </h1>
        <ul className="skills__softSkillsContainer__liste">
          <li className="skills__softSkillsContainer__liste__item">Organisation</li>
          <li className="skills__softSkillsContainer__liste__item">Communication</li>
          <li className="skills__softSkillsContainer__liste__item">Esprit d'équipe</li>
          <li className="skills__softSkillsContainer__liste__item">Gestion du stress</li>
          <li className="skills__softSkillsContainer__liste__item">Résolution de problème</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
