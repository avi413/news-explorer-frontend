import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import Results from '../Results/Results';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

import { useEffect, useRef, useState } from 'react';

function Main(props) {
  const inputEl = useRef(null);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isResults, setIsResults] = useState(false);
  const [currentNews, setCurrentNews] = useState(
    JSON.parse(localStorage.getItem('articles'))
  );
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [nodata, setNodata] = useState({
    title: 'Nothing found',
    subtitle: 'Sorry, but nothing matched your search terms.',
  });
  const handleClick = (event) => {
    event.preventDefault();
    setCurrentKeyword(inputEl.current.value);
    setIsResults(false);
    setIsNotFound(false);
    setIsPreloader(true);
    setIsSearching(true);
    if (inputEl.current.value === '') {
      setIsNotFound(true);
      setIsPreloader(false);
    } else {
      props
        .getNews(inputEl.current.value)
        .then((res) => {
          if (res.articles.length === 0) {
            setIsNotFound(true);
            setIsSearching(false);
          } else {
            setCurrentNews(res.articles);
            setIsResults(true);
            setIsSearching(false);
          }
        })
        .catch((err) => {
          setIsNotFound(true);
          setIsSearching(false);
          setNodata({ title: 'Sorry, something went wrong during the request', subtitle: 'There may be a connection issue or the server may be down. Please try again later.' });
        });
    }
    inputEl.current.value = '';
  };

  useEffect(() => {
    localStorage.setItem('articles', JSON.stringify(currentNews));
  }, [currentNews]);

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem('articles'));

    if (articles) {
      setIsPreloader(true);
      setIsResults(true);
      setCurrentNews(articles);
      setIsSearching(false);
    }
  }, []);
  return (
    <div className='main'>
      <section className='main__hero'>
        <div className='main__search'>
          <h2 className='main__title'>What's going on in the world?</h2>
          <p className='main__subtitle'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm handleClick={handleClick}>
            <input
              ref={inputEl}
              className='search-form__input'
              placeholder='Enter topic'
            />
            <Button
              title='Search'
              className='button_type_blue search-form__button'
            />
          </SearchForm>
        </div>
      </section>
      {isPreloader && (
        <Preloader>
          <div className='main-list'>
            {isResults && (
              <Results
                currentNews={currentNews}
                currentKeyword={currentKeyword}
                maxSize={currentNews.length}
              />
            )}
            {isNotFound && (
              <NotFound title={nodata.title} subtitle={nodata.subtitle} />
            )}
            {isSearching && <Loading />}
          </div>
        </Preloader>
      )}

      <About />
    </div>
  );
}

export default Main;
