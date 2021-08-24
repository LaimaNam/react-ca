import React from 'react';
import aboutus from '../assets/aboutus.jpg';
import './aboutPage.css';
const AboutPage = () => {
  return (
    <main>
      <h1 className="about-page-heading">About page</h1>
      <div className="about-us-content-wrapper">
        <div className="about-us-img">
          <img src={aboutus} alt="beauty salon about us" />
        </div>
        <div className="about-us-text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            esse nulla exercitationem laboriosam non dolorem quasi placeat
            quibusdam asperiores facilis facere labore blanditiis delectus
            inventore, totam praesentium, debitis incidunt eaque? Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Corrupti esse nulla
            exercitationem laboriosam non dolorem quasi placeat quibusdam
            asperiores facilis facere labore blanditiis delectus inventore,
            totam praesentium, debitis incidunt eaque?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            esse nulla exercitationem laboriosam non dolorem quasi placeat
            quibusdam asperiores facilis facere labore blanditiis delectus
            inventore, totam praesentium, debitis incidunt eaque?
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
