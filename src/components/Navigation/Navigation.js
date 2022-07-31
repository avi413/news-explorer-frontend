import './Navigation.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Navigation(props) {
  const { colorChange } = props;
  return (
    <nav className='navigation'>
      <Link className='navigation__link navigation__link_active' to='/'>
        Home
      </Link>
      <Link className='navigation__link' to='/saved-news'>
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
