import './MobileNav.css';
import Menu from '../../images/menu.svg';
import Button from '../Button/Button';
function MobileNav(props) {
  const { colorChange } = props;
  return (
    <nav className='mobile-nav'>
      <div className='mobile-nav__links'>
        <div className='mobile-nav__header'>
            <h1 className='mobile-nav__logo'>NewsExplorer</h1>
            <button
                aria-label="close mobile nav"
                className="mobile-nav__close"
                onClick=''
                />
        </div>

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
          title='profile'
          className={`mobile-nav_logout ${
            colorChange ? 'button_theme_dark' : ''
          }`}
        />
      )}
      </div>
      <a href='#' className='icon' onClick='myFunction()'>
        <img src={Menu} />
      </a>
    </nav>
  );
}

export default MobileNav;
