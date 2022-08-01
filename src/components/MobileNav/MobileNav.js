import './MobileNav.css';
import Menu from '../../images/menu.svg';
import Button from '../Button/Button';
import { useState } from 'react';

function MobileNav(props) {
  const { colorChange, onClick } = props;
  const [isOpen, SetIstOpen] = useState(false);
  return (
    <>
      <div className={`mobile-nav__header ${!colorChange ? 'mobile-nav__header_type_dark' : ''}`}>
        <h1 className='mobile-nav__logo'>NewsExplorer</h1>
        <button
          aria-label='close mobile nav'
          className={`mobile-nav__icon ${!colorChange ? 'mobile-nav_open' : 'mobile-nav_open_type_dark'}`}
          onClick={onClick}
        />
      </div>

      <nav className='mobile-nav'>
        <div className='mobile-nav__links'>
          <a className='mobile-nav__link' href='/'>
            Home
          </a>
          <a
            className='mobile-nav__link mobile-nav__link_active'
            href='/saved-news'
          >
            Saved articles
          </a>
          {1 === 0 ? (
            <Button title='Sign in' className='button_type_clear' />
          ) : (
            <Button
              title='Sign out'
              className={`mobile-nav_logout ${
                colorChange ? 'button_theme_dark' : ''
              }`}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
