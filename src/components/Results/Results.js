import './Results.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Button from '../Button/Button';
import { useState } from 'react';

function Results({ currentNews, currentKeyword }) {
  const [size, setSize] = useState(3);

  return (
    <div className='results'>
      <h3 className='results__title'>Search results</h3>
      <NewsCardList
        currentNews={currentNews}
        size={size}
        currentKeyword={currentKeyword}
      />
      <Button
        className='button_type_white results__button'
        title='Show more'
        onClick={() => setSize(size + 3)}
      />
    </div>
  );
}

export default Results;
