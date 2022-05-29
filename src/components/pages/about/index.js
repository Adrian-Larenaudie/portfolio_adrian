/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './styles.scss';
import './animations.scss';
import IMG from './CV.jpg';

const About = () => {
  console.log('Ici c\'est la about page');
  return (
    <div className="about" id="about">
      <h1 className="pageBackground">about</h1>
      <div className="about__someWordsContainer">
        <h1 className="about__someWordsContainer__title">
          Quelques
          <span> mots</span>
        </h1>
        <p className="about__someWordsContainer__text">
          Après 11 années de travail en restauration.
          <br />
          <span>42</span>
          J'entame une reconversion professionnelle dans le milieu du développement web en Juillet 2021.
          <br />
          <span>42</span>
          En autodidacte, puis en formation à l'école O'clock à partir de Janvier 2022.
          <br />
          <span>42</span>
          Ce qui à l'origine, était un projet de reconversion est
          très vite devenu une passion,
          <Link className="about__someWordsContainer__link" to="/Skills&Technos"> voici mes compétences.</Link>
          <br />
          <span>42</span>
          Depuis ma soif d'apprendre n'a cessé de croître et l'univers
          du code m'accompagne au quotidien.
          <br />
          <span>42</span>
          Vous souhaitez me contacter,
          <Link className="about__someWordsContainer__link" to="/contact"> c'est par ici.</Link>
        </p>
      </div>
      <div className="about__cvCardContainer">
        <div className="about__cvCardContainer__cvCard">
          <div className="about__cvCardContainer__cvCard__innerCard">
            <div className="about__cvCardContainer__cvCardFront">
              <p className="about__cvCardContainer__cvCard__text">Voir mon CV</p>
            </div>
            <div className="about__cvCardContainer__cvCardBack">
              <a href="#"><img src={IMG} alt="cv" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
