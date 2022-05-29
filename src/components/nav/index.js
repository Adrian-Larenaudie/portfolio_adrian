import { NavLink } from 'react-router-dom';
import data from '../../data/data';
import GitHubLogo from '../svg/social/GitHubLogo';
import LinkedinLogo from '../svg/social/LinkedinLogo';
import TwitterLogo from '../svg/social/TwitterLogo';
import './styles.scss';

const Nav = () => (
  <div className="nav">
    <div className="nav__logo">
      <span>al</span>
    </div>
    <nav className="nav__pages">
      {data.navigation.map((link) => (
        <NavLink className="nav__link" to={link.path} key={link.path}>{link.name}</NavLink>
      ))}
    </nav>
    <nav className="nav__socials">
      <a className="nav__social" href="https://twitter.com/Railedad?t=qefZIy7mK_0EU7MjhTchsw&s=03" target="_blank" rel="noreferrer">
        <TwitterLogo />
      </a>
      <a className="nav__social" href="https://github.com/Adrian-Larenaudie" target="_blank" rel="noreferrer">
        <GitHubLogo />
      </a>
      <a className="nav__social" href="https://www.linkedin.com/in/adrian-larenaudie-a82b8b238/" target="_blank" rel="noreferrer">
        <LinkedinLogo />
      </a>
    </nav>
  </div>
);

export default Nav;
