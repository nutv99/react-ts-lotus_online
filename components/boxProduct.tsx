import * as React from 'react';
import '../style.css';

import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

import { faHome, faUser, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function MyFlatList({ data: { name, age, country } }) {
//   return <h1>Hello, {name}</h1>;
// }

function BoxProduct({ todos, mycaption }) {
  const todoItems = todos.map((todo) => (
    <div key={todo.name} className="box2Col">
      <img src={todo.ImgName} className="imgThumb" />
      {todo.name}
      {todo.age}
    </div>
  ));

  return (
    // {data.map(({ name, age,country }) => (
    //   <p key={name}>Coffee type {age} in a {country} size.</p>
    // ))}

    //
    <div>
      <div className="captionBar">
        <div>{mycaption}</div>
        <div className="right">ดูทั้งหมด</div>
      </div>
      <div className="flex flexWrap">
        {todoItems}
        {/* <FontAwesomeIcon icon={faUser} /> */}
      </div>
    </div>
  );
}

export default BoxProduct;
