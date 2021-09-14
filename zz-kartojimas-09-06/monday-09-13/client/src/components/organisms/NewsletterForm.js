import React from 'react';
import EmailInput from '../atoms/Inputs/EmailInput';
import TextInput from '../atoms/Inputs/TextInput';

const NewsletterForm = () => {
  return (
    <form>
      <TextInput label="Your name: " id="newsletter-name" />
      <EmailInput label="Your email: " id="newsletter-email" />
      <input type="Submit" />
    </form>
  );
};

export default NewsletterForm;

// molecule: TextAndEmailInputs data={[TEXT],[EMAIL]}
