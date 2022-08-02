import './NotFound.css';
import NotFoundImg from '../../images/not-found.svg';

function NotFound() {
  return (
    <div className='not-found'>
      <img className='not-found__img' src={NotFoundImg} alt='not found'/>
      <h3 className='not-found__title'>Nothing found</h3>
      <p className='not-found__desc'>
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
