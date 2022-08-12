import './NewsCard.css';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi.js';

function NewsCard(props) {
  const user = useContext(CurrentUserContext);
  const location = window.location.pathname;
  const {
    source,
    title,
    publishedAt,
    description,
    urlToImage,
    url,
    image,
    keyword,
    text,
    link,
    date,
    _id,
  } = props.data;

  const [icon, setIcon] = useState({ name: '', className: '' });
  const [activeTag, setactiveTag] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [bookmark, setBookmark] = useState('card__bookmark');
  const [trash, setTrash] = useState('card__trash');
  const [disabled, setDisabled] = useState(false);
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
    if (bookmark !== 'card__bookmark-marked') {
      setIsShown(true);
      setBookmark('card__bookmark-bold');
      setTrash('card__trash-bold');
    }
  };
  const handleMouseLeave = () => {
    if (bookmark !== 'card__bookmark-marked') {
      setIsShown(false);
      setBookmark('card__bookmark');
      setTrash('card__trash');
    }
  };

  const HandleCardIconClick = (id) => {
    if (user.isLoggedIn && location === '/') {
      mainApi
        .addArticle({
          keyword: props.currentKeyword,
          title,
          text: description,
          source: source.name,
          image: urlToImage,
          date: publishedAt,
          link: url,
        })
        .then((res) => {
          setBookmark('card__bookmark-marked');
          setDisabled(true);
        });
    } else {
      props.HandleCardIconClick(id);
    }
  };

  return (
    <li className='card' id={_id}>
      <article className='card__item'>
        <button
          src={icon.name}
          onClick={() => HandleCardIconClick(_id)}
          className={`card__icon ${icon.className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          disabled={disabled}
        />
        <button className={`card__tag ${activeTag}`}>{keyword}</button>

        {isShown && !user.isLoggedIn && (
          <button className={`card__save`}>{saveButtonTitle}</button>
        )}

        <a href={url || link} target='_blank' rel='noreferrer'>
          <img
            className='card__image'
            src={urlToImage || image}
            alt='card__image'
          />
        </a>

        <div className='card__info'>
          <span className='card__date'>{publishedAt || date}</span>
          <h3 className='card__title'>{title}</h3>
          <blockquote className='card__quote' cite='Avi'>
            {description || text}
          </blockquote>
          <a className='card__link' href={url || link} target='_blank' rel='noreferrer'>
            {source.name || source}
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
