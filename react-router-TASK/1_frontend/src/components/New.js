import React from 'react';
import './New.css';

const New = ({ title, content }) => {
  return (
    <>
      <article className="single-news-item">
        <h2>{title}</h2>
        <p>{content}</p>
      </article>
    </>
  );
};

export default New;
