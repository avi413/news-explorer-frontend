import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
function NewsCardList(props) {
  return (
    <ul className='card-list'>
      <NewsCard tagTitle='Nature'/>
      <NewsCard tagTitle='Nature'/>
      <NewsCard tagTitle='Nature'/>
    </ul>
  );
}

export default NewsCardList;
