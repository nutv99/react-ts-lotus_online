import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ApiService from './Apiservice'; 

interface itemModel {
  ItemName: string ;
  mainImageURL: string;


}

function Box2({ mycaption }) {

  const [itemShow, setItemShow] = useState([{}]);
  const ItemsData = [{}];

  const testApi = async () => {
    // Test Get DATA
    try {
      this.ItemsData = await ApiService.axiosGet(
        'dataservice/clsItemMaster.php'
      );

      console.log('Item-Data', ItemsData);
      //setItemShow(ItemsData);
      //setUsers(usersData);
    } catch (err) {
      console.error(err.message);
    } finally {
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  const todoItems = itemShow.map((todo) => (
    <div >
      <img src={todo.mainImageURL} className="imgThumb" />
      {todo.ItemName}
      
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
      <div className="flatList">
        {todoItems}

        {/* <FontAwesomeIcon icon={faUser} /> */}
      </div>
    </div>
  );
}

export default Box2;
