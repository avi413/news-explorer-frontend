import './MobileNav.css';
import Button from '../Button/Button';
import { useState } from 'react';

function MobileNav(props) {
  const { colorChange, isLoggedIn, hendleSignOut,handleonSignInClick } = props;
  const [isOpen, SetIstOpen] = useState(false);

  const handleClose = (event) => {
    SetIstOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`mobile-nav__header ${
          !colorChange ? 'mobile-nav__header_type_dark' : ''
        }`}
      >
        <h1 className='mobile-nav__logo'>NewsExplorer</h1>
        <button
          aria-label='close mobile nav'
          className={`mobile-nav__icon ${
            !colorChange
              ? !isOpen
                ? 'mobile-nav_open'
                : 'mobile-nav_close'
              : !isOpen
              ? 'mobile-nav_open_type_dark'
              : 'mobile-nav_close_type_dark'
          }`}
          onClick={handleClose}
        />
      </div>

      <nav
        className={`mobile-nav  ${colorChange ? 'mobile-nav_type_dark' : ''}  ${
          isOpen ? 'mobile-nav_active' : ''
        }`}
      >
        <div className='mobile-nav__links'>
          <a
            className={`mobile-nav__link ${
              !colorChange ? 'mobile-nav__link_type_dark' : ''
            }`}
            href='/'
          >
            Home
          </a>
          {isLoggedIn && (
            <a
              className={`mobile-nav__link ${
                !colorChange ? 'mobile-nav__link_type_dark' : ''
              }`}
              href='/saved-news'
            >
              Saved articles
            </a>
          )}

          {!isLoggedIn ? (
            <Button
              title='Sign in'
              className='button_type_clear mobile-nav_button'
              onClick={handleonSignInClick}
            />
          ) : (
            <Button
              title='Sign out'
              onClick={hendleSignOut}
              className={`${
                colorChange ? 'button_theme_dark' : ''
              } mobile-nav_button`}
            />
          )}
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
