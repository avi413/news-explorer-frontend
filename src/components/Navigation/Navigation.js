import './Navigation.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';

function Navigation(props) {
  const { colorChange } = props;
  const [active, stActive] = useState({ home: '', savedNews: '' });

  useEffect(() => {
    if (window.location.pathname === '/saved-news') {
      stActive({ home: 'navigation__link_active', savedNews: '' });

    } else {
      stActive({ home: '', savedNews: 'navigation__link_active' });
    }

  }, [window.location.pathname]);

  return (
    <nav className='navigation'>
      <Link className={`navigation__link ${active.savedNews}`} to='/'>
        Home
      </Link>
      <Link className={`navigation__link ${active.home}`} to='/saved-news'>
        Saved articles
      </Link>
      {1 === 0 ? (
        <Button title='Sign in' className='button_type_clear' />
      ) : (
        <Button
          title='profile'
          className={`navigation_logout ${
            colorChange ? 'button_theme_dark' : ''
          }`}
        />
      )}
    </nav>
  );
}

export default Navigation;
