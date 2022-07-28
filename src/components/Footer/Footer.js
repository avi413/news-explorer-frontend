import './Footer.css';
import Facebook from '../../images/facebook.svg';
import Github from '../../images/github.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <span className='footer__copyright'>
        © 2022 News Explorer, Powered by News API
      </span>
      <nav className='footer__nav'>
        <Link className='footer__link' to='/'>
          Home
        </Link>
        <ul className='footer__social'>
        <li className='footer__item'>
          <a
            className='footer__link'
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <img className='footer__social-image' src={Github} alt='Github icon' />
          </a>
        </li>
        <li className='footer__item'>
          <a
            className='footer__link'
            href=''
            target='_blank'
            rel='noreferrer'
          >
            <img className='footer__social-image' src={Facebook} alt='Facebook icon' />
          </a>
        </li>
      </ul>
      </nav>
      
    </footer>
  );
}

export default Footer;
