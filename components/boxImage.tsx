import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from './heart';
import '../style.css';
import ApiService from '../Apiservice';
import PageProductDetail from '../pages/productdetail';
// import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

export const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'THB',
  }).format(value);

export const THBath = (value) =>
  new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
  }).format(value);

function BoxImage({ apicode, mycaption }) {
  const [itemDataList, setitemDataList] = useState([]);

  // const [users, setUsers] = useState([]);

  const subItem = itemDataList.map((todo) => (
    
      <div key={todo.name} className="box2Col">
        <div className="center">
          <Link to="/pageDetail">
            <img src={todo.mainImageURL} className="imgThumb" />
          </Link>
        </div>
        <div className="caption boxCaption lineClamp3">{todo.ItemName}</div>

        <div>{THBath(todo.SellPrice)} </div>
        <div>
          <Heart heartid={todo.ItemCode} />
        </div>
      </div>

      
   
  ));
  
  const getDataAPI = async () => {
    // Test Get DATA
    try {
      const usersData = await ApiService.axiosGet(
        'dataservice/clsItemMaster.php'
      );
      setitemDataList(usersData);
      console.log('Box Image Data', usersData);

      // // วิธีที่ 2 ไม่ใช้ service
      // axios
      //   .get('https://lovetoshopmall.com/dataservice/clsItemMaster.php')
      //   .then((res) => {
      //     // console.log('sssss', res.data);
      //     //const newTodos = [...res.data];
      //     const newTodos = res.data;
      //     // console.log('newTodo', newTodos);
      //     // console.log('itemDataList-999', itemDataList);

      //     setitemDataList(res.data);
      //     console.log('Ddddd', itemDataList);
      //   })
      //   .catch((error) => console.log(error));
    } catch (err) {
      console.error(err.message);
    } finally {
    }
  };

  useEffect(() => {
    getDataAPI();
  }, []);

  return (
    <div>
      <div className="captionBar">
        <div>{mycaption}</div>
        <div className="right">ดูทั้งหมด</div>
      </div>

      <div className="flex flexWrap">
        {subItem}
        {/* <FontAwesomeIcon icon={faUser} /> */}
      </div>
    </div>
  );

}
export default BoxImage;
