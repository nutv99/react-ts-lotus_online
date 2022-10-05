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
      <div className="itemCircle99" style={{padding:10}}>
        {/* <FontAwesomeIcon icon={sss.faCake} /> */}
        <img src={todo.img} alt="" className="itemCircle" />
      </div>
      <div className="boxCaption">{todo.name}</div>
    </div>
  ));

  return (
    // {data.map(({ name, age,country }) => (
    //   <p key={name}>Coffee type {age} in a {country} size.</p>
    // ))}

    //
    <div className="flatList90 boxShadow">
      {todoItems}

      {/* <FontAwesomeIcon icon={faUser} /> */}
    </div>
  );
}

export default MyFlatList;
