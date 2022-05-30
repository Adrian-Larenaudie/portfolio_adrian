import './styles.scss';
import Fade from 'react-reveal/Fade';
// To manage form submission, using an API https://formsubmit.co/
// No need to store or using controlled fields form on the state

const Contact = () => (
  <div id="contact" className="contact">
    <h1 className="pageBackground pageBackground--rotate">contact</h1>
    <Fade duration={500} delay={200} left distance="20%">
      <h1 className="contact__title">Me
        <span> contacter</span>
      </h1>
    </Fade>
    <form className="contact__form" action="https://formsubmit.co/adrian.larenaudie@gmail.com" method="POST">
      <Fade duration={500} delay={400} left distance="20%">
        <textarea
          rows="10"
          className="contact__message"
          name="message"
          placeholder="Votre message"
          required
        />
      </Fade>
      <Fade duration={500} delay={600} left distance="20%">
        <input
          className="contact__userEmail"
          placeholder="Votre Email"
          type="email"
          name="email"
          required
        />
      </Fade>
      <input type="hidden" name="_next" value="http://localhost:8080/thanks" />
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="hidden" name="_captcha" value="false" />
      <Fade duration={500} delay={700} left distance="20%">
        <button
          className="contact__submit"
          type="submit"
        >Envoyer
        </button>
      </Fade>
    </form>
  </div>
);

export default Contact;
