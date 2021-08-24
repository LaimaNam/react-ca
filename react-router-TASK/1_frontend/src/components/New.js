import React from 'react';

const New = ({ title, content }) => {
  return (
    <div>
      <article>
        <h2>{title}</h2>
        <p>{content}</p>
      </article>
    </div>
  );
};

export default New;
