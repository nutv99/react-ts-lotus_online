import * as React from 'react';
import '../style.css';

// function MyFlatList({ data: { name, age, country } }) {
//   return <h1>Hello, {name}</h1>;
// }

function MyFlatList({ todos }) {
  const todoItems = todos.map((todo) => (
    <div key={todo.name}>
      {todo.name}
      {todo.age}
    </div>
  ));

  return (
    // {data.map(({ name, age,country }) => (
    //   <p key={name}>Coffee type {age} in a {country} size.</p>
    // ))}

    <div className="flatList">{todoItems}</div>
  );
}

export default MyFlatList;
