import React from 'react';
import Service from '../components/Service';
import './ServicePage.css';

const ServicePage = () => {
  document.title = 'Our services';
  return (
    <main>
      <section className="service-page-section">
        <h1>Our Services</h1>
        <div className="services-wrapper">
          <Service
            name="Women haircuts, hair procedures"
            content="Lorem ipsum lorem ipsum lorem ipsum"
            price="50-150"
          />
          <Service
            name="Men haircuts"
            content="Lorem ipsum lorem ipsum lorem ipsum"
            price="50-150"
          />
          <Service
            name="Beuty treatments"
            content="Lorem ipsum lorem ipsum lorem ipsum"
            price="50-250"
          />
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
