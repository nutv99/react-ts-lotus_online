import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import ApiService from './Apiservice';
import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const [item2s, setItem2s] = useState([]);
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
useEffect(() => {
testApi();
},[count])

