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

import Heart from '../components/heart';
// Import Swiper styles
import 'swiper/css';

interface userModel {
  username: string;
  password: string;
}

function PageProductDetail() {
  let { productid } = useParams('');
  const [item, setItem] = useState([]);
  const [itemReviews, setItemReviews] = useState([]);
  const [review, setReview] = useState(0);

  const [tabState, setTabState] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

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

  const getItemReview = async () => {
    try {
      let endPoint = 'dataservice/clsItemReview.php?itemcode=' + productid;
      const ProductReview = await ApiService.axiosGet(endPoint);
      setItemReviews(ProductReview);
      console.log('Item Review is', ProductReview);
    } catch (err) {
      console.error(err.message);
    } finally {
    }
  }; // end get DataAPI

  useEffect(() => {
    getDataAPI();
  }, []);

  useEffect(() => {
    getItemReview();
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

  // const pageReviewAA = () => {
  //   return (
  //     itemReviews && itemReviews.length &&
  //     itemReviews.map((itemReview) => {
  //       return <div>99999</div>;
  //     })
  //   );
  // };

  const pageReview = () => {
    return (
     <div> ssss </div>
    )
  };

  const setTab = (tabno) => {
    setActiveTab(tabno);
  };

  const Tab = () => {
    return (
      <div>
        <div className="flex">
          <button
            onClick={() => {
              setActiveTab(1);
            }}
          >
            รายละเอียด
          </button>
          <button
            onClick={() => {
              setActiveTab(2);
            }}
          >
            วิธีใช้
          </button>

          <button
            onClick={() => {
              setActiveTab(3);
            }}
          >
            รีวิวสินค้า
          </button>
        </div>
        
        {activeTab == 1 && <div>{item[0] && item[0].Description}</div>}
        {activeTab == 2 && <div>Tab2</div>}
        {activeTab == 3 && (
          <div>
            {
              itemReviews && itemReviews.length &&
                 itemReviews.map((itemReview) => {
                     return <div>{itemReview.comment}</div>;
                 })
            }
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {CarouselItem()}
      <div className="myContainer">
        <h3> {item[0] && item[0].ItemName}</h3>
        <div style={{ marginTop: 25 }}>
          <div className="flex">
            <div className="salePrice">
              {NewUtil.THBath(item[0] && item[0].SellPrice)}
            </div>
            <div className="fullPrice" style={{ marginLeft: 20, fontSize: 12 }}>
              {NewUtil.THBath(item[0] && item[0].fullPrice)}
            </div>
            <div className="discTag" style={{ fontSize: 12 }}>
              {item[0] && item[0].discount} %
            </div>
          </div>
          <div className="flex">
            <div style={{ fontSize: 12 }}>
              <FontAwesomeIcon icon={sIcon.faEye} />
              {item[0] && item[0].numView}
            </div>
            <div style={{ marginLeft: 20, fontSize: 12 }}>
              <FontAwesomeIcon icon={sIcon.faTachographDigital} />
              {item[0] && item[0].numSale}
            </div>
            <div className="mlauto" style={{ fontSize: 12 }}>
              ยอดคงเหลือ {item[0] && item[0].balance} ชิ้น
            </div>
          </div>
          <div className="box2 flex">
            <div>
              <div>ราคาค่าจัดส่ง : 80 บาท</div>
              <div>ระยะเวลาจัดส่ง : 3-4 วัน</div>
            </div>
            <div className="mlauto">
              <img
                src="https://blog.lnw.co.th/wp-content/uploads/2019/11/flash-express.jpg"
                alt=""
                className="imgA"
              />
            </div>
          </div>

          <div>
            <Heart heartid={productid} showInput="y" ItemData={item} />
          </div>
          <div>
            <Tab />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default PageProductDetail;
