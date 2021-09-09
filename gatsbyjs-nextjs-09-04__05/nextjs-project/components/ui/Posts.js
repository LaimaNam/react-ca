const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
