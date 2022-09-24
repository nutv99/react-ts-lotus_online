import * as React from 'react';
import '../style.css';

import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import {
  faHome,
  faUser,
  faTruckFast,
  faCar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function MyFlatList({ data: { name, age, country } }) {
//   return <h1>Hello, {name}</h1>;
// }

function MyFlatList({ todos }) {
  const todoItems = todos.map((todo) => (
    <div key={todo.name}>
      <FontAwesomeIcon icon={faCar} />
      {todo.name}
      {todo.age}
    </div>
  ));

  return (
    // {data.map(({ name, age,country }) => (
    //   <p key={name}>Coffee type {age} in a {country} size.</p>
    // ))}

    //
    <div className="flatList">
      {todoItems}

      {/* <FontAwesomeIcon icon={faUser} /> */}
    </div>
  );
}

export default MyFlatList;
