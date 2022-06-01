import './styles.scss';
import Fade from 'react-reveal/Fade';
import { useWindowWidth } from '@react-hook/window-size';
import TwitterLogo from '../../svg/social/TwitterLogo';
import LinkedinLogo from '../../svg/social/LinkedinLogo';
import GitHubLogo from '../../svg/social/GitHubLogo';
// To manage form submission, using an API https://formsubmit.co/
// No need to store or using controlled fields form on the state

const Contact = () => {
  const screenWidth = useWindowWidth();
  return (
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
        <input type="hidden" name="_next" value="https://adrian-larenaudie.com/thanks" />
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

      {/* This part visible only if screen width is under 615 pixels */}
      {screenWidth < 615 && (
      <Fade duration={1000} delay={700}>
        <nav className="contact__nav__socials">
          <a className="contact__nav__social" href="https://twitter.com/Railedad?t=qefZIy7mK_0EU7MjhTchsw&s=03" target="_blank" rel="noreferrer">
            <TwitterLogo />
          </a>
          <a className="contact__nav__social" href="https://github.com/Adrian-Larenaudie" target="_blank" rel="noreferrer">
            <GitHubLogo />
          </a>
          <a className="contact__nav__social" href="https://www.linkedin.com/in/adrian-larenaudie-a82b8b238/" target="_blank" rel="noreferrer">
            <LinkedinLogo />
          </a>
        </nav>
      </Fade>
      )}

    </div>
  );
};

export default Contact;
