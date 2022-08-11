import './NewsCard.css';
import Demo from '../../images/demo.png';
import { useEffect, useState } from 'react';

function NewsCard(props) {
  const { source, title, publishedAt, description, urlToImage } = props.data;
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

  return (
    <li className='card'>
      <article className='card__item'>
        <button
          src={icon.name}
          className={`card__icon ${icon.className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <button className={`card__tag ${activeTag}`}>{props.tagTitle}</button>

        {isShown && <button className={`card__save`}>{saveButtonTitle}</button>}

        <a href='/' target='_blank' rel='noreferrer'>
          <img className='card__image' src={urlToImage} alt='card__image' />
        </a>

        <div className='card__info'>
          <span className='card__date'>{publishedAt}</span>

          <h3 className='card__title'>{title}</h3>

          <blockquote className='card__quote' cite='Avi'>
            {description}
          </blockquote>

          <a className='card__link' href='/' target='_blank' rel='noreferrer'>
            {source.name}
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
