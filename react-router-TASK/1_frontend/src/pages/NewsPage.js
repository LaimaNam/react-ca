import React, { useState, useEffect } from 'react';
import axios from 'axios';
import New from '../components/New';
import './NewsPage.css';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      console.log(response.data);
      document.title = 'News';
      setIsLoading(true);
      setNews(response.data.slice(0, 2));
    });
  }, []);

  return (
    <main>
      <h1 className="news-heading">Our News </h1>
      <div className="news-wrapper">
        {!isLoading ? (
          <p>Loading...</p>
        ) : (
          news.map((item) => (
            <New key={item.id} title={item.title} content={item.body} />
          ))
        )}
      </div>
    </main>
  );
};

export default NewsPage;
