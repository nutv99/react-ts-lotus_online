import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ApiService from './Apiservice';


const testApi = async () => {
  // Test Get DATA
  try {
    
    // const usersData = await ApiService.httpGet(
    //   'dataservice/clsItemMaster.php'
    // );
    const usersData = await ApiService.axiosGet('dataservice/clsItemMaster.php') ;
    // const usersData = '{}';
    // axios
    // .get("https://lovetoshopmall.com/dataservice/clsItemMaster.php")
    // .then(data => console.log(data.data))
    // .catch(error => console.log(error));

    

    
    console.log('userData', usersData);
    //setUsers(usersData);
    
  } catch (err) {
    console.error(err.message);
  } finally {
    
  }
}; 



useEffect(() => {
  testApi();
}, []);
