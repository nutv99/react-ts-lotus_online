import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as sIcon from '@fortawesome/free-solid-svg-icons';
import './style.css';
import ApiService from './Apiservice';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
   
 // Section 2 **************** Start Declare Var  ********
 


    
 //***********************   Start Declare Function  **********************   
const getDataAPI = async () => {
try {
     setLoading(true);
      let endPoint = 'dataservice/clsItemMaster.php';
      const usersData = await ApiService.axiosGet(endPoint);
      setUsers(usersData);
      console.log('user from main', usersData);
      setLoading(false);
 } catch (err) {
      console.error(err.message);
 } finally {
      setLoading(false);
}
    
 // ****************************  Start Declare UseEfect    *******************************
   useEffect(() => {
      getDataAPI();
   },[count]); 

  <ul>
    {item2s.map((user) => {
         return <li key={user.ItemName}>Name: {user.ItemName}</li>;
     })}
  </ul> 

  const Obj1 = [{username:'A'},{username:'B'},{username:'C'}]
  const Obj2 = [{username:'D'},{username:'E'},{username:'F'}]
  // Merge Obj1,Obj2--> Obj3
  Obj3 = [...Obj1,...Obj2]
  //Result Obj3 = [{username:'A'},{username:'B'},{username:'C'},{username:'D'},{username:'E'},{username:'F'}]
  });

 const filtered = arr.filter(obj => {
   return obj.country === 'Austria';
 }); 
  
 //******************************* Start Rendor  ********************  
return (
   <div>
     <div className='header99'>
       {/* <ul>
          {item2s.map((user) => {
            return <li key={user.ItemName}>Name: {user.ItemName}</li>;
          })}
       </ul> */}
     </div>
   </div>
)


