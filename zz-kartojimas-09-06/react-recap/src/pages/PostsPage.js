import React, { useState, useEffect } from 'react';

import Posts from '../components/Posts';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // -- sideEffects
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? <div>Loading...</div> : <Posts posts={posts} />;
};

export default PostsPage;
