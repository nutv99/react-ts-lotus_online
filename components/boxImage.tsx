import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ApiService from '../Apiservice';
import '../style.css';

function BoxImage({ todos, mycaption }) {
  const [item2s, setItem2s] = useState([]);

  const [users, setUsers] = useState([]);

  const todoItems = '';

  // item2s.map((todo) => (
  //   <div key={todo.name} className="box2Col">
  //     <div className="center">
  //       <img src={todo.mainImageURL} className="imgThumb" />
  //     </div>
  //     <div className="caption boxCaption lineClamp3">{todo.ItemName}</div>
  //     <div>{todo.SellPrice} </div>
  //   </div>
  // ));

  const testApi = async () => {
    // Test Get DATA
    try {
      // const usersData = await ApiService.httpGet(
      //   'dataservice/clsItemMaster.php'
      // );

      //

      const usersData = await ApiService.httpGet(
        'dataservice/clsItemMaster.php'
      );
      setUsers(usersData);

      // // วิธีที่ 2 ไม่ใช้ service
      // axios
      //   .get('https://lovetoshopmall.com/dataservice/clsItemMaster.php')
      //   .then((res) => {
      //     // console.log('sssss', res.data);
      //     //const newTodos = [...res.data];
      //     const newTodos = res.data;
      //     // console.log('newTodo', newTodos);
      //     // console.log('Item2S-999', item2s);

      //     setItem2s(res.data);
      //     console.log('Ddddd', item2s);
      //   })
      //   .catch((error) => console.log(error));
    } catch (err) {
      console.error(err.message);
    } finally {
    }
  };

  useEffect(() => {
    testApi();
  }, []);

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
export default BoxImage;
