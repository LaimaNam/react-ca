import React from 'react';
import Newsletter from '../components/templates/Newsletter';
import UserRegistration from '../components/templates/UserRegistration';

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Welcome</h1>
      </section>
      <UserRegistration />
      <Newsletter />
    </main>
  );
};

export default HomePage;
