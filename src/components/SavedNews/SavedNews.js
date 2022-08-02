import './SavedNews.css'
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews() {
    return ( 
        <div className='saved-news'>
            <section className='saved-news__data'>
                <h5 className='saved-news__page-title'>Saved articles</h5>
                <h2 className='saved-news__title'>Elise, you have 5 saved articles</h2>
                <p className='saved-news__type'>By keywords: <span className='saved-news__keywords'>Nature, Yellowstone, and 2 other</span></p>
            </section>
            <Preloader>
                <div className='saved-news__list'>
                <NewsCardList/>
                </div>

            </Preloader>
        </div>
    );
}

export default SavedNews;