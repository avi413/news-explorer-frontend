import './Results.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Button from '../Button/Button';
function Results() {
  return (
    <div className='results'>
      <h3 className='results__title'>Search results</h3>
      <NewsCardList/>
      <Button className='button_type_white results__button' title='Show more' />
    </div>
  );
}

export default Results;
