import * as React from 'react';
import '../style.css';

function MyFlatList({data: {name, age, country}}) {
  return <h1>Hello, {name}</h1>;
}

export default MyFlatList;
