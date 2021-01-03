import React from 'react';

const Posts = ({ data }) => {
  return (
    <div className='my-2 border-b border-indigo-700 w-1/2 m-auto'>
      <h1>getServerSideProps</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h3 className='font-semibold text-2xl'>
            {post.id} | {post.title}
          </h3>
          <p>{post.body}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Posts;
