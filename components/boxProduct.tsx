import * as React from 'react';
//import * as CurrencyFormat from 'react-currency-format';

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
      <div className="center">
        <img src={todo.mainImageURL} className="imgThumb" />
      </div>
      <div className="caption boxCaption lineClamp3">{todo.ItemName}</div>
      <div>{todo.SellPrice} </div>
      
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
