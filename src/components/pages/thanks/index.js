import { Link } from 'react-router-dom';
import './styles.scss';

const Thanks = () => (
  <>
    <h1 className="pageBackground pageBackground--rotate pageBackground--rotate--thanks">thanks</h1>
    <div id="thanks" className="thanks">
      <h1 className="thanks__title">
        Merci pour votre
        <span> message</span>
      </h1>
      <Link
        className="thanks__link"
        to="/"
      >Retour à l'accueil
      </Link>
    </div>
  </>
);

export default Thanks;
