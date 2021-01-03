// posts will be populated at build time by getStaticProps()
function Todos({ todos }) {
  return (
    <ul className='w-3/4 m-auto'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`text-sm py-2 border-b border-indigo-500 ${
            todo.completed ? 'line-through' : 'font-bold'
          }`}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await res.json();
  return {
    props: {
      todos,
    },
  };
}

export default Todos;
