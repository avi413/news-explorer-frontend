import './Navigation.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

function Navigation(props) {
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
      {props.isLoggedIn &&<Link className={`navigation__link ${active.home}`} to='/saved-news'>
        Saved articles
      </Link>}
      
      {!(props.isLoggedIn) ? (
        <Button
          title='Sign in'
          className={`button_type_clear navigation_signin ${
            props.colorChange ? 'button_theme_dark' : ''
          }`}
          onClick={props.onSignInClick}
        />
      ) : (
        <Button
          title={props.loggedInName}
          onClick={props.handleSignOut}
          className={`${
            props.colorChange ? 'button_theme_dark navigation_logout' : 'navigation_logout-w'
          }`}
        ></Button>
      )}
    </nav>
  );
}

export default Navigation;
