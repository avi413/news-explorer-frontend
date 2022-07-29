import './Preloader.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';

function Preloader({ text }){
  return (
    <section className="preloader">
      <div className="preloader__circle"></div>
      <span className="preloader__text">{text}</span>
      <NewsCardList />
      <NotFound />
    </section>
  );
};

export default Preloader;