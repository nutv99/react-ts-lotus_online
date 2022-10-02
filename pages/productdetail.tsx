import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Heart from '../components/heart';
import TabPanel from '../components/tab';
import { Rating } from 'react-simple-star-rating';
import ApiService from '../Apiservice';
import winStorage from '../service/winStorage';
import { THBath } from '../service/newutil';

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
  const [itemDataList2, setitemDataList2] = useState({});

  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(5);

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
      console.log('resDataAAA', resData);
      console.log('resData', itemDataList);
      setitemDataList2(resData);
      let numOrder = winStorage.getNumOrderOnLocal('guest', productid, 0);

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

      <Rating ratingValue="3" size="25" />

      <div className="flex">
        <div>
          ราคาเต็ม : {THBath(itemDataList[0] && itemDataList[0].fullPrice)}
        </div>
        <div className="boxRight price">
          ราคา : {itemDataList[0] && THBath(itemDataList[0].SellPrice)}
          {/* {THBath(todo.SellPrice)}  */}
        </div>
      </div>

      <div>
        <h4>การจัดส่ง </h4>
        <div className="box2 flex">
          <div>
            <p style={{ marginBottom: 10 }}>ส่งภายใน 1-2 วัน</p>
            <p>ราคาจัดส่ง 80 บาท</p>
          </div>
          <div className="boxRight">
            <img
              src="https://download-th.com/wp-content/uploads/2021/02/Flash-express.jpg"
              alt=""
              style={{ width: 100 }}
            />
          </div>
        </div>
      </div>

      <div className="divHeart">
        {itemDataList[0] && itemDataList[0].ItemCode && (
          <Heart heartid={itemDataList[0].ItemCode} showInput="y" />
        )}
      </div>

      <div className="flex">
        <div
          onClick={(e) => {
            e.preventDefault();
            settabState(0);
          }}
          className={tabState == 0 ? 'active' : 'nonactive'}
        >
          รายละเอียด
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            settabState(1);
          }}
          className={tabState == 1 ? 'active' : 'nonactive'}
        >
          วิธีใช้
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            settabState(2);
          }}
          className={tabState == 2 ? 'active' : 'nonactive'}
        >
          รีวิวสินค้า
        </div>
      </div>
      <div className="border" style={{ marginBottom: 50 }}>
        {tabState == 0 && (
          <div style={{ marginTop: 10 }}>
            <h3>{itemDataList[0] ? itemDataList[0].ItemName : ''}</h3>
            <div className="boxDesc fontSarabun" style={{ marginTop: 20 }}>
              {itemDataList[0] ? itemDataList[0].Description : ''}
            </div>
          </div>
        )}
        {tabState == 1 && <div className="fontSarabun"> Tab2 Content</div>}
        {tabState == 2 && <div className="fontSarabun"> Tab3 Content</div>}
      </div>
    </div>
  );
}

export default PageProductDetail;
