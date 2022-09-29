import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [loading, setLoading] = useState(false);

  const [shopCart, setShopCart] = useState({ item1: 'Juice' });

  let { productid } = useParams();
  let aa: [];
  let bb;

  const getDataAPI = async () => {
    try {
      setLoading(true);
      let endPoint = 'dataservice/clsProductDetail.php?itemcode=' + productid;
      const resData = await ApiService.axiosGet(endPoint);

      console.log('resData', resData);
      // setItemImage((itemImage) => ({
      //   ...itemImage,
      //   ...resData,
      // }));

      //aa = [...resData];
      setItemImage([...itemImage, ...resData]);
      //itemImage.push(resData);
      // console.log('resData88', JSON.stringify(itemImage));

      //let updatedValue = {};
      let updatedValue = { item1: '888888ppppp' };
      let pp = { ...shopCart, ...updatedValue };
      console.log('pp', pp);

      // setShopCart((shopCart) => ({
      //   ...shopCart,
      //   ...pp,
      // }));
      console.log('resData88', shopCart);

      setShopCart((shopCart) => ({
        ...shopCart,
        ...updatedValue,
      }));
      console.log('resData99', shopCart);

      setLoading(false);
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const setDataAPI = () => {
    console.log('Change State');
    console.log(itemImage);
  };

  // ****************************  Start Declare UseEfect    *******************************
  useEffect(() => {
    getDataAPI();
  }, []);

  useEffect(() => {
    setDataAPI();
  }, [itemImage]);

  return (
    <div className="swiperContainer">
      <h3>
        ID :: {productid} {itemImage[0].ItemCode} ,
      </h3>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <SwiperSlide>
          <img src={itemImage[0].mainImageURL} className="imgSwiper" />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <img src={itemImage.subImage[0].subimage} className="imgSwiper" />
        </SwiperSlide> */}

        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/micellar-water-with-ginkgo-biloba-extract-makeup-cleaning-3d-realistic-vector-advertising-banner-poster_33099-1252.jpg?w=740&t=st=1664436676~exp=1664437276~hmac=b51eced55f8cf41f2b8e3478a9beb72762b046514cdfcca9f457c3370139e480"
            className="imgSwiper"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-psd/healthy-eating-lifestyle-banner-template_23-2149087275.jpg?w=826&t=st=1664436804~exp=1664437404~hmac=78280ede3d355bddab743d163e1b76a5b471bae52afcca116d468fdb27ae3ea4"
            className="imgSwiper"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/body-lotion-with-lemon-realistic-ads_88138-101.jpg?1&w=826&t=st=1664436835~exp=1664437435~hmac=8f47ab226f61bbb2ad08e84d74c245594ceab274093630193cb6f36c4a605400"
            className="imgSwiper"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/perfume-fresh-aroma-glass-bottle-with-water-splash-blue-blurred-background_33099-1426.jpg?w=740&t=st=1664436909~exp=1664437509~hmac=13366fdba5896a0555f6a46cc3d5cccb3ca9e4a2482a9e029092d3da28c4d427"
            className="imgSwiper"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PageProductDetail;
