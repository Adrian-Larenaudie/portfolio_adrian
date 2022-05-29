import './styles.scss';
// To manage form submission, using an API https://formsubmit.co/
// No need to store or using controlled fields form on the state

const Contact = () => (
  <div id="contact" className="contact">
    <h1 className="pageBackground pageBackground--rotate">contact</h1>
    <h1 className="contact__title">Me
      <span> contacter</span>
    </h1>
    <form className="contact__form" action="https://formsubmit.co/adrian.larenaudie@gmail.com" method="POST">
      <textarea
        rows="10"
        className="contact__message"
        name="message"
        placeholder="Votre message"
        required
      />
      <input
        className="contact__userEmail"
        placeholder="Votre Email"
        type="email"
        name="email"
        required
      />
      <input type="hidden" name="_next" value="http://localhost:8080/thanks" />
      <input type="hidden" name="_subject" value="New submission!" />
      <input type="hidden" name="_captcha" value="false" />
      <button
        className="contact__submit"
        type="submit"
      >Envoyer
      </button>
    </form>
  </div>
);

export default Contact;
