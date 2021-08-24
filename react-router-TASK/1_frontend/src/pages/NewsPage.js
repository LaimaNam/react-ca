import React, { useState, useEffect } from 'react';
import axios from 'axios';
import New from '../components/New';

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      console.log(response.data);
      setNews(response.data);
    });
  }, []);

  return (
    <div>
      <h1>News page</h1>
      <div className="news-wrapper">
        {news.slice(0, 2).map((item) => (
          <New key={item.id} title={item.title} content={item.body} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
