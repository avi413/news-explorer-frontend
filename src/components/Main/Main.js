import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import Results from '../Results/Results';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

import { useRef, useState } from 'react';
function Main() {
  const inputEl = useRef(null);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isResults, setIsResults] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsResults(false);
    setIsNotFound(false)
    setIsPreloader(true);
    setIsSearching(true);
    setTimeout(() => {
      if(inputEl.current.value ==='') {
        setIsNotFound(true)
      } else {
        setIsResults(true);
      }
      
      setIsSearching(false);
    }, 2000);
  
   
  };

  return (
    <div className='main'>
      <section className='main__hero'>
        <div className='main__search'>
          <h2 className='main__title'>What's going on in the world?</h2>
          <p className='main__subtitle'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm>
            <input ref={inputEl} className='search-form__input' placeholder='Enter topic' />
            <Button
              title='Search'
              className='button_type_blue search-form__button'
              onClick={handleClick}
            />
          </SearchForm>
        </div>
      </section>
      {isPreloader && (
        <Preloader>
          <div className='main-list'>
          {isResults && <Results />}
          {isNotFound && <NotFound />}
          {isSearching && <Loading />}
          </div>
        </Preloader>
      )}

      <About />
    </div>
  );
}

export default Main;
