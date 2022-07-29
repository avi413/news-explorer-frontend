import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import Button from '../Button/Button';
function NewsCardList(props) {
  return (
    <div className='results'>
      <h3 className='results__title'>Search results</h3>
      <ul className='card-list'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <Button type='button_type_more results__button' title='Show more'/>
    </div>
  );
}

export default NewsCardList;
