import { Link } from 'react-router-dom';
import './styles.scss';

const NotFound = () => {
  console.log('coucou');
  return (
    <>
      <h1 className="pageBackground pageBackground--rotate pageBackground--rotate--notFound">404.</h1>
      <div id="notFound" className="notFound">
        <h1
          className="notFound__title"
        >
          <span>404</span>
        </h1>
        <h2
          className="notFound__subtitle"
        >Oups Page non
          <span> trouvée</span>
        </h2>
        <p
          className="notFound__text"
        >Le lien sur lequel vous avez cliquez est peut être cassé ou la page a été retirée
        </p>
        <Link
          className="notFound__link"
          to="/"
        >Retour à l'accueil?
        </Link>
      </div>
    </>
  );
};

export default NotFound;
