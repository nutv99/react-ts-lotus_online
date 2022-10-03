import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as sIcon from '@fortawesome/free-solid-svg-icons';

import '../style.css';
import ApiService from '../Apiservice';
import NewUtil from '../service/newutil';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

interface userModel {
  username: string;
  password: string;
}

function PageProductDetail(ItemCode: string) {
  // Section 2 **************** Start Declare Var  ********

  let { productid } = useParams();
  const [item2s, setItem2s] = useState([]);
  const [loading, setLoading] = useState(false);
  const count = 0;
  const user = {} as userModel;
  const [userData, setUserData] = useState(user);

  //***********************   Start Declare Function  **********************
  const getDataAPI = async () => {
    try {
      setLoading(true);
      let endPoint = 'dataservice/clsItemMaster.php';
      const usersData = await ApiService.axiosGet(endPoint);
      //setUsers(usersData);
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
    }, []);

    //******************************* Start Rendor  ********************
    return (
      <div>
        <div className="header99">
          {/* <ul>
          {item2s.map((user) => {
            return <li key={user.ItemName}>Name: {user.ItemName}</li>;
          })}
       </ul> */}
        </div>

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper> */}
      </div>
    );
  };
}

export default PageProductDetail ;