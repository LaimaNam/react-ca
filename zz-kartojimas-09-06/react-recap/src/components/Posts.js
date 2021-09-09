import React from 'react';

const Posts = ({ posts }) => {
  return posts.slice(0, 5).map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
};

export default Posts;
