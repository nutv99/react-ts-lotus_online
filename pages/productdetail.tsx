import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from '../components/heart';
import TabPanel from '../components/tab';
import ApiService from '../Apiservice';

import '../style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

function PageProductDetail() {
  const [item2s, setItem2s] = useState([]);
  const [itemImage, setItemImage] = useState([]);
  const [itemDataList, setitemDataList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [tabState, settabState] = useState(0);

  const [shopCart, setShopCart] = useState({ item1: 'Juice' });

  let { productid } = useParams();
  let aa: [];
  let bb;

  const getDataAPI = async () => {
    try {
      setLoading(true);
      let endPoint = 'dataservice/clsProductDetail.php?itemcode=' + productid;
      //endPoint = 'dataservice/999clsItemMaster.php';

      const resData = await ApiService.axiosGet(endPoint);
      setitemDataList(resData);
      console.log('resData', itemDataList);

      setLoading(false);
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const setDataAPI = () => {
    console.log('Change State itemDataList', itemDataList);
    if (itemDataList.length > 0) {
      // alert(itemDataList[0].subImage[0].subimageFileName);
    }
  };

  // ****************************  Start Declare UseEfect    *******************************
  useEffect(() => {
    getDataAPI();
  }, []);

  useEffect(() => {
    setDataAPI();
  }, [itemDataList]);

  return (
    <div className="swiperContainer">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {itemDataList &&
          itemDataList.map((todo) => (
            <SwiperSlide>
              <img src={todo.mainImageURL} className="imgSwiper" />
            </SwiperSlide>
          ))}
        {itemDataList[0] &&
          itemDataList[0].subImage.map((subtodo) => (
            <SwiperSlide>
              <img src={subtodo.subimageFileName} className="imgSwiper" />
            </SwiperSlide>
          ))}
      </Swiper>
      <h2 className="Caption">{itemDataList[0] && itemDataList[0].ItemName}</h2>
      <div className="divHeart">
        {itemDataList[0] && itemDataList[0].ItemCode && (
          <Heart heartid={itemDataList[0].ItemCode} />
        )}
      </div>
      <div className="flex">
        <div
          onClick={(e) => {
            e.preventDefault();
            settabState(0);
          }}
          className={tabState == 0 ? 'active': 'nonacctive'}
        >
          Tab1
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            settabState(1);
          }}
          className={  tabState == 1 && 'active'}
        >
          Tab2
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            settabState(2);
          }}
          className={tabState == 2 && 'active'}
        >
          Tab3
        </div>
      </div>
      <div className='border'>

      {tabState == 0 && <div> Tab1 Content</div>}
      {tabState == 1 && <div> Tab2 Content</div>}
      {tabState == 2 && <div> Tab3 Content</div>}
      </div>
    </div>
  );
}

export default PageProductDetail;
