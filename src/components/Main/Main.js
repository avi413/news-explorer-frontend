import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import Results from '../Results/Results';
function Main() {
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
            <input className='search-form__input' placeholder='Enter topic' />
            <Button
              title='Search'
              className='button_type_blue search-form__button'
            />
          </SearchForm>
        </div>
      </section>
      <Preloader>
        <div className='main-list'>
          <Results />
        </div>
      </Preloader>
      <About />
    </div>
  );
}

export default Main;
