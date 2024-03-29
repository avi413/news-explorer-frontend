import './About.css';
import Avi from '../../images/Avi.png';

function About() {
  return (
    <section className='about'>
      <img src={Avi} className='about__img' alt='about'/>
      <div className='about__text'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__desc'>
          Hello, My name is Avi Dalal and I am a FullStack web Developer, I used
          to develop solutions for websites using various technologies focused on Reactjs, javascript and Nodejs.
        </p>
      </div>
    </section>
  );
}

export default About;
