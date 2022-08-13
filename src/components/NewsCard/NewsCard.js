import './NewsCard.css';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as mainApi from '../../utils/MainApi.js';
import { parseDate } from '../../utils/dateHandler.js';

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
  const [savedId, setSavedId] = useState(null);
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

  useEffect(() => {
    console.log(props.data);
    if (_id) setBookmark('card__bookmark-marked');
  }, []);

  const handleMouseEnter = () => {
    if (bookmark !== 'card__bookmark-marked') {
      if (icon.name === 'Trash' || !user.isLoggedIn) setIsShown(true);
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

  const HandleCardIconClick = (event) => {
    if (
      user.isLoggedIn &&
      location === '/' &&
      bookmark !== 'card__bookmark-marked'
    ) {
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
          setSavedId(res.data._id);

          const foundIndex = JSON.parse(
            localStorage.getItem('articles')
          ).findIndex(
            (article) =>
              article.title === res.data.title &&
              article.source.name === res.data.source
          );

          const arr = JSON.parse(localStorage.getItem('articles'));
          arr[foundIndex]._id = res.data._id;

          localStorage.setItem('articles', JSON.stringify(arr));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (user.isLoggedIn && icon.name === 'Trash') {
        props.HandleCardIconClick(event.target.id);
      } else if (bookmark === 'card__bookmark-marked') {
        mainApi
          .deleteArticle(event.target.id)
          .then((res) => {
            console.log('sd');
            setBookmark('card__bookmark-bold');

            const foundIndex = JSON.parse(
              localStorage.getItem('articles')
            ).findIndex(
              (article) =>
                article.title === res.data.title &&
                article.source.name === res.data.source
            );

            const arr = JSON.parse(localStorage.getItem('articles'));
            console.log(arr, foundIndex);
            delete arr[foundIndex]._id;
            localStorage.setItem('articles', JSON.stringify(arr));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <li className='card'>
      <article className='card__item'>
        <button
          id={_id || savedId}
          src={icon.name}
          onClick={(event) => HandleCardIconClick(event)}
          className={`card__icon ${icon.className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <button className={`card__tag ${activeTag}`}>{keyword}</button>
        {isShown && <button className={`card__save`}>{saveButtonTitle}</button>}

        <a href={url || link} target='_blank' rel='noreferrer'>
          <img
            className='card__image'
            src={urlToImage || image}
            alt='card__image'
          />
        </a>

        <div className='card__info'>
          <span className='card__date'>{parseDate(publishedAt || date)}</span>
          <h3 className='card__title'>{title}</h3>
          <blockquote className='card__quote' cite={source.name || source}>
            {description || text}
          </blockquote>
          <a
            className='card__link'
            href={url || link}
            target='_blank'
            rel='noreferrer'
          >
            {source.name || source}
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
