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
import winStorage from '../service/winStorage';
import TxtOrder from '../components/txtOrder';
import * as sIcon from '@fortawesome/free-solid-svg-icons';

function CartList() {
  // Section 2 **************** Start Declare Var  ********
  const [item2s, setItem2s] = useState([]);

  const [CartItemList, setCartItemList] = useState([]);

  const [Cart2, setCart2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10);
  const [grandTotal, setgrandTotal] = useState(0);

  //***********************   Start Declare Function  **********************

  const getDataAPI = async () => {
    try {
      setLoading(true);
      let endPoint = 'dataservice/clsItemMaster.php';
      // const usersData = await ApiService.axiosGet(endPoint);

      let cartData = winStorage.getOrderData();
      let tmp = [];
      console.log('cartData', cartData);
      for (let i = 0; i <= cartData.length - 1; i++) {
        tmp.push(cartData[i].numCart);
      }

      let storageName = 'shopData';
      let customerid = 'guest';
      let TotalMoney = winStorage.getTotalAmount(storageName, customerid);
      setgrandTotal(TotalMoney);

      setCart2(tmp);
      console.log('Cart2', tmp);

      setCartItemList(cartData);
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

  function subOrder(itemcode, numOrder) {
    let newOrder = numOrder--;
    //numOrder > -1 ? setnumOrder(newOrder) : newOrder;
    let memberid = 'guest';
    //winStorage.setNewOrderOnLocal(memberid, itemcode, newOrder);
    return;
  }

  function addOrderOnCart(itemcode, numOrder, SellPrice) {
    let newOrder = numOrder++;

    //numOrder > -1 ? setnumOrder(newOrder) : newOrder;
    let memberid = 'guest';
    winStorage.setNewOrderOnLocal(memberid, itemcode, newOrder);
    for (let i = 0; i <= CartItemList.length - 1; i++) {
      if (CartItemList[i].ItemCode === itemcode) {
        CartItemList[i].numCart = newOrder;
        alert('Found = ' + CartItemList[i].numCart);
      }
    } 

    let TotalMoney = winStorage.getTotalAmount('shopData', 'guest');
    
    return;
  }

  const numTextOrder = (itemCode, item, SellPrice) => {
    return (
      <div className="mlAuto">
        <button className="btnSub">-</button>
        <input type="text" className="txtnumOrder" value={item.numCart} />
        <button
          className="btnAdd"
          onClick={() => addOrderOnCart(itemCode, item.numCart++, SellPrice)}
        >
          +
        </button>
      </div>
    );
  };

  function AddCount(num) {
    setCount(num);
  }

  //******************************* Start Rendor  ********************
  return (
    <div>
      <div className="topBarHeader flex">
        <div>
          <FontAwesomeIcon icon={sIcon.faLeftLong} />
        </div>
        <div className="mlAuto mr10">ยอดรวม : {NewUtil.THBath(grandTotal)}</div>
        <div className="mlAuto mr10">
          <FontAwesomeIcon icon={sIcon.faCartShopping} />
        </div>
      </div>
      <ul>
        {CartItemList &&
          CartItemList.map((item) => {
            //alert(item.Amount);
            return (
              <div className="borderGray">
                <div className="flex " style={{ height: 100, padding: 20 }}>
                  <img src={item.mainImageURL} alt="" style={{ width: 50 }} />
                  <div className="BoxItemName" style={{ marginLeft: 15 }}>
                    {item.ItemName}
                  </div>
                </div>

                <div>
                  <TxtOrder
                    heartid={item.ItemCode}
                    showInput="y"
                    ItemData=""
                    SellPrice={item.SellPrice}
                    Amount={item.Amount}
                  />
                </div>
              </div>
            );
          })}
      </ul>

      <div className='flex mFooter'>
         <Link to= "/CheckOut"> Check Out </Link>
      </div>
    </div>
  );
}
export default CartList;
