import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ currentNews, size, currentKeyword }) {
  return (
    <ul className='card-list'>
      {currentNews &&
        currentNews.slice(0, size).map(function (card, index) {
          return <NewsCard key={index} data={card} currentKeyword={currentKeyword}/>;
        })}
    </ul>
  );
}

export default NewsCardList;
