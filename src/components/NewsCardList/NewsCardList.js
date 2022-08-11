import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
function NewsCardList({ currentNews }) {
  return (
    <ul className='card-list'>
      {currentNews &&
        currentNews.map(function (card, index) {
          return <NewsCard key={index} data={card}/>;
        })}
    </ul>
  );
}

export default NewsCardList;
