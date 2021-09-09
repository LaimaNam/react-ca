import React from 'react';
import Posts from '../../components/ui/Posts';

const Articles = ({ posts }) => {
  return (
    <div>
      <h1>Articles</h1>

      <Posts posts={posts} />
    </div>
  );
};

export default Articles;

//Getting data from API

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: { posts: posts.slice(0, 5) },
  };
};
