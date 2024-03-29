import './SavedNews.css';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import NewsCardList from '../NewsCardList/NewsCardList';
import { useEffect, useState } from 'react';
import * as mainApi from '../../utils/MainApi.js';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNews(props) {
  const { getSavedNews } = props;
  const user = useContext(CurrentUserContext);

  const [currentNews, setCurrentNews] = useState(false);
  const [isResults, setIsResults] = useState(false);
  const [keys, setKeys] = useState([]);
  const [nodata, setNodata] = useState({
    title: 'Nothing saved',
    subtitle: 'Sorry, but nothing saved yet',
  });

  const subTitle =
    keys.length > 2
      ? `${keys[0]}, ${keys[1]}, and ${keys.length - 2} other`
      : keys.join(', ');

  useEffect(() => {
    getSavedNews()
      .then((res) => {
        if (res) {
          setIsResults(true);
          setCurrentNews(res.data);
        }
      })
      .catch((err) => {
        setIsResults(false);
        setNodata({ title: 'error', subtitle: err });
      });
  }, [getSavedNews]);
  useEffect(() => {
    currentNews &&
      setKeys([...new Set(currentNews.map((item) => item.keyword))]);
    if (currentNews.length === 0) setIsResults(false);
  }, [currentNews]);

  const HandleCardIconClick = (id) => {
    mainApi
      .deleteArticle(id)
      .then((res) => {
        setCurrentNews(currentNews.filter((item) => item._id !== id));
        setKeys([...new Set(currentNews.map((item) => item.keyword))]);

        const foundIndex = JSON.parse(
          localStorage.getItem('articles')
        ).findIndex(
          (article) =>
            article.title === res.data.title &&
            article.source.name === res.data.source
        );

        const arr = JSON.parse(localStorage.getItem('articles'));

        arr[foundIndex]._id = null;

        localStorage.setItem('articles', JSON.stringify(arr));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='saved-news'>
      <section className='saved-news__data'>
        <h5 className='saved-news__page-title'>Saved articles</h5>
        <h2 className='saved-news__title'>{`${user.jwt.data.name}, you have ${
          currentNews.length || 0
        } saved articles`}</h2>
        <p className='saved-news__type'>
          By keywords: <span className='saved-news__keywords'>{subTitle}</span>
        </p>
      </section>
      <Preloader>
        <div className='saved-news__list'>
          {isResults && (
            <NewsCardList
              currentNews={currentNews}
              size='100'
              HandleCardIconClick={HandleCardIconClick}
            />
          )}
          {!isResults && (
            <NotFound title={nodata.title} subtitle={nodata.subtitle} />
          )}
        </div>
      </Preloader>
    </div>
  );
}

export default SavedNews;
