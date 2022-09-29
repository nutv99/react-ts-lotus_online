import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

import ApiService from '../Apiservice';
import ImageGallery from 'react-image-gallery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const PageProductDetail = () => {
  const getItemData = async () => {
  const [loading, setLoading] = useState(false);
  const [itemData, setItemData] = useState();

    const testApi = async () => {
      // Test Get DATA
      try {
        setLoading(true);
        const ItemData = await ApiService.axiosGet(
          'dataservice/clsItemMaster.php'
        );
        setItemData(ItemData);
        console.log('user from main', ItemData);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }; 

   


    useEffect(() => {
      getItemData();
    }, []);

    return (
      <div>
        <h2>Product Detail </h2>
      </div>
    );
  };
};




export default PageProductDetail;


