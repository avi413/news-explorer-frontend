import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  currentNews,
  size,
  currentKeyword,
  HandleCardIconClick,
}) {
  return (
    <ul className='card-list'>
      {currentNews &&
        currentNews.slice(0, size).map(function (card, index) {
          return (
            <NewsCard
              key={index}
              data={card}
              currentKeyword={currentKeyword}
              HandleCardIconClick={HandleCardIconClick}
            />
          );
        })}
    </ul>
  );
}

export default NewsCardList;
