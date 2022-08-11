import './NewsCard.css';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi.js';

function NewsCard(props) {
  const user = useContext(CurrentUserContext);

  const { source, title, publishedAt, description, urlToImage, url, image, keyword, text } = props.data;

  const [icon, setIcon] = useState({ name: '', className: '' });
  const [activeTag, setactiveTag] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [bookmark, setBookmark] = useState('card__bookmark');
  const [trash, setTrash] = useState('card__trash');

  const saveButtonTitle =
    icon.name === 'Bookmark' ? 'Sign in to save articles' : 'Remove from saved';

  useEffect(() => {
    if (window.location.pathname === '/saved-news') {
      setIcon({ name: 'Trash', className: trash });
      setactiveTag('card__tag_active');
    } else {
      setIcon({ name: 'Bookmark', className: bookmark });
      setactiveTag('');
    }
  }, [trash, bookmark]);

  const handleMouseEnter = () => {
    setIsShown(true);
    setBookmark('card__bookmark-bold');
    setTrash('card__trash-bold');
  };
  const handleMouseLeave = () => {
    setIsShown(false);
    setBookmark('card__bookmark');
    setTrash('card__trash');
  };

  const HandleCardIconClick = () => {
    if(user.isLoggedIn) {
      mainApi
      .addArticle({keyword:'123', title, text: description, source: source.name, image: urlToImage, date: publishedAt, link: url})
    }

  }

  return (
    <li className='card'>
      <article className='card__item'>
        <button
          src={icon.name}
          onClick={HandleCardIconClick}
          className={`card__icon ${icon.className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        
        />
        <button className={`card__tag ${activeTag}`}>{keyword}</button>

        {isShown && !user.isLoggedIn && <button className={`card__save`}>{saveButtonTitle}</button>}

        <a href={url} target='_blank' rel='noreferrer'>
          <img className='card__image' src={urlToImage || image} alt='card__image' />
        </a>

        <div className='card__info'>
          <span className='card__date'>{publishedAt}</span>
          <h3 className='card__title'>{title}</h3>
          <blockquote className='card__quote' cite='Avi'>
            {description || text}
          </blockquote>
          <a className='card__link' href='/' target='_blank' rel='noreferrer'>
            {source.name || source}
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
