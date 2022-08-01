import './Header.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MobileNav from '../MobileNav/MobileNav';

function Header(props) {
  const [colorChange, setColorchange] = useState(false);
  const location = useLocation()
  const [width, setWidth] = useState(window.innerWidth);

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
    if(window.location.pathname === '/saved-news') {
      window.removeEventListener('scroll', changeNavbarColor);
      return
    }
    if (window.scrollY >= getMaxScrollY(width)) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  
  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    window.addEventListener('scroll', changeNavbarColor, false);
  });


  useEffect(() => {
    if(window.location.pathname === '/saved-news') {
        setColorchange(true);
       
    } else {
        setColorchange(false);
    }

  }, [location]);

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>

{width > 700 ?  <header className={`header ${colorChange ? 'header_type_dark' : ''}`}>
      <div className='header__container'>
        <h1 className='header__logo'>NewsExplorer</h1>
        <Navigation colorChange={colorChange} />
      </div>
    </header>
    : <MobileNav colorChange={colorChange} /> }
    </>
    
  );
}
export default Header;
