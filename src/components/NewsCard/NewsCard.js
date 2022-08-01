import './NewsCard.css';
import Demo from '../../images/demo.png';
import Bookmark from '../../images/bookmark.svg';
import Trash from '../../images/trash.svg';
import { useEffect, useState } from 'react';

function NewsCard() {
  const [icon, setIcon] = useState({ name: '', className: '' });

  useEffect(() => {
    if (window.location.pathname === '/saved-news') {
      setIcon({ name: 'Trash', className: 'card__trash' });
    } else {
      setIcon({ name: 'Bookmark', className: 'card__bookmark' });
    }
  }, []);

  return (
    <li className='card'>
      <article className='card__item'>
        <button
          src={icon.name}
          className={`card__icon ${icon.className}`}
          alt={icon.name}
        />
        <a href='' target='_blank' rel='noreferrer'>
          <img className='card__image' src={Demo} alt='card__image' />
        </a>
        <div className='card__info'>
          <span className='card__date'>November 4, 2020</span>
          <h3 className='card__title'>
            Everyone Needs a Special 'Sit Spot' in Nature
          </h3>
          <blockquote className='card__quote' cite='Avi'>
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </blockquote>
          <a className='card__link' href='' target='_blank' rel='noreferrer'>
            treehugger
          </a>
        </div>
      </article>
    </li>
  );
}

export default NewsCard;
