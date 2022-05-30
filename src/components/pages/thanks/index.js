import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './styles.scss';

const Thanks = () => (
  <>
    <Fade duration={1000} delay={600} left distance="20%">
      <h1 className="pageBackground pageBackground--rotate pageBackground--rotate--thanks">thanks</h1>
    </Fade>
    <div id="thanks" className="thanks">
      <Fade duration={500} delay={200} left distance="5%">
        <h1 className="thanks__title">
          Merci pour votre
          <span> message</span>
        </h1>
      </Fade>
      <Fade duration={800} delay={400} bottom distance="40%">
        <Link
          className="thanks__link"
          to="/"
        >Retour à l'accueil
        </Link>
      </Fade>
    </div>
  </>
);

export default Thanks;
