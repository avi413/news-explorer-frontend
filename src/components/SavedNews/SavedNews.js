import './SavedNews.css';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { useEffect, useState } from 'react';

function SavedNews(props) {
  const [currentNews, setCurrentNews] = useState(false);
  const [keys, setKeys] = useState([]);
  
  const subTitle =
    keys.length > 2
      ? `${keys[0]}, ${keys[1]}, and ${keys.length - 2} other`
      : keys.join(', ');

  useEffect(() => {
    props.getSavedNews().then((res) => {
      setCurrentNews(res.data);
      const unique = [...new Set(res.data.map((item) => item.keyword))];
      setKeys(unique);
    });
  },[]);

  return (
    <div className='saved-news'>
      <section className='saved-news__data'>
        <h5 className='saved-news__page-title'>Saved articles</h5>
        <h2 className='saved-news__title'>{`Elise, you have ${currentNews.length} saved articles`}</h2>
        <p className='saved-news__type'>
          By keywords: <span className='saved-news__keywords'>{subTitle}</span>
        </p>
      </section>
      <Preloader>
        <div className='saved-news__list'>
          <NewsCardList currentNews={currentNews} size='100' />
        </div>
      </Preloader>
    </div>
  );
}

export default SavedNews;
