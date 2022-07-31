import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
function NewsCardList(props) {
  return (
    <ul className='card-list'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul>
  );
}

export default NewsCardList;
