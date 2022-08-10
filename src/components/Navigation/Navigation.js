import './Navigation.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

function Navigation(props) {
  const { colorChange, onSignOutClick, ononSignInClick, isLoggedIn } = props;
  const [active, stActive] = useState({ home: '', savedNews: '' });
  const location = window.location.pathname;
  useEffect(() => {
    if (location === '/saved-news') {
      stActive({ home: 'navigation__link_active', savedNews: '' });
    } else {
      stActive({ home: '', savedNews: 'navigation__link_active' });
    }
  }, [location]);
  return (
    <nav className='navigation'>
      <Link className={`navigation__link ${active.savedNews}`} to='/'>
        Home
      </Link>
      {isLoggedIn &&<Link className={`navigation__link ${active.home}`} to='/saved-news'>
        Saved articles
      </Link>}
      
      {!(isLoggedIn) ? (
        <Button
          title='Sign in'
          className={`button_type_clear navigation_signin ${
            colorChange ? 'button_theme_dark' : ''
          }`}
          onClick={ononSignInClick}
        />
      ) : (
        <Button
          title='Avi'
          onClick={onSignOutClick}
          className={`navigation_logout ${
            colorChange ? 'button_theme_dark' : ''
          }`}
        />
      )}
    </nav>
  );
}

export default Navigation;
