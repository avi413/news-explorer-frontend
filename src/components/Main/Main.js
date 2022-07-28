import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import About from '../About/About';

function Main() {
  return (
    <div className='main'>
      <section className='main__hero'>
        <div className='main__search'>
          <h2 className='main__title'>
            What's going on in the world?
          </h2>
          <p className='main__subtitle'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm>
            <input className='search-form__input' placeholder='Enter topic' />
            <Button title='Search' type='button_type_search search-form_button' />
          </SearchForm>
        </div>
      </section>
      <About />
    </div>
  );
}

export default Main;
