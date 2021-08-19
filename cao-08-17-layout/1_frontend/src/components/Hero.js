import './Hero.css';
import Button from './Button';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>Some title</h1>
      <p>
        Some about text <br /> in two lines{' '}
      </p>
      <Button btnText="Hero button" />
    </section>
  );
};

export default Hero;
