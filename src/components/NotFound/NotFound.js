import './NotFound.css';
import NotFoundImg from '../../images/not-found.svg';

function NotFound({ title, subtitle }) {
  return (
    <div className='not-found'>
      <img className='not-found__img' src={NotFoundImg} alt='not found' />
      <h3 className='not-found__title'>{title}</h3>
      <p className='not-found__desc'>{subtitle}</p>
    </div>
  );
}

export default NotFound;
