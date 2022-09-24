import * as React from 'react';
import '../style.css';

import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import * as sss from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MyFlatList({ todos }) {
  const todoItems = todos.map((todo) => (
    <div key={todo.name}>
      <FontAwesomeIcon icon={sss.faCake} />
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
