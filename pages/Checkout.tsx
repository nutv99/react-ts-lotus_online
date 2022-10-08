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
// import '@shopify/polaris/build/esm/styles.css';
// import { AppProvider, Page, Card, Button } from '@shopify/polaris';

function CheckOut() {
  // Section 2 **************** Start Declare Var  ********
  const [item2s, setItem2s] = useState([]);
  const [loading, setLoading] = useState(false);
  const count = 0;

  //***********************   Start Declare Function  **********************
  const getDataAPI = async () => {
    try {
      setLoading(true);
      let endPoint = 'dataservice/clsItemMaster.php';
      const usersData = await ApiService.axiosGet(endPoint);
      setItem2s(usersData);
      console.log('user from main', usersData);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ****************************  Start Declare UseEfect    *******************************
  useEffect(() => {
    getDataAPI();
  }, [count]);

  //******************************* Start Rendor  ********************
  return (
    <div>
       
      <div className="topBarHeader flex">
        <div>
          <FontAwesomeIcon icon={sIcon.faLeftLong} />
        </div>
        <div className="mlAuto mr10">ยอดรวม : </div>
        <div className="mlAuto mr10">
          <FontAwesomeIcon icon={sIcon.faCartShopping} />
        </div>
      </div>
      <div className="pcontainer">
        <button className="Polaris-Button">Example button</button>
        <div>
          <h3>สรุปการชำระเงิน</h3>
        </div>
        <div className="flex">
          <div>ราคารวมค่าสินค้า</div>
          <div className="mlAuto mr10">5559</div>
        </div>
        <div className="flex">
          <div>ราคาค่าจัดส่งสินค้า</div>
          <div className="mlAuto mr10">59</div>
        </div>
        <hr />
        <div className="flex">
          <div>
            <h4>ราคารวมสุทธิ </h4>
          </div>
          <div className="mlAuto mr10">1,559</div>
        </div>

        <div className="flex">
          <div>
            <h2>สถานที่จัดส่ง </h2>
          </div>
          <div className="mlAuto mr10">
            <FontAwesomeIcon icon={sIcon.faEdit} />
          </div>
        </div>
        <div className="borderGray">
          <div>
            ส่ง <br />
            คุณ เอกชัย บางบอน
          </div>
        </div>
      </div>

      <div className="borderGray">
        <h3>วิธีการชำระเงิน </h3>
        <div className="flex">
          <div>
            <FontAwesomeIcon icon={sIcon.faLock} />
          </div>
          <div className="mr10">
            เวบไซท์นี้ รับรองความปลอดภัย ข้อมูลของท่านจะถูกเก็บเป็นความลับ{' '}
          </div>
        </div>
        <div>ชำระเงิน ด้วยเงินสด </div>
        <div>ชำระเงิน ด้วยการโอน </div>
        <div>ชำระเงิน ด้วยบัตรเครดิต </div>
        <div>ชำระเงิน ด้วยบัตร TrueMoney </div>
        <div>ชำระเงิน ด้วย Paypal </div>
        <div>ชำระเงิน เก็บเงินปลายทาง </div>
      </div>
      <div>ยืนยันการสั่งซื้อ</div>

    </div>
  );
}
export default CheckOut;
