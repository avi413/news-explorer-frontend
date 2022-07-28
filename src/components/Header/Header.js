import './Header.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const [colorChange, setColorchange] = useState(false);
  const location = useLocation()
  const width = window.innerWidth;

  const getMaxScrollY = (width) => {
    if(width > 768) {
      return 530;
    }else if (width <= 768 && width > 320) {
      return 330;
    } else {
      return 500;
    }
  }
  const changeNavbarColor = () => {
    if (window.scrollY >= getMaxScrollY(width)) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  
  useEffect(() => {
    if(location.pathname === '/saved-news') {
        setColorchange(true);
    } else {
        setColorchange(false);
    }

  }, [location]);

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <header className={`header ${colorChange ? 'header_dark' : ''}`}>
      <div className='header__container'>
        <h1 className='header__logo'>NewsExplorer</h1>
        <Navigation colorChange={colorChange} />
      </div>
    </header>
  );
}
export default Header;
