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

// interface userModel {
//   username: string;
//   password: string;
// }

function PageProductDetail() {
  let { productid } = useParams();
  const [item, setItem] = useState([]);

  const getDataAPI = async () => {
    try {
      let endPoint = 'dataservice/clsProductDetail.php?itemcode=' + productid;
      const ProductData = await ApiService.axiosGet(endPoint);
      setItem(ProductData);

      console.log('Item Data is', ProductData);
    } catch (err) {
      console.error(err.message);
    } finally {
    }
  }; // end get DataAPI

  useEffect(() => {
    getDataAPI();
  }, []);

  const CarouselItem = () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={item.length > 0 && item[0].mainImageURL}
            className="imgSwiper"
          />
        </SwiperSlide>

        {item[0] &&
          item[0].subImage.length &&
          item[0].subImage.map((subimg) => {
            console.log(subimg.subimageFileName);
            return (
              <SwiperSlide>
                <img src={subimg.subimageFileName} className="imgSwiper" />
              </SwiperSlide>
            );
          })}
      </Swiper>
    );
  };

  return (
    <div>
      {CarouselItem()}
      <div className="myContainer">
        <h3> {item[0] && item[0].ItemName}</h3>
        {item[0] && item[0].SellPrice}
      </div>
    </div>
  );
}

export default PageProductDetail;
