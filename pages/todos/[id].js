import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      <h1>Todo Item</h1>
      <br />
      <p>id: {todo.id}</p>
      <p>title: {todo.title}</p>
      <p>completed: {todo.completed.toString()}</p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const todo = await res.json();
  return {
    props: {
      todo,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = todos.map((todo) => ({
    params: { id: todo.id.toString() },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default TodoItem;
