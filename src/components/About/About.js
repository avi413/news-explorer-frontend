import './About.css';
import Avi from '../../images/Avi.png';

function About() {
  return (
    <section className='about'>
      <img src={Avi} className='about__img' />
      <div className='about__text'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__desc'>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
