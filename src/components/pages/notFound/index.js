import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './styles.scss';

const NotFound = () => {
  console.log('coucou');
  return (
    <>
      <Fade duration={1000} delay={1000} left distance="20%">
        <h1 className="pageBackground pageBackground--rotate pageBackground--rotate--notFound">404.</h1>
      </Fade>
      <div id="notFound" className="notFound">
        <Fade duration={600} delay={200} right distance="20%">
          <h1
            className="notFound__title"
          >
            <span>404</span>
          </h1>
        </Fade>
        <Fade duration={600} delay={400} right distance="20%">
          <h2
            className="notFound__subtitle"
          >Oups Page non
            <span> trouvée</span>
          </h2>
        </Fade>
        <Fade duration={600} delay={600} right distance="20%">
          <p
            className="notFound__text"
          >Le lien sur lequel vous avez cliquez est peut être cassé ou la page a été retirée
          </p>
        </Fade>
        <Fade duration={1000} delay={800} bottom distance="60%">
          <Link
            className="notFound__link"
            to="/"
          >Retour à l'accueil?
          </Link>
        </Fade>
      </div>
    </>
  );
};

export default NotFound;
