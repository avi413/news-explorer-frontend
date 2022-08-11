import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';
function NewsCardList({ currentNews, size }) {
  return (
    <ul className='card-list'>
      {currentNews &&
        currentNews.slice(0, size).map(function (card, index) {
          return <NewsCard key={index} data={card}/>;
        })}
    </ul>
  );
}

export default NewsCardList;
